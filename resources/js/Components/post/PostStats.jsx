import React from "react";

export default function PostStats() {
    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Estadísticas</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-[14px]">Visitas</span>
                    <span>1,252</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[14px]">Guardados</span>
                    <span>5</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[14px]">Favoritos</span>
                    <span>15</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[14px]">Me gustas</span>
                    <span>631</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[14px]">Comentarios</span>
                    <span>25</span>
                </div>
            </div>
        </div>
    )
}