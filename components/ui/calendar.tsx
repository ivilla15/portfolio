// components/ui/calendar.tsx

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addMonths, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CalendarProps {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  className?: string;
  mode?: "single";
}

export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  className,
}) => {
  const [viewMonth, setViewMonth] = React.useState(new Date());

  const daysInMonth = Array.from(
    {
      length: new Date(
        viewMonth.getFullYear(),
        viewMonth.getMonth() + 1,
        0
      ).getDate(),
    },
    (_, i) => new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i + 1)
  );

  return (
    <div className={cn("p-4", className)}>
      <div className="flex items-center justify-between mb-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setViewMonth(addMonths(viewMonth, -1))}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="text-sm font-medium">
          {format(viewMonth, "MMMM yyyy")}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {daysInMonth.map((day) => {
          const isSelected = selected?.toDateString() === day.toDateString();
          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelect(day)}
              className={cn(
                "h-9 w-9 text-sm rounded-md hover:bg-accent hover:text-accent-foreground",
                isSelected && "bg-primary text-primary-foreground"
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};
