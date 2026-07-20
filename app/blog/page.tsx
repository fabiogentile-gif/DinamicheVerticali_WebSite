import BlogHero from '@/components/blog/BlogHero';
import NewsletterBanner from '@/components/blog/NewsLetterBanner';
import ArticoliSection from '@/components/blog/ArticoliSection';

import articles from '@/data/articles.json';

const featuredImage = 'https://www.figma.com/api/mcp/asset/a9e59e4e-f187-4254-8d70-0b6a27af98e6';
const articleImages = [
  'https://www.figma.com/api/mcp/asset/e5f3be1d-efdc-4c66-b57e-5a39f6a01eaa',
  'https://www.figma.com/api/mcp/asset/90841f28-6ead-4fc2-b044-b65f2c52f370',
  'https://www.figma.com/api/mcp/asset/7ad97da0-6046-41cb-9610-cdc54f4812f1',
];

export default function BlogPage() {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);

  const recentArticles = articles.slice(4, 7);

  return (
    <main className="min-h-screen bg-white text-[#1e1e1c]">
      <section className="px-8 py-8 lg:px-10">
        <BlogHero
          image={featuredImage}
          category="Edilizia su fune"
          title="Ponteggi o fune?"
          description="Nei lavori in ambito edilizia, la scelta tra ponteggi e accesso su fune dipende dal tipo di intervento, dai tempi di esecuzione e dai costi."
        />
      </section>

      <NewsletterBanner />

      <section className="px-8 py-10 lg:px-10">
        <ArticoliSection title="Articoli recenti" articles={recentArticles} />
      </section>
      <section className="px-8 py-10 lg:px-10">
        <ArticoliSection title="Articoli popolari" articles={featuredArticles} />
      </section>
    </main>
  );
}
