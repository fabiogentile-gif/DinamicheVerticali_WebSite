import Image from 'next/image';

interface CourseHeroProps {
  image?: string;
  imageAlt?: string;
  subtitle?: string;
  title: string;
  description?: string | null;
  count?: number;
}

export default function CourseHero({
  image,
  imageAlt = '',
  subtitle,
  title,
  description,
  count,
}: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1e1e1c] py-14 lg:py-20 text-white border-b border-[#333]">
      {/* Glow effect */}
      <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
          {/* Logo / Image Box */}
          {image && (
            <div className="relative shrink-0 flex h-28 w-44 items-center justify-center bg-white p-4 shadow-xl clipped-bottom-left-low border border-neutral-200">
              <Image
                src={image}
                alt={imageAlt || title}
                width={200}
                height={90}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          )}

          {/* Text Info */}
          <div className="flex-1 space-y-4">
            {subtitle && (
              <span className="inline-block border border-primary px-3 py-0.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {subtitle}
              </span>
            )}

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-none">
              {title}
            </h1>

            {description && (
              <p className="max-w-3xl text-base lg:text-lg leading-relaxed text-neutral-300">
                {description}
              </p>
            )}

            {count !== undefined && (
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white border border-white/15">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {count} {count === 1 ? 'Corso disponibile' : 'Corsi disponibili'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
