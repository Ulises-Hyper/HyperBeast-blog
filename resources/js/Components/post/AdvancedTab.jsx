import React from "react";
import { Select, SelectItem, DateInput, Divider } from "@heroui/react";
import { parseZonedDateTime } from "@internationalized/date";
import { Clock } from "lucide-react";
import { DeleteIcon } from "@/Components/icon/DeleteIcon";

export default function AdvancedTab() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const dateTimeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}[${timeZone}]`;
    const defaultValue = parseZonedDateTime(dateTimeString);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mt-4">
                    <Select label="Status" placeholder="Draft" variant="bordered" value="Draft">
                        <SelectItem>Draft</SelectItem>
                        <SelectItem>Published</SelectItem>
                        <SelectItem>Scheduled</SelectItem>
                    </Select>
                </div>
                <div className="mt-4">
                    <DateInput
                        defaultValue={defaultValue}
                        label="Appointment time"
                        variant="bordered"
                        hourCycle={24}
                        timeZone={timeZone}
                    />
                </div>
            </div>
            <Divider />
            <div className="flex justify-between items-center gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Created: 26/5/2025, 22:14:11</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Updated: 26/5/2025, 22:14:11</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <DeleteIcon size={16} />
                    <span>Deleted: Never</span>
                </div>
            </div>
        </div>
    );
}
