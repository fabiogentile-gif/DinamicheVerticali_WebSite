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
  defaultView?: 'calendar' | 'list';
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

export default function CalendarioCorsi({ courses = [], course, defaultView = 'calendar' }: Props) {
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

  const [view, setView] = useState<'calendar' | 'list'>(defaultView);
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

  const allSessions = useMemo(() => {
    const sessions: { course: Course; sessionId: string; date: Date }[] = [];
    filteredCourses.forEach((item) => {
      item.sessions.forEach((session) => {
        const date = new Date(session.startDate);
        if (date.getFullYear() === year && date.getMonth() === month) {
          sessions.push({ course: item, sessionId: session.id, date });
        }
      });
    });
    return sessions.sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [filteredCourses, year, month]);

  function changeMonth(value: number) {
    const date = new Date(year, month + value);

    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }

  return (
    <section className="mx-auto w-full max-w-375 px-4">
      <div className="mb-8 text-center">
        <h3 className="font-condensed text-xl font-bold uppercase text-[#ff6422]">Calendario</h3>
        <h2 className="font-condensed mt-2 text-2xl font-black uppercase sm:text-4xl">Scopri le prossime date dei corsi</h2>
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
            onClick={() => setView('calendar')}
            className={`border p-3 transition ${view === 'calendar' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            <CalendarDays size={20} />
          </button>

          <button
            onClick={() => setView('list')}
            className={`border p-3 transition ${view === 'list' ? 'bg-[#ff6422] text-white' : 'hover:bg-gray-100'}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {view === 'calendar' ? (
        <div className="border">
          <header className="flex items-center justify-between bg-black px-4 py-3 text-white sm:px-8 sm:py-5">
            <button onClick={() => changeMonth(-1)}>
              <ChevronLeft size={24} className="sm:h-[30px] sm:w-[30px]" />
            </button>

            <h3 className="font-condensed text-xl font-black uppercase sm:text-3xl">
              {new Date(year, month).toLocaleString('it-IT', {
                month: 'long',
                year: 'numeric',
              })}
            </h3>

            <button onClick={() => changeMonth(1)}>
              <ChevronRight size={24} className="sm:h-[30px] sm:w-[30px]" />
            </button>
          </header>

          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((day) => (
              <div key={day} className="bg-white py-2 text-center text-[10px] font-black text-gray-500 sm:text-xs">
                {day}
              </div>
            ))}

            {calendarDays.map((day, index) => {
              if (!day) return <div key={index} className="hidden bg-gray-50 sm:block sm:h-28" />;

              const event = courseAt(day);

              return (
                <div
                  key={index}
                  onClick={() => event && router.push(`/corsi/${event.slug}/iscrizione?session=${event.sessionId}`)}
                  className={`group relative h-16 p-1 sm:h-28 sm:p-3 ${
                    event
                      ? 'cursor-pointer bg-[#ff6422] text-white hover:brightness-110 hover:ring-2 hover:ring-white/40 hover:ring-offset-2 hover:ring-offset-[#ff6422] transition-all'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xs font-black sm:text-base">{day}</span>

                  {event && (
                    <>
                      <span className="absolute top-1 right-1 rounded bg-black/70 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity sm:top-3 sm:right-3 sm:text-xs">Iscriviti →</span>
                      <div className="absolute bottom-1 left-1 right-1 sm:bottom-3 sm:left-3 sm:right-3">
                        <p className="line-clamp-2 text-[8px] font-black uppercase sm:text-xs">{event.title}</p>
                        <p className="hidden text-[11px] uppercase opacity-80 sm:block">{event.category.name}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="border">
          <header className="flex items-center justify-between bg-black px-4 py-3 text-white sm:px-8 sm:py-5">
            <button onClick={() => changeMonth(-1)}>
              <ChevronLeft size={24} className="sm:h-[30px] sm:w-[30px]" />
            </button>

            <div className="text-center">
              <h3 className="font-condensed text-xl font-black uppercase sm:text-3xl">
                {new Date(year, month).toLocaleString('it-IT', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h3>
              <p className="mt-1 text-sm text-gray-300">{allSessions.length} sessioni disponibili</p>
            </div>

            <button onClick={() => changeMonth(1)}>
              <ChevronRight size={24} className="sm:h-[30px] sm:w-[30px]" />
            </button>
          </header>

          {allSessions.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              Nessuna sessione disponibile per questo mese.
            </div>
          ) : (
            <div className="divide-y">
              {allSessions.map(({ course: c, sessionId, date }) => (
                <div
                  key={sessionId}
                  onClick={() => router.push(`/corsi/${c.slug}/iscrizione?session=${sessionId}`)}
                  className="group flex items-center gap-4 p-4 transition-all hover:bg-orange-50 hover:ring-2 hover:ring-[#ff6422]/30 cursor-pointer sm:gap-6 sm:p-5"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center bg-[#ff6422] text-white sm:h-16 sm:w-16">
                    <span className="text-lg font-black leading-none sm:text-xl">
                      {date.toLocaleDateString('it-IT', { day: '2-digit' })}
                    </span>
                    <span className="text-[10px] font-bold uppercase sm:text-xs">
                      {date.toLocaleDateString('it-IT', { month: 'short' })}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-black uppercase sm:text-base">{c.title}</h4>
                    <span className="text-xs font-bold uppercase text-[#ff6422]">{c.category.name}</span>
                  </div>

                  <span className="hidden shrink-0 rounded bg-[#ff6422] px-3 py-1.5 text-xs font-bold text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity sm:block">Prenota</span>
                  <ChevronRight size={20} className="shrink-0 text-[#ff6422] transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
