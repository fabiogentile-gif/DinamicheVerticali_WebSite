import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/ui/HeroCorso';
import CorsiGrid from '@/components/categorie/CorsiGrid';
import Banner from '@/components/ui/Banner';
import FeatureBar from '@/components/ui/FeatureBar';

import { getCategoryBySlug } from '@/lib/queries/categories';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categoria non trovata',
    };
  }

  return {
    title: `Corsi ${category.name}`,
    description:
      category.description ||
      `Scopri tutti i corsi certificati della categoria ${category.name} con Dinamiche Verticali. Formazione professionale e percorsi su misura.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen text-[#1e1e1c]">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Categorie',
            href: '/categorie',
          },
          {
            label: category.name,
          },
        ]}
      />

      {/* Hero */}
      <CourseHero
        image={category.image ?? '/logos/dinamiche-verticali.svg'}
        imageAlt={category.name}
        subtitle="Categoria Formativa"
        title={category.name}
        description={category.description}
        count={category.courses.length}
      />

      {/* Courses List Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-10">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Catalogo Corsi
          </p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold uppercase text-[#1e1e1c]">
            Corsi Disponibili
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 max-w-3xl">
            Seleziona un corso per visualizzarne il programma dettagliato, la durata, i requisiti di accesso e le prossime date a calendario.
          </p>
        </div>

        <CorsiGrid courses={category.courses} />
      </section>

      {/* Bottom Banner */}
      <Banner
        subtitle="Serve supporto per l'iscrizione?"
        title="Contattaci per informazioni sui corsi o preventivi dedicati"
        buttonText="Contattaci"
        buttonHref="/contatti"
      />

      <FeatureBar />
    </main>
  );
}
