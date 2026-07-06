"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";

type Course = {
  title: string;
  date: string; // YYYY-MM-DD
};

const courses: Course[] = [
  { title: "IRATA L1", date: "2026-07-05" },
  { title: "IRATA L2", date: "2026-07-12" },
  { title: "IRATA L3", date: "2026-09-10" },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function CalendarioCorsi() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const days = useMemo(() => {
    const totalDays = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const cells: (number | null)[] = [
      ...Array(firstDay === 0 ? 6 : firstDay - 1).fill(null),
    ];

    for (let i = 1; i <= totalDays; i++) {
      cells.push(i);
    }

    return cells;
  }, [currentMonth, currentYear]);

  const hasCourse = (day: number) => {
    const date = `${currentYear}-${pad(currentMonth + 1)}-${pad(day)}`;
    return courses.filter((c) => c.date === date);
  };

  return (
    <Card className="p-6 w-full">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setCurrentMonth((m) => m - 1)}
          className="px-3 py-1 rounded bg-muted"
        >
          Prev
        </button>

        <h2 className="text-xl font-semibold">
          {new Date(currentYear, currentMonth).toLocaleString("it-IT", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button
          onClick={() => setCurrentMonth((m) => m + 1)}
          className="px-3 py-1 rounded bg-muted"
        >
          Next
        </button>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center font-medium mb-2 text-sm text-muted-foreground">
        {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => {
          if (!day) return <div key={i} />;

          const dayCourses = hasCourse(day);

          return (
            <div
              key={i}
              className="h-20 border rounded-md p-1 hover:bg-muted transition"
            >
              <div className="text-sm font-medium">{day}</div>

              {dayCourses.length > 0 && (
                <div className="mt-1 space-y-1">
                  {dayCourses.map((c, idx) => (
                    <div
                      key={idx}
                      className="text-xs bg-primary text-primary-foreground rounded px-1"
                    >
                      {c.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}