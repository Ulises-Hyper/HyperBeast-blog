import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./tools";

export default function EditorWrapper({ data = null, onReady, onSave, onContentChange }) {
    const editorInstanceRef = useRef(null);
    const autoSaver = useRef(null);

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Empieza aquí a escribir...",
            tools: tools,
            data: data || JSON.parse(localStorage.getItem("editor-autosave")) || {},
            autofocus: true,
            onReady: () => {
                editorInstanceRef.current = editor;

                if (onSave) {
                    onSave(() => editorInstanceRef.current.save());
                }

                onReady?.();
            },
            onChange: async () => {
                clearTimeout(autoSaver.current);
                autoSaver.current = setTimeout(async () => {
                    const content = await editorInstanceRef.current.save();

                    // Guarda en el localStorage
                    localStorage.setItem("editor-autosave", JSON.stringify(content));

                    // Extraer el título del header
                    const headerBlock = content.blocks.find(b => b.type === "header")
                    const title = headerBlock?.data?.text || '';
                
                    if (onContentChange){
                        onContentChange(content, title)
                    }
                }, 1000)
            },
        });

        return () => {
            editor.isReady
                .then(() => editor.destroy())
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