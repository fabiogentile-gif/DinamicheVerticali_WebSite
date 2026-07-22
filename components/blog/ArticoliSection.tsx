'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ArticleCard from './ArticoliCard';
import { Article } from '@/lib/types/article';

interface ArticleSectionProps {
  title: string;
  articles: Article[];
}

export default function ArticoliSection({ title, articles }: ArticleSectionProps) {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(articles.length / perPage);

  const prev = () => setCurrent((i) => (i === 0 ? totalPages - 1 : i - 1));
  const next = () => setCurrent((i) => (i === totalPages - 1 ? 0 : i + 1));

  const visible = articles.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="mx-auto max-w-[1500px] space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[32px] font-bold uppercase sm:text-[36px]">{title}</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {current * perPage + 1}–{Math.min(current * perPage + perPage, articles.length)} / {articles.length}
          </span>
          <button onClick={prev} className="rounded-[9px] border p-3 transition hover:bg-black hover:text-white">
            <ArrowLeft size={16} />
          </button>
          <button onClick={next} className="rounded-[9px] border p-3 transition hover:bg-black hover:text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition ${i === current ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
