import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/BreadCrumb';
import LinkButton from '@/components/ui/Linkbutton';
import CategorieGrid from '@/components/categorie/CategorieGrid';
import Banner from '@/components/ui/Banner';
import FeatureBar from '@/components/ui/FeatureBar';

import { getOtherCategories } from '@/lib/queries/getOtherCategories';

export const metadata: Metadata = {
  title: 'Categorie Corsi',
  description:
    'Esplora tutte le categorie di corsi di formazione certificati: IRATA, GWO, Petzl Technical Institute (PTI), Fune D.Lgs. 81/08, ITRA e sicurezza sul lavoro.',
};

export default async function OtherCoursesPage() {
  const categories = await getOtherCategories();

  return (
    <main className="bg-white min-h-screen text-[#1e1e1c]">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Categorie Corsi' }]} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#1e1e1c] text-white py-16 lg:py-24">
        {/* Glow backdrop effect */}
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-40 -bottom-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block border border-primary px-3.5 py-1 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Categorie & Certificazioni
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-none tracking-tight text-white">
              Tutte le Categorie Formative
            </h1>

            <p className="text-lg leading-relaxed text-neutral-300">
              Scopri i percorsi formativi di Dinamiche Verticali. Offriamo certificazioni internazionali riconosciute
              (IRATA, GWO, PTI, ITRA) e corsi di sicurezza sul lavoro in conformità al D.Lgs. 81/08 per lavori in quota,
              accesso su fune e spazi confinati.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <LinkButton title="Richiedi Informazioni" href="/contatti" bg />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Offerta Formativa
          </p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold uppercase text-[#1e1e1c]">
            Scegli l’Area di Formazione
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Seleziona la categoria di tuo interesse per consultare la scheda dettagliata dei corsi disponibili,
            le prossime date in calendario e le modalità d'iscrizione.
          </p>
        </div>

        <CategorieGrid categories={categories} />
      </section>

      {/* Banner CTA */}
      <Banner
        subtitle="Serve aiuto o una consulenza?"
        title="Ti aiutiamo a scegliere il corso più adatto alle tue esigenze"
        buttonText="Contattaci"
        buttonHref="/contatti"
      />

      <FeatureBar />
    </main>
  );
}