import React from "react";
import { Select, SelectItem } from "@heroui/react";

export default function PostCategory({categories, selectedCategories, setSelectedCategories }) {
    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Categorias</h3>
            <Select
                label="Categorías"
                description="Selecciona una o más categorías"
                selectedKeys={selectedCategories}
                selectionMode="multiple"
                onSelectionChange={setSelectedCategories}
            >
                {categories.map((category) => (
                    <SelectItem key={category.id}>{category.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}