'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, List, ChevronDown } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  category: string;
  sessions: {
    startDate: Date;
  }[];
};

const mainCategories = ['Tutti', 'IRATA', 'GWO', 'PTI'];

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

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const otherCategories = useMemo(() => {
    return [...new Set(courses.map((course) => course.category))].filter((item) => !mainCategories.includes(item));
  }, [courses]);

  const categories = useMemo(() => {
    return [...mainCategories, ...(otherCategories.length ? ['Altri'] : [])];
  }, [otherCategories]);

  const filteredCourses = useMemo(() => {
    if (category === 'Tutti') {
      return courses;
    }

    return courses.filter((course) => course.category === category);
  }, [courses, category]);

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const emptyDays = firstDay === 0 ? 6 : firstDay - 1;

    return [...Array(emptyDays).fill(null), ...Array.from({ length: totalDays }, (_, index) => index + 1)];
  }, [year, month]);

  function courseAt(day: number) {
    const date = `${year}-${pad(month + 1)}-${pad(day)}`;

    return filteredCourses.find((course) =>
      course.sessions.some((session) => formatDate(new Date(session.startDate)) === date),
    );
  }

  const monthCourses = useMemo(() => {
    return filteredCourses.filter((course) =>
      course.sessions.some((session) => {
        const date = new Date(session.startDate);

        return date.getFullYear() === year && date.getMonth() === month;
      }),
    );
  }, [filteredCourses, year, month]);

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
    <section className="mx-auto w-full max-w-375 px-4">
      <div className="mb-8 text-center">
        <h3 className="font-condensed text-xl font-bold uppercase text-[#ff6422]">Calendario</h3>

        <h2 className="font-condensed mt-2 text-4xl font-black uppercase">Scopri le prossime date dei corsi</h2>
      </div>

      <div className="mb-5 flex items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) =>
            item === 'Altri' ? (
              <div key={item} ref={othersRef} className="relative">
                <button
                  onClick={() => setShowOthers(!showOthers)}
                  className={`flex items-center gap-2 border px-6 py-2 text-sm font-bold uppercase transition ${
                    otherCategories.includes(category)
                      ? 'border-[#ff6422] bg-[#ff6422] text-white'
                      : 'hover:border-[#ff6422]'
                  }`}
                >
                  {otherCategories.includes(category) ? category : 'Altri'}

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
                        className={`block w-full px-4 py-2 text-left text-sm uppercase transition ${
                          category === other ? 'bg-[#ff6422] text-white' : 'hover:bg-gray-100'
                        }`}
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
                className={`border px-6 py-2 text-sm font-bold uppercase transition ${
                  category === item ? 'border-[#ff6422] bg-[#ff6422] text-white' : 'hover:border-[#ff6422]'
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>

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
            <div className="flex items-center justify-between bg-black px-8 py-5 text-white">
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
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((day) => (
                <div key={day} className="bg-white py-3 text-center text-xs font-black uppercase text-gray-500">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => {
                if (!day) {
                  return <div key={index} className="h-28 bg-gray-50" />;
                }

                const event = courseAt(day);

                return (
                  <div
                    key={index}
                    className={`relative h-28 p-3 ${event ? 'bg-[#ff6422] text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <span className="font-black">{day}</span>

                    {event && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="line-clamp-2 text-xs font-black uppercase leading-tight">{event.title}</p>

                        <p className="mt-1 text-[11px] font-bold uppercase opacity-80">{event.category}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <aside
          className={`h-142.5 overflow-hidden border bg-white transition-all duration-500 ${
            showSidebar ? 'w-[30%]' : 'w-0 translate-x-full opacity-0'
          }`}
        >
          <div className="min-w-[320px]">
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

            <div className="h-117.5 space-y-3 overflow-y-auto p-5">
              {monthCourses.map((course) => (
                <div key={course.id} className="border p-4 transition hover:border-[#ff6422]">
                  <h4 className="text-sm font-black uppercase">{course.title}</h4>

                  <span className="text-xs font-bold uppercase text-[#ff6422]">{course.category}</span>

                  <p className="mt-2 text-xs text-gray-600">
                    {new Date(course.sessions[0].startDate).toLocaleDateString('it-IT', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
