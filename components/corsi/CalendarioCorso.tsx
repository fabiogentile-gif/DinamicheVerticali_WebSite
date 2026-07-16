'use client';

import { useState } from 'react';
import CalendarFilters from './FiltriCalendarioCorso';
import CalendarCard, { CalendarEvent } from './CardCalendarioCorso';

interface CourseCalendarProps {
  title: string;
  subtitle: string;
  description: string;
  events: CalendarEvent[];
  levels?: string[];
}

export default function CourseCalendar({ title, subtitle, description, events, levels = [] }: CourseCalendarProps) {
  const [selectedLevel, setSelectedLevel] = useState(levels[0] ?? '');

  return (
    <section className="bg-background-lighter py-7">

      <div className="container mx-auto max-w-4xl px-5">
        <header className="space-y-2 text-center">
          <p className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">{title}</p>
          <h2 className="font-heading text-4xl font-bold uppercase">{subtitle}</h2>
          <p>{description}</p>
        </header>

        <div className="mt-8 rounded border border-border bg-white p-5">
          {levels.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 font-medium ${
                    selectedLevel === level ? 'bg-burning-orange-400 text-white' : 'bg-gray-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-px border border-border">
            {events.map((event) => (
              <CalendarCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
