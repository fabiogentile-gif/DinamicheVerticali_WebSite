import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { logos } from '@/data/assets';

const courses = [
  {
    name: 'IRATA',
    description: 'Industrial Rope Access Trade Association',
    logo: logos.irata,
    href: '/categorie/irata',
  },
  {
    name: 'GWO',
    description: 'Global Wind Organisation',
    logo: logos.gwo,
    href: '/categorie/gwo',
  },
  {
    name: 'PETZL',
    description: 'Petzl Technical Institute',
    logo: logos.pti,
    href: '/categorie/pti',
  },
  {
    name: 'ALTRI',
    description: 'Scopri l’offerta completa',
    logo: logos.dinamicheVerticali,
    href: '/categorie',
  },
];

export default function CardCorsi() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {courses.map((course) => (
        <Link
          key={course.name}
          href={course.href}
          className="group relative flex min-h-70 w-60 flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2"
        >
          {/* Forma con sfondo e bordo */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 280">
            <path
              d="M1 1 H210 L239 30 V279 H30 L1 250 V1"
              fill="currentColor"
              fillOpacity="0.05"
              className="text-muted"
            />

            <path
              d="M1 1 H210 L239 30 V279 H30 L1 250 V1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="text-border transition-colors group-hover:text-primary"
            />
          </svg>

          <div className="relative z-10 flex h-full flex-1 flex-col items-center gap-4 p-6 text-center">
            <div className="flex h-25 w-full items-center justify-center">
              <Image
                src={course.logo}
                alt={course.name}
                width={180}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="font-heading text-3xl font-bold leading-none uppercase text-foreground">{course.name}</h3>

            <p className="text-muted-foreground">{course.description}</p>

            <div className="mt-auto flex w-full justify-end">
              <ArrowUpRight className="rotate-45 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
