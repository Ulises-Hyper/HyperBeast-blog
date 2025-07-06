import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@heroui/react";

export default function PostsTag() {

    const [tags, setTags] = useState([]);
    const [input, setInput] = useState("");

    const addTag = () => {
        const trimmed = input.trim();
        if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed]);
        }
        setInput("");
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-gray-100 mb-2"
                    >
                        {tag}
                        <X
                            className="ml-2 h-4 w-4 cursor-pointer text-blue-500 hover:text-blue-700"
                            onClick={() => removeTag(tag)}
                        />
                    </span>
                ))}
            </div>

            <Input
                style={{
                    outline: "none",
                    boxShadow: "none",
                    border: "none",

                }}
                type="text"
                placeholder="Etiquetas..."
                description="Añade una o múltiples etiquetas"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}