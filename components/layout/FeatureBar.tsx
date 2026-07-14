import {
  BadgeCheck,
  CalendarDays,
  HardHat,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: (
      <>
        CERTIFICAZIONI
        <br />
        RICONOSCIUTE
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: (
      <>
        ISTRUTTORI
        <br />
        QUALIFICATI
      </>
    ),
  },
  {
    icon: HardHat,
    title: (
      <>
        FORMAZIONE
        <br />
        PRATICA
      </>
    ),
  },
  {
    icon: CalendarDays,
    title: (
      <>
        DATE FLESSIBILI
        <br />
        TUTTO L’ANNO
      </>
    ),
  },
];

export default function FeatureBar() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-7 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-center gap-4 lg:justify-start"
            >
              <Icon
                size={48}
                strokeWidth={1.5}
              />

              <p className="font-manrope text-sm leading-tight font-bold uppercase tracking-wide">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}