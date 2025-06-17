import React from "react";
import { Button } from "@heroui/react";
import { Save, Eye, Upload } from "lucide-react";

export default function PostActions({ onSave }) {
  return (
    <div className="p-4 border-b bg-white">
      <div className="flex items-center gap-4 justify-between mb-4">
        <Button className="w-full" startContent={<Upload size={16} />} variant="bordered">Publicar</Button>
        <Button className="w-full" startContent={<Eye size={16} />} variant="bordered">Avance</Button>
      </div>
      <Button onPress={onSave} startContent={<Save size={16} />} className="px-4 py-2 w-full bg-black text-white" variant="bordered">Guardar Borrador</Button>
    </div>
  );
}