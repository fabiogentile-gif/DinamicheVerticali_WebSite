import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import type { Article } from '@/lib/types/article';
import articles from '@/data/articles.json';

function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug) as Article | undefined;
}

function getHeroImage(image?: string) {
  if (!image || !image.startsWith('http')) {
    return '/articoli/fallback-articoli.avif';
  }

  return image;
}

function getReadingTime(sectionsLength: number) {
  return `${Math.max(3, Math.ceil(sectionsLength * 1.2))} minuti`;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Articolo non trovato' };
  }

  return {
    title: article.title,
    description: article.intro.slice(0, 160),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-[#1e1e1c]">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3 text-center">
                <p className="font-heading text-[24px] font-semibold uppercase tracking-[0.08em] text-primary">
                  {article.category}
                </p>
                <h1 className="font-heading text-[40px] font-bold uppercase leading-none sm:text-[48px]">
                  {article.title}
                </h1>
                <p className="mx-auto max-w-3xl text-base leading-7 text-[#1e1e1c] sm:text-lg">{article.intro}</p>
              </div>

              <div className="relative h-80 w-full overflow-hidden border border-[#aaaaaa] bg-[#f7f7f7] sm:h-105">
                <Image
                  src={article.image || '/articoli/fallback-articoli.avif'}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* INDICE ARTICOLO */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <p className="font-heading text-[24px] font-semibold uppercase tracking-[0.08em] text-[#1e1e1c]">
                  Indice
                </p>

                <ul className="space-y-2 text-base">
                  {article.sections.map((section, index) => (
                    <li key={section.heading} className="ml-5 list-disc">
                      <a href={`#section-${index}`} className="text-primary transition hover:underline">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-w-55 bg-[#aaaaaa] p-[1px] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
                <div className="bg-[#f7f7f7] p-5 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
                  <p className="text-sm text-[#999999]">⏱️ {getReadingTime(article.sections.length)}</p>
                  <p className="mt-2 text-sm text-[#999999]">🗓️ {article.date}</p>
                  <p className="mt-2 text-sm text-[#999999]">✏️ {article.author ?? 'Team Dinamiche Verticali'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {article.sections.map((section) => (
                <section
                  key={section.heading}
                  className="space-y-3 border-b border-[#aaaaaa] pb-6 last:border-b-0 last:pb-0"
                >
                  <h2 className="font-heading text-[28px] font-semibold uppercase leading-none text-[#1e1e1c]">
                    {section.heading}
                  </h2>
                  <p className="text-base leading-8 text-[#1e1e1c] whitespace-pre-wrap">{section.content}</p>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="flex items-center justify-center px-2 py-3">
              <h2 className="font-heading text-[32px] font-bold uppercase leading-none text-[#1e1e1c]">
                Articoli recenti
              </h2>
            </div>

            <div className="space-y-5">
              {relatedArticles.map((item) => (
                <article key={item.id} className="overflow-hidden border border-[#aaaaaa] bg-[#f7f7f7]">
                  <div className="relative h-45 w-full overflow-hidden">
                    <Image
                      src={getHeroImage(item.image)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4 p-5">
                    <p className="font-heading text-[20px] font-semibold uppercase tracking-[0.08em] text-primary">
                      {item.category}
                    </p>
                    <p className="text-sm text-[#676767]">{item.date}</p>

                    <h3 className="font-heading text-[24px] font-semibold uppercase leading-tight text-[#1e1e1c]">
                      {item.title}
                    </h3>

                    <Link
                      href={`/blog/${item.slug}`}
                      className="inline-flex items-center gap-2 text-base font-bold uppercase text-primary"
                    >
                      Leggi
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
