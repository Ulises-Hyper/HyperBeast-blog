import React from "react";
import { Button } from "@heroui/react";
import { Eye, Globe, Calendar } from "lucide-react";

export default function PostSettings() {
    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Configuración de publicaciones</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Globe size={16} />
                        <span className="text-[14px]">Status: Draft</span>
                    </div>
                    <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Eye size={16} />
                        <span className="text-[14px]">Visibility: Public</span>
                    </div>
                    <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-[14px]">Schedule: Immediate</span>
                    </div>
                    <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                </div>
            </div>
        </div>
    );
}