import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { logos } from '@/data/assets';

interface CategoryCardProps {
  title: string;
  description?: string | null;
  count: number;
  href: string;
  image?: string | null;
}

export default function CategoryCard({ title, description, count, href, image }: CategoryCardProps) {
  const logoSrc = image || logos.dinamicheVerticali;

  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[340px] flex-col overflow-hidden bg-white p-7 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Cut-corner geometric SVG frame */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <path
          d="M 1 1 H 270 L 299 30 V 359 H 30 L 1 330 Z"
          fill="#ffffff"
          className="transition-colors group-hover:fill-orange-50/20"
        />
        <path
          d="M 1 1 H 270 L 299 30 V 359 H 30 L 1 330 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="text-[#aaaaaa]/40 transition-colors group-hover:text-primary"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-1 flex-col justify-between">
        {/* Logo & Course Count Badge */}
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex h-16 w-36 items-center justify-start">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={title}
                  width={150}
                  height={60}
                  className="h-full max-h-12 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <FolderOpen size={20} />
                </div>
              )}
            </div>

            <span className="inline-flex items-center bg-primary/10 px-2.5 py-1 font-heading text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
              {count} {count === 1 ? 'Corso' : 'Corsi'}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 font-heading text-2xl lg:text-3xl font-bold uppercase text-[#1e1e1c] leading-tight transition-colors group-hover:text-primary">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {/* Footer Action */}
        <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-800 transition-colors group-hover:text-primary">
            Esplora Categoria
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-[#1e1e1c] transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight
              size={18}
              className="rotate-45 transition-transform duration-300 group-hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
