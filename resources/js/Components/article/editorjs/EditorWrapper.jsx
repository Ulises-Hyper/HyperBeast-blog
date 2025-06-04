import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./tools";

export default function EditorWrapper({ data = null, onReady, onSave }) {
    const editorInstanceRef = useRef(null);

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Empieza aquí a escribir...",
            tools: tools,
            data,
            autofocus: true,
            onReady: () => {
                editorInstanceRef.current = editor;
                onReady?.();
            },
            onChange: async () => {
                const savedData = await editor.save();
                onSave?.(savedData);
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