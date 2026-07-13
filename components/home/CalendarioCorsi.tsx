'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, List } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  category: string;
  sessions: {
    startDate: Date;
  }[];
};

const categories = ['Tutti', 'IRATA', 'GWO', 'PTI', 'Altri'];

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default function CalendarioCorsi({ courses }: { courses: Course[] }) {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [category, setCategory] = useState('Tutti');

  //Filtra corsi per categoria

  const filteredCourses = useMemo(() => {
    if (category === 'Tutti') {
      return courses;
    }

    if (category === 'Altri') {
      return courses.filter((course) => !['IRATA', 'GWO', 'PTI'].includes(course.category));
    }

    return courses.filter((course) => course.category === category);
  }, [courses, category]);

  //Genera giorni calendario

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(year, month);

    const firstDay = new Date(year, month, 1).getDay();

    const emptyDays = firstDay === 0 ? 6 : firstDay - 1;

    return [
      ...Array(emptyDays).fill(null),
      ...Array.from({ length: totalDays }, (_, index) => index + 1),
    ];
  }, [year, month]);

  //  Recupera corsi di un giorno

  function coursesAt(day: number) {
    const date = `${year}-${pad(month + 1)}-${pad(day)}`;

    return filteredCourses.filter((course) =>
      course.sessions.some((session) => formatDate(new Date(session.startDate)) === date),
    );
  }

  //  Corsi presenti nel mese corrente
  const monthCourses = useMemo(() => {
    return filteredCourses.filter((course) =>
      course.sessions.some((session) => {
        const date = new Date(session.startDate);

        return date.getFullYear() === year && date.getMonth() === month;
      }),
    );
  }, [filteredCourses, month, year]);

  function changeMonth(value: number) {
    let newMonth = month + value;
    let newYear = year;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setMonth(newMonth);
    setYear(newYear);
  }

  return (
    <section className="mx-auto max-w-6xl">
      {/* FILTRI */}
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`border px-5 py-2 text-sm transition ${
              category === item
                ? 'border-[#ff6422] bg-[#ff6422] text-white'
                : 'bg-white hover:border-[#ff6422]'
            } `}
          >
            {item}
          </button>
        ))}

        <div className="ml-auto flex">
          <button className="border bg-[#ff6422] p-3 text-white">
            <CalendarDays size={18} />
          </button>

          <button className="border p-3">
            <List size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        {/* CALENDARIO */}

        <div className="border bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <button onClick={() => changeMonth(-1)}>
              <ChevronLeft />
            </button>

            <h2 className="font-condensed text-3xl font-bold uppercase">
              {new Date(year, month).toLocaleString('it-IT', {
                month: 'long',
                year: 'numeric',
              })}
            </h2>

            <button onClick={() => changeMonth(1)}>
              <ChevronRight />
            </button>
          </div>

          <div className="grid grid-cols-7 border-t">
            {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((day) => (
              <div key={day} className="border-b py-3 text-center text-sm text-gray-500">
                {day}
              </div>
            ))}

            {calendarDays.map((day, index) => {
              if (!day) {
                return <div key={index} className="h-24 border" />;
              }

              const events = coursesAt(day);

              return (
                <div key={index} className="relative h-24 overflow-hidden border p-3">
                  <div className="font-semibold">{day}</div>

                  {events.length > 0 && (
                    <div className="absolute right-0 bottom-0 left-0 flex h-8 items-center truncate bg-[#ff6422] px-2 text-xs text-white">
                      {events[0].title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SIDEBAR */}

        <div className="border bg-white p-6">
          <h3 className="text-xl font-bold uppercase">
            Corsi di{' '}
            <span className="text-[#ff6422]">
              {new Date(year, month).toLocaleString('it-IT', {
                month: 'long',
              })}
            </span>
          </h3>

          <p className="mb-5 text-sm text-gray-500">{monthCourses.length} corsi disponibili</p>

          <div className="space-y-4">
            {monthCourses.map((course) => (
              <div key={course.id} className="border p-4 transition hover:border-[#ff6422]">
                <h4 className="font-semibold">{course.title}</h4>

                {course.sessions.map((session, index) => (
                  <p key={index} className="text-sm text-gray-500">
                    {new Date(session.startDate).toLocaleDateString('it-IT', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
