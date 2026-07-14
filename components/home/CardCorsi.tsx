import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const courses = [
  {
    name: 'IRATA',
    description: 'Industrial Rope Access Trade Association',
    logo: '/logos/logo-irata-international.avif',
  },
  {
    name: 'GWO',
    description: 'Global Wind Organisation',
    logo: '/logos/logo-global-wind-organisation.avif',
  },
  {
    name: 'PETZL',
    description: 'Petzl Technical Institute',
    logo: '/logos/logo-petzl-technical-institute.avif',
  },
  {
    name: 'ALTRI',
    description: 'Scopri l’offerta completa',
    logo: '/logos/logo-dinamiche-verticali-formazione.svg',
  },
];

export default function CardCorsi() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {courses.map((course) => (
        <div key={course.name} className="group relative flex min-h-[280px] w-[240px] flex-col overflow-hidden">
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
              className="text-border"
            />
          </svg>

          {/* Contenuto */}
          <div
            className="
      relative z-10
      flex h-full flex-1 flex-col
      items-center gap-4 p-6 text-center
    "
          >
            <div className="flex h-[100px] w-full items-center justify-center">
              <Image
                src={course.logo}
                alt={course.name}
                width={180}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="text-3xl uppercase leading-none text-foreground">{course.name}</h3>

            <p className="text-muted-foreground">{course.description}</p>

            {/* Freccia sempre in basso a destra */}
            <div className="mt-auto flex w-full justify-end">
              <ArrowUpRight className="rotate-45 text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
