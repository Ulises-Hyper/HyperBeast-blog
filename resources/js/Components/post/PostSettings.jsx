import React from "react";
import { Eye, Globe, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function PostSettings({ status = "draft", scheduleDate = null }) {
    const visibility = status === "draft" ? "Private" : "Public";

    const scheduleLabel =
        status === "scheduled" && scheduleDate
            ? `Programado para ${format(scheduleDate.toDate(), "dd/MM/yyyy HH:mm")}`
            : status === "scheduled"
                ? "Programado"
                : "Inmediato";

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="p-4 border-b bg-white">
            <h3 className="font-bold mb-3">Configuración de publicaciones</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Globe size={16} />
                        <span className="text-[14px]">Status: {capitalize(status)}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Eye size={16} />
                        <span className="text-[14px]">Visibility: {visibility}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-[14px]">Schedule: {scheduleLabel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
