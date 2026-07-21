import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface CalendarEvent {
  id: string;
  day: string;
  month: string;
  category: string;
  title: string;
  href: string;
}

interface CalendarCardProps {
  event: CalendarEvent;
}

export default function CalendarCard({ event }: CalendarCardProps) {
  return (
    <Link
      href={event.href}
      className="flex border-b border-border last:border-b-0 hover:bg-background-lighter transition-colors"
    >
      <div className="flex w-24 shrink-0 flex-col items-center justify-center border-r border-border p-3">
        <span className="text-lg font-bold uppercase">{event.day}</span>
        <span className="text-sm">{event.month}</span>
      </div>

      <div className="flex flex-1 items-center justify-between p-5">
        <div>
          <p className="font-bold uppercase text-burning-orange-400">
            {event.category}
          </p>

          <h3 className="text-lg font-bold uppercase">
            {event.title}
          </h3>
        </div>

        <ArrowUpRight
          size={20}
          className="text-burning-orange-400"
        />
      </div>
    </Link>
  );
}