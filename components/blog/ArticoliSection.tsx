import { ArrowRight,ArrowLeft  } from 'lucide-react';
import ArticleCard from './ArticoliCard';
import { Article } from './article';

interface ArticleSectionProps {
  title: string;
  articles: Article[];
}

export default function ArticoliSection({ title, articles }: ArticleSectionProps) {
  return (
    <section className="mx-auto max-w-[1500px] space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[32px] font-bold uppercase sm:text-[36px]">{title}</h2>

        <div className="flex gap-3">
          <button className="rounded-[9px] border p-3">
            <ArrowLeft size={16} />
          </button>

          <button className="rounded-[9px] border p-3">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}
