'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, List, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Course = {
  id: string;
  title: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  sessions: {
    id: string;
    startDate: Date;
  }[];
};

interface Props {
  courses?: Course[];
  course?: Course;
}

const mainCategories = ['Tutti', 'IRATA', 'GWO', 'PTI'];

function pad(value: number) {
  return value.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default function CalendarioCorsi({ courses = [], course }: Props) {
  const router = useRouter();
  const today = new Date();

  const calendarCourses = course ? [course] : courses;
  const isSingleCourse = !!course;

  const nextSession = course?.sessions
    .map((session) => new Date(session.startDate))
    .filter((date) => date >= today)
    .sort((a, b) => a.getTime() - b.getTime())[0];

  const [month, setMonth] = useState(nextSession?.getMonth() ?? today.getMonth());
  const [year, setYear] = useState(nextSession?.getFullYear() ?? today.getFullYear());
  const [category, setCategory] = useState(course?.category.name ?? 'Tutti');

  const [showSidebar, setShowSidebar] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  const othersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (othersRef.current && !othersRef.current.contains(event.target as Node)) {
        setShowOthers(false);
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const otherCategories = useMemo(
    () =>
      [...new Set(calendarCourses.map((item) => item.category.name))].filter((item) => !mainCategories.includes(item)),
    [calendarCourses],
  );

  const categories = useMemo(
    () => [...mainCategories, ...(otherCategories.length ? ['Altri'] : [])],
    [otherCategories],
  );

  const filteredCourses = useMemo(() => {
    if (isSingleCourse || category === 'Tutti') return calendarCourses;

    return calendarCourses.filter((item) => item.category.name === category);
  }, [calendarCourses, category, isSingleCourse]);

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const emptyDays = firstDay === 0 ? 6 : firstDay - 1;

    return [...Array(emptyDays).fill(null), ...Array.from({ length: totalDays }, (_, i) => i + 1)];
  }, [year, month]);

  function courseAt(day: number) {
    const date = `${year}-${pad(month + 1)}-${pad(day)}`;

    for (const item of filteredCourses) {
      const session = item.sessions.find((session) => formatDate(new Date(session.startDate)) === date);

      if (session) {
        return {
          ...item,
          sessionId: session.id,
        };
      }
    }

    return null;
  }

  const monthCourses = useMemo(
    () =>
      filteredCourses.filter((item) =>
        item.sessions.some((session) => {
          const date = new Date(session.startDate);
          return date.getFullYear() === year && date.getMonth() === month;
        }),
      ),
    [filteredCourses, year, month],
  );

  function changeMonth(value: number) {
    const date = new Date(year, month + value);

    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }

  return (
    <section className="mx-auto w-full max-w-375 px-4">
      <div className="mb-8 text-center">
        <h3 className="font-condensed text-xl font-bold uppercase text-[#ff6422]">Calendario</h3>
        <h2 className="font-condensed mt-2 text-4xl font-black uppercase">Scopri le prossime date dei corsi</h2>
      </div>

      <div className="mb-5 flex items-center gap-3">
        {!isSingleCourse && (
          <div className="flex flex-wrap gap-2">
            {categories.map((item) =>
              item === 'Altri' ? (
                <div key={item} ref={othersRef} className="relative">
                  <button
                    onClick={() => setShowOthers(!showOthers)}
                    className="flex items-center gap-2 border px-6 py-2 text-sm font-bold uppercase hover:border-[#ff6422]"
                  >
                    Altri
                    <ChevronDown size={16} />
                  </button>

                  {showOthers && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-56 border bg-white p-2 shadow-xl">
                      {otherCategories.map((other) => (
                        <button
                          key={other}
                          onClick={() => {
                            setCategory(other);
                            setShowOthers(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-sm uppercase hover:bg-gray-100"
                        >
                          {other}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`border px-6 py-2 text-sm font-bold uppercase ${
                    category === item ? 'bg-[#ff6422] text-white' : ''
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        )}

        <div className="ml-auto flex">
          <button
            onClick={() => setShowSidebar(false)}
            className={`border p-3 ${!showSidebar ? 'bg-black text-white' : ''}`}
          >
            <CalendarDays size={20} />
          </button>

          <button
            onClick={() => setShowSidebar(true)}
            className={`border p-3 ${showSidebar ? 'bg-[#ff6422] text-white' : ''}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-hidden">
        <div className={`transition-all duration-500 ${showSidebar ? 'w-[70%]' : 'w-full'}`}>
          <div className="border">
            <header className="flex items-center justify-between bg-black px-8 py-5 text-white">
              <button onClick={() => changeMonth(-1)}>
                <ChevronLeft size={30} />
              </button>

              <h3 className="font-condensed text-3xl font-black uppercase">
                {new Date(year, month).toLocaleString('it-IT', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h3>

              <button onClick={() => changeMonth(1)}>
                <ChevronRight size={30} />
              </button>
            </header>

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((day) => (
                <div key={day} className="bg-white py-3 text-center text-xs font-black text-gray-500">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => {
                if (!day) return <div key={index} className="h-28 bg-gray-50" />;

                const event = courseAt(day);

                return (
                  <div
                    key={index}
                    onClick={() => event && router.push(`/corsi/${event.slug}/iscrizione?session=${event.sessionId}`)}
                    className={`relative h-28 p-3 ${
                      event ? 'cursor-pointer bg-[#ff6422] text-white' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-black">{day}</span>

                    {event && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="line-clamp-2 text-xs font-black uppercase">{event.title}</p>
                        <p className="text-[11px] uppercase opacity-80">{event.category.name}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {showSidebar && (
          <aside className="w-[30%] border bg-white">
            <div className="border-b p-5">
              <h3 className="font-condensed text-2xl font-black uppercase">
                Corsi di{' '}
                <span className="text-[#ff6422]">
                  {new Date(year, month).toLocaleString('it-IT', {
                    month: 'long',
                  })}
                </span>
              </h3>

              <p className="mt-2 text-sm text-gray-500">{monthCourses.length} corsi disponibili</p>
            </div>

            <div className="space-y-3 p-5">
              {monthCourses.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`/corsi/${item.slug}/iscrizione?session=${item.sessions[0].id}`)}
                  className="cursor-pointer border p-4 hover:border-[#ff6422]"
                >
                  <h4 className="text-sm font-black uppercase">{item.title}</h4>
                  <span className="text-xs font-bold uppercase text-[#ff6422]">{item.category.name}</span>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
