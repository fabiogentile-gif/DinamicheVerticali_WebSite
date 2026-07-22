import BlogHero from '@/components/blog/BlogHero';
import NewsletterBanner from '@/components/blog/NewsLetterBanner';
import ArticoliSection from '@/components/blog/ArticoliSection';

import articles from '@/data/articles.json';
import type { Metadata } from 'next';

const featuredImage = '/articoli/blog-hero.avif';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articoli sulla formazione per lavori in quota, certificazioni IRATA, GWO, sicurezza sul lavoro e consigli per operatori su fune.',
};

export default function BlogPage() {
  const featuredArticles = articles.filter((a) => a.featured);

  const recentArticles = articles.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-white text-[#1e1e1c]">
      <section className="px-4 py-8 sm:px-8 lg:px-10">
        <BlogHero
          image={featuredImage}
          category="Edilizia su fune"
          title="Ponteggi o fune?"
          description="Nei lavori in ambito edilizia, la scelta tra ponteggi e accesso su fune dipende dal tipo di intervento, dai tempi di esecuzione e dai costi."
        />
      </section>

      <NewsletterBanner />

      <section className="px-4 py-10 sm:px-8 lg:px-10">
        <ArticoliSection title="Articoli recenti" articles={recentArticles} />
      </section>
      <section className="px-4 py-10 sm:px-8 lg:px-10">
        <ArticoliSection title="Articoli popolari" articles={featuredArticles} />
      </section>
    </main>
  );
}
