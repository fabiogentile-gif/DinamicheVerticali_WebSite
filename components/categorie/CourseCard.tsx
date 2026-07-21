import { ArrowUpRight, Clock, ShieldCheck, Calendar } from 'lucide-react';
import LinkButton from '@/components/ui/Linkbutton';

interface CourseCardProps {
  title: string;
  description?: string | null;
  category: string;
  price?: number | null;
  slug: string;
  durationDays?: number | null;
  certificateDuration?: number | null;
  sessions?: { startDate: Date | string }[];
}

export default function CourseCard({
  title,
  description,
  category,
  price,
  slug,
  durationDays,
  certificateDuration,
  sessions,
}: CourseCardProps) {
  // Find next upcoming session
  const nextSession = sessions && sessions.length > 0 ? new Date(sessions[0].startDate) : null;
  const formattedDate = nextSession
    ? nextSession.toLocaleDateString('it-IT', { day: '2-digit', month: 'short' })
    : null;

  return (
    <article className="group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden bg-white p-7 transition-all duration-300 hover:-translate-y-2">
      {/* Cut-corner geometric SVG frame matching brand identity */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 300 380"
        preserveAspectRatio="none"
      >
        <path
          d="M 1 1 H 270 L 299 30 V 379 H 30 L 1 350 Z"
          fill="#ffffff"
          className="transition-colors group-hover:fill-orange-50/20"
        />
        <path
          d="M 1 1 H 270 L 299 30 V 379 H 30 L 1 350 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="text-[#aaaaaa]/40 transition-colors group-hover:text-primary"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-1 flex-col justify-between">
        <div>
          {/* Top category badge & next session pill */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-block bg-primary/10 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
              {category}
            </span>

            {formattedDate && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1">
                <Calendar size={12} className="text-primary" />
                {formattedDate}
              </span>
            )}
          </div>

          {/* Course Title */}
          <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight text-[#1e1e1c] transition-colors group-hover:text-primary">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
              {description}
            </p>
          )}

          {/* Meta Specifications */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-neutral-700">
            {durationDays && (
              <div className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded-none border border-neutral-200">
                <Clock size={13} className="text-primary" />
                <span>{durationDays} {durationDays === 1 ? 'giorno' : 'giorni'}</span>
              </div>
            )}

            {certificateDuration && (
              <div className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded-none border border-neutral-200">
                <ShieldCheck size={13} className="text-primary" />
                <span>Validità {certificateDuration} anni</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Price & Action Link */}
        <div className="mt-8 border-t border-neutral-100 pt-5 flex items-center justify-between">
          <div>
            {price ? (
              <div>
                <span className="text-xs text-neutral-500 uppercase font-semibold block">Prezzo</span>
                <span className="font-heading text-2xl font-bold text-[#1e1e1c]">
                  {price.toLocaleString('it-IT')}€ <span className="text-xs font-semibold text-neutral-500">+ IVA</span>
                </span>
              </div>
            ) : (
              <span className="font-heading text-base font-bold text-primary uppercase">
                Su Richiesta
              </span>
            )}
          </div>

          <LinkButton title="Scopri" href={`/corsi/${slug}`} bg arrow />
        </div>
      </div>
    </article>
  );
}