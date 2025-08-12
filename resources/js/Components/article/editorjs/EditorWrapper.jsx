import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./tools";

export default function EditorWrapper({ data = null, onReady, onSave, onContentChange }) {
    const editorInstanceRef = useRef(null);
    const autoSaver = useRef(null);

    useEffect(() => {
        let initialData = data || JSON.parse(localStorage.getItem('editor-autosave')) || { blocks: []};

        if (!initialData.blocks.find(b => b.type === "header")){
            initialData.blocks.unshift({
                type: "header",
                data: { text: "Título aquí"}
            })
        }

        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Empieza aquí a escribir...",
            tools,
            data: data || JSON.parse(localStorage.getItem("editor-autosave")) || {},
            autofocus: true,
            onReady: async () => {
                editorInstanceRef.current = editor;

                if (onSave) {
                    onSave(async () => {
                        if (typeof editorInstanceRef.current?.save === 'function') {
                            return await editorInstanceRef.current.save();
                        } else {
                            console.error("EditorJS no está listo todavía");
                            return null;
                        }
                    });
                }

                onReady?.();
            },
            onChange: async () => {
                if (typeof editorInstanceRef.current?.save !== 'function') return;

                clearTimeout(autoSaver.current);
                autoSaver.current = setTimeout(async () => {
                    try {
                        const content = await editorInstanceRef.current.save();
                        localStorage.setItem("editor-autosave", JSON.stringify(content));

                        const headerBlock = content.blocks.find(b => b.type === "header");
                        const title = headerBlock?.data?.text || '';

                        onContentChange?.(content, title);
                        console.log("Título del artículo: ", title);
                    } catch (err) {
                        console.error("Error al guardar automáticamente", err);
                    }
                }, 1000);
            },
        });

        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy();
                    editorInstanceRef.current = null;
                })
                .catch((e) => console.error("EditorJS cleanup error", e));
        };
    }, []);

    return (
        <div
            id="editorjs"
            className="editor-js-container prose border border-gray-300 rounded-lg p-4 bg-white"
        />
    );
}