"use client";

import { useMemo, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

type Course = {
  title: string;
  date: string; // YYYY-MM-DD
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function CalendarioCorsi({ initialCourses, }: { initialCourses: Course[]; }) {
  const [courses] = useState(initialCourses);
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

  const monthCourses = useMemo(() => {
    return courses.filter((c) => {
      const d = new Date(c.date);
      return (
        d.getFullYear() === currentYear &&
        d.getMonth() === currentMonth
      );
    });
  }, [currentMonth, currentYear]);


  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="p-6 w-[60%]">
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
                  className={`relative h-20 rounded-md border p-2 transition ${dayCourses.length > 0 ? "border-primary" : "hover:bg-muted"}`}>
                  {dayCourses.length > 0 && (
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-primary" />
                  )}

                  <div className="text-sm font-semibold">{day}</div>

                  {dayCourses.length > 0 && (
                    <p className="mt-2 text-xs line-clamp-2">
                      {dayCourses[0].title}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* SIDE BAR RIEPILOGO CORSI */}
        <Card className="w-[40%] p-6">
          <h3 className="text-lg font-semibold">
            Corsi di{" "}
            <span className="text-primary">
              {new Date(currentYear, currentMonth).toLocaleString("it-IT", {
                month: "long",
              })}
            </span>
          </h3>

          <p className="text-sm text-muted-foreground mb-6">
            {monthCourses.length} {monthCourses.length === 1 ? "corso disponibile" : "corsi disponibili"}
          </p>

          {monthCourses.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
              <p className="text-sm text-muted-foreground">
                Nessun corso in questo mese
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {monthCourses.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-lg border p-4 transition hover:border-primary hover:bg-primary/5"
                >
                  <div className="w-1 rounded-full bg-primary" />

                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {new Date(c.date).toLocaleDateString("it-IT", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </p>

                    <h4 className="font-semibold mt-1">
                      {c.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>


  );
}