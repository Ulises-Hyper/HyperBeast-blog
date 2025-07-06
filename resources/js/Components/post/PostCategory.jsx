import React, {useState} from "react";
import { Select, SelectItem } from "@heroui/react";

export default function PostCategory({categories}) {
    const [values, setValues] = React.useState('');

    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Categorias</h3>
            <Select
                label="Categorías"
                description="Selecciona una o más categorías"
                selectedKeys={values}
                selectionMode="multiple"
                onSelectionChange={setValues}
            >
                {categories.map((category) => (
                    <SelectItem key={category.id}>{category.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}