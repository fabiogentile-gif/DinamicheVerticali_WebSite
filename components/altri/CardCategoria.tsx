import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description?: string;
  count: number;
  href: string;
}

export default function CategoryCard({ title, description, count, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-[#1E1E1C]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6316] hover:shadow-2xl"
    >
      <div>
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF6316]/10">
          <div className="h-3 w-3 rounded-full bg-[#FF6316]" />
        </div>

        <h3 className="text-2xl font-bold text-[#1E1E1C] transition-colors group-hover:text-[#FF6316]">{title}</h3>

        <p className="mt-4 text-base leading-7 text-neutral-600">{description}</p>

        <p className="text-muted-foreground">
          {count} {count === 1 ? 'corso disponibile' : 'corsi disponibili'}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[#FF6316]">
        <span className="font-semibold uppercase tracking-wider">Scopri</span>

        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </Link>
  );
}
