import { notFound } from 'next/navigation';

import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/corsi/HeroCorso';
import CorsiGrid from '@/components/categorie/CorsiGrid';

import { getCategoryBySlug } from '@/lib/queries/categories';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Breadcrumb
        items={[
          {
            label: 'Categorie',
            href: '/categorie',
          },
          {
            label: category.name,
          },
        ]}
      />
      <section>
        <CourseHero
          image={category.image ?? '/logos/dinamiche-verticali.svg'}
          imageAlt={category.name}
          subtitle="Categoria corsi"
          title={category.name}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mt-12">
          <h2 className="mt-12 text-4xl font-bold uppercase">Corsi disponibili</h2>
          <div className="mt-8">
            <CorsiGrid courses={category.courses} />
          </div>
        </div>
      </section>
    </main>
  );
}
