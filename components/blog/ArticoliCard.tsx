import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  intro: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
  sections: {
    heading: string;
    content: string;
  }[];
}

export default function ArticleCard({ title, intro, slug, image, category, date }: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <article className="flex h-full min-h-[520px] flex-col overflow-hidden border border-[#aaaaaa] bg-[#f7f7f7] transition hover:-translate-y-1">
        <div className="relative h-[260px] w-full overflow-hidden">
          <Image src={image || '/articoli/fallback-articoli.jpg'} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[14px] font-bold uppercase text-primary">
              <span>{category}</span>
              <span className="text-black">{date}</span>
            </div>

            <h3 className="font-heading text-[32px] font-semibold uppercase leading-none">{title}</h3>

            <p className="line-clamp-4 text-[16px] leading-7">{intro}</p>
          </div>

          <div className="mt-auto inline-flex w-fit items-center gap-2 px-1 py-2 text-[16px] font-bold uppercase text-primary">
            Leggi
            <ArrowUpRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  );
}
