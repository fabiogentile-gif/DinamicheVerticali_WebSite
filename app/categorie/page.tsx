import Breadcrumb from '@/components/ui/BreadCrumb';
import LinkButton from '@/components/ui/Linkbutton';
import OtherCoursesGrid from '@/components/altri/AltroGridCorsi';

import { getOtherCategories } from '@/lib/queries/getOtherCategories';

export default async function OtherCoursesPage() {
    const categories = await getOtherCategories();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E1E1C]">
        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Altri corsi' }]} />

            <span className="mb-4 inline-block border border-[#FF6316] px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6316]">
              Formazione
            </span>

            <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
              Altri corsi
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Esplora tutti i corsi che completano la nostra offerta formativa.
              Formazione professionale dedicata ad aziende, operatori e tecnici
              con programmi aggiornati e certificazioni riconosciute.
            </p>

            <div className="mt-10">
              <LinkButton
                title="Richiedi informazioni"
                href="/contatti"
                bg
              />
            </div>
          </div>
        </div>

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF6316]/10 blur-3xl" />
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6316]">
            Categorie
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#1E1E1C]">
            Scegli l area di formazione
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Oltre ai percorsi IRATA, GWO e ai corsi su fune, proponiamo numerosi
            corsi dedicati alla sicurezza sul lavoro, all utilizzo di
            attrezzature e alla formazione tecnica per aziende e professionisti.
          </p>
        </div>

        <div className="mt-16">
          <OtherCoursesGrid categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6316]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white">
              Non trovi il corso che stai cercando?
            </h2>

            <p className="mt-4 text-lg text-orange-100">
              Organizziamo corsi personalizzati presso la tua azienda e
              realizziamo percorsi formativi in base alle esigenze del tuo team.
            </p>
          </div>

          <LinkButton
            title="Contattaci"
            href="/contatti"
          />
        </div>
      </section>
    </main>
  );
}