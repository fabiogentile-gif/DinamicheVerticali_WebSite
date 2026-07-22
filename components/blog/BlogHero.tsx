import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface BlogHeroProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

export default function BlogHero({ image, category, title, description }: BlogHeroProps) {
  return (
    <section className="flex justify-center">
      <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[560px] aspect-[16/10]">
          <svg className="absolute h-0 w-0">
            <defs>
              <clipPath id="blogHeroClip" clipPathUnits="objectBoundingBox">
                <path d="M0.0038 0.0033 H0.8846 L0.9962 0.1 V0.9967 H0.1154 L0.0038 0.9 V0.0033Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="relative h-full w-full" style={{ clipPath: 'url(#blogHeroClip)' }}>
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 260 300"
            preserveAspectRatio="none"
          >
            <path
              d="M1 1 H230 L259 30 V299 H30 L1 270 V1"
              fill="currentColor"
              fillOpacity="0.05"
              className="text-muted"
            />

            <path
              d="M1 1 H230 L259 30 V299 H30 L1 270 V1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="text-border"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-heading text-[24px] font-semibold uppercase text-primary">{category}</p>

          <h1 className="font-heading text-2xl font-bold uppercase leading-none sm:text-[40px]">{title}</h1>

          <p className="max-w-xl text-[16px] leading-7">{description}</p>

          <a className="flex items-center gap-2 font-bold uppercase text-primary">
            Leggi <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
