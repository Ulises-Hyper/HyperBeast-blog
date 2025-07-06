import React, { useState, useRef, useEffect } from "react";
import EditorWrapper from "@/Components/article/editorjs/EditorWrapper";
import { Button } from "@heroui/react";
import { Upload, X, ImageIcon } from "lucide-react";

export default function EditorTab({ onSaveRegister, postData = {}, setPostData }) {
    const fileInputRef = useRef(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleImageSelect = (file) => {
        if (file && file.type.startsWith("image/")) {
            const previewURL = URL.createObjectURL(file);
            setPostData((prev) => ({
                ...prev,
                image: file,
                image_preview: previewURL,
            }));
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files?.[0];
        if (file) handleImageSelect(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) handleImageSelect(files[0]);
    };

    const removeImage = () => {
        if (postData.image_preview) {
            URL.revokeObjectURL(postData.image_preview);
        }
        setPostData((prev) => ({
            ...prev,
            image: null,
            image_preview: null,
        }));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    useEffect(() => {
        return () => {
            if (postData.image_preview) {
                URL.revokeObjectURL(postData.image_preview);
            }
        };
    }, [postData.image_preview]);

    return (
        <main className="md:mt-6 space-y-6">
            <div className="space-y-4">
                {/* Editor */}
                <EditorWrapper onSave={onSaveRegister} />

                {/* Excerpt */}
                <div>
                    <label className="block mb-1 font-medium">Excerpt</label>
                    <textarea
                        className="w-full p-4 rounded-lg border-none h-32 mt-1 shadow"
                        placeholder="Escribe un pequeño resumen de tu publicación"
                        value={postData.excerpt || ""}
                        onChange={(e) => setPostData((prev) => ({ ...prev, excerpt: e.target.value }))}
                    />
                    <span className="text-sm text-gray-500">Los extractos son resúmenes opcionales elaborados a mano de su contenido.</span>
                </div>

                {/* Imagen destacada */}
                <div>
                    <label className="block mb-1 font-medium">Featured Image</label>
                    {postData.image_preview ? (
                        <div className="relative group border rounded-lg overflow-hidden">
                            <img
                                src={postData.image_preview}
                                alt="Vista previa"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <Button onPress={removeImage} color="danger" className="text-white">
                                    <X className="w-4 h-4 mr-1" />
                                    Eliminar
                                </Button>
                            </div>
                            <div className="m-2 text-sm text-gray-500 flex items-center gap-2 px-1">
                                <ImageIcon className="w-4 h-4" />
                                {postData.image?.name}
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${isDragOver ? "bg-gray-100 border-black" : "border-gray-300"}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Upload className="mx-auto mb-2 text-gray-500" size={32} />
                            <p className="text-gray-500">Arrastra y suelta una imagen aquí, o haz clic para seleccionar un archivo</p>
                            <label className="mt-4 inline-flex items-center justify-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                    className="hidden"
                                    ref={fileInputRef}
                                />
                                <Button variant="bordered" asChild>
                                    <span>Seleccionar imagen</span>
                                </Button>
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
