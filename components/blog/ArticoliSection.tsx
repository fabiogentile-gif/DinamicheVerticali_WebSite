'use client';

import { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ArticleCard from './ArticoliCard';
import { Article } from '@/lib/types/article';

interface ArticleSectionProps {
  title: string;
  articles: Article[];
}

export default function ArticoliSection({ title, articles }: ArticleSectionProps) {
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const touchStart = useRef<number | null>(null);

  const desktopPerPage = 3;
  const mobileTotal = articles.length;
  const desktopTotal = Math.ceil(articles.length / desktopPerPage);

  const mobilePrev = () => setMobilePage((i) => (i === 0 ? mobileTotal - 1 : i - 1));
  const mobileNext = () => setMobilePage((i) => (i === mobileTotal - 1 ? 0 : i + 1));

  const desktopPrev = () => setDesktopPage((i) => (i === 0 ? desktopTotal - 1 : i - 1));
  const desktopNext = () => setDesktopPage((i) => (i === desktopTotal - 1 ? 0 : i + 1));

  const desktopVisible = articles.slice(desktopPage * desktopPerPage, desktopPage * desktopPerPage + desktopPerPage);

  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? mobileNext() : mobilePrev();
    }
    touchStart.current = null;
  }

  return (
    <section className="mx-auto max-w-[1500px] space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[32px] font-bold uppercase sm:text-[36px]">{title}</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            <span className="sm:hidden">{mobilePage + 1} / {mobileTotal}</span>
            <span className="hidden sm:inline">{desktopPage * desktopPerPage + 1}–{Math.min(desktopPage * desktopPerPage + desktopPerPage, mobileTotal)} / {mobileTotal}</span>
          </span>
          <button onClick={mobilePrev} className="rounded-[9px] border p-3 transition hover:bg-black hover:text-white">
            <ArrowLeft size={16} />
          </button>
          <button onClick={mobileNext} className="rounded-[9px] border p-3 transition hover:bg-black hover:text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Mobile: 1 article at a time with swipe */}
      <div
        className="overflow-hidden md:hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${mobilePage * 100}%)` }}
        >
          {articles.map((article) => (
            <div key={article.title} className="w-full shrink-0 px-1">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3 articles per page grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {desktopVisible.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {/* Mobile dots */}
        <div className="flex gap-2 md:hidden">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobilePage(i)}
              className={`h-2 rounded-full transition ${i === mobilePage ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
        {/* Desktop dots */}
        <div className="hidden gap-2 md:flex">
          {Array.from({ length: desktopTotal }).map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopPage(i)}
              className={`h-2 rounded-full transition ${i === desktopPage ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
