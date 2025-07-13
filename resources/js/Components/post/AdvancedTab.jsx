import React, { useState, useMemo } from "react";
import { Select, SelectItem, DateInput, Divider } from "@heroui/react";
import { parseZonedDateTime } from "@internationalized/date";
import { Clock } from "lucide-react";
import { DeleteIcon } from "@/Components/icon/DeleteIcon";
import { format } from "date-fns";

export default function AdvancedTab({ status, setStatus, scheduleDate, setScheduleDate}) {
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  const handleStatusChange = (key) => {
    const newStatus = [...key][0]
    setStatus(newStatus);

    console.log(newStatus);
    
    if (newStatus === "scheduled") {
      if (!scheduleDate) {
        const now = new Date();
        const dateTimeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
          now.getDate()
        ).padStart(2, "0")}T${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}[${timeZone}]`;
        
        setScheduleDate(parseZonedDateTime(dateTimeString));
      }
    } else {
      setScheduleDate(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mt-4">
          <Select
            label="Status"
            placeholder="Select status"
            variant="bordered"
            selectedKey={status}
            onSelectionChange={handleStatusChange}
          >
            <SelectItem key="draft" value="draft">Draft</SelectItem>
            <SelectItem key="published" value="published">Published</SelectItem>
            <SelectItem key="scheduled" value="scheduled">Scheduled</SelectItem>
          </Select>
        </div>

        <div className="mt-4">
          <DateInput
            value={scheduleDate}
            onChange={setScheduleDate}
            label="Scheduled Date"
            variant="bordered"
            hourCycle={24}
            timeZone={timeZone}
            isDisabled={status !== "scheduled"}
            placeholder="Select date and time"
          />
        </div>
      </div>

      <Divider />

      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock size={16} />
          <span>Created: Never</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock size={16} />
          <span>Updated: Never</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <DeleteIcon size={16} />
          <span>Deleted: Never</span>
        </div>
      </div>
    </div>
  );
}