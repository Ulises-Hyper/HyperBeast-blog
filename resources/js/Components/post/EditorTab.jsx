import React from "react";
import EditorWrapper from "@/Components/article/editorjs/EditorWrapper";
import { Button } from "@heroui/react";
import { Upload } from "lucide-react";

export default function EditorTab({ onSaveRegister }) {

    return (
        <main className="md:mt-6">
            <div className="container">
                <EditorWrapper onSave={onSaveRegister} />
            </div>
            <div className="md:mt-4">
                <label>Excerpt</label>
                <textarea className="w-full p-4 rounded-lg border-none h-32 mt-1 shadow" placeholder="Escribe un pequeño resumen de tu publicación"></textarea>
                <span className="text-sm text-gray-500">Los extractos son resúmenes opcionales elaborados a mano de su contenido.</span>
            </div>
            <div className="md:mt-4">
                <label>Featured Image</label>
                <div className="rounded-lg border-2 border-dashed border-gray-300 h-full w-full md:mt-1">
                    <div className="flex flex-col gap-4 justify-center items-center md:m-4">
                        <Upload size={28} />
                        <span className="text-gray-500">Drag and drop an image here, or click to select a file</span>
                        <Button variant="bordered">Select Image</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
