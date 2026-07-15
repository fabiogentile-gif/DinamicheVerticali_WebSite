import Image from 'next/image';
import LinkButton from '@/components/ui/Linkbutton';
import CardCorsi from '@/components/home/CardCorsi';
import CalendarioCorsi from '@/components/home/CalendarioCorsi';

import { getCourses } from '@/lib/queries/courses';

import FeatureBar from '@/components/layout/FeatureBar';
import FAQ from '@/components/home/FAQ';

const imgHero = 'https://www.figma.com/api/mcp/asset/0e8e8eac-9525-4b73-bff1-1a0d40a34cdb';

export default async function Home() {
  const courses = await getCourses();

  return (
    <main id="home" className="bg-white text-[#1e1e1c]">
      <section className="relative isolate overflow-hidden">
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src={imgHero}
          width={1600}
          height={900}
          priority
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative mx-auto flex min-h-185 max-w-7xl flex-col justify-center gap-8 px-6 py-24 lg:px-20">
          <div className="max-w-120 space-y-5">
            <div className="font-manrope space-y-2 text-[64px] leading-[0.95] font-bold tracking-[-0.03em] uppercase">
              <h3 className="text-[#1e1e1c]">Formazione certificata</h3>
              <h3 className="text-primary">per lavori in quota</h3>
            </div>
            <p className="max-w-105 text-lg text-[#0c0b0b]">
              Corsi professionali e certificazioni per operare in sicurezza in quota e su fune.
            </p>
          </div>

          {/* pulsanti hero */}
          <div className="flex flex-wrap gap-4">
            <LinkButton title="Scopri i corsi" href="/corsi" bg />
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="bg-primary px-6 py-12 text-center text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h3 className="text-[28px] font-normal uppercase">Serve aiuto?</h3>
          <h3 className="text-4xl font-bold uppercase">Ti aiutiamo a trovare il corso giusto!</h3>
          <LinkButton title="Contattaci" href="/contatti" arrow />
        </div>
      </section>

      <section id="corsi" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        {/* DESCRIZIONE CORSI */}
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-primary text-[28px] leading-none font-semibold uppercase font-heading">I nostri corsi</h3>
            <h2 className="font-bolf text-4xl leading-none font-bold text-[#1e1e1c] uppercase">
              Scegli la certificazione di cui hai bisogno
            </h2>
            <p className="max-w-2xl text-base text-[#1e1e1c]">
              Esplora le principali certificazioni per cui forniamo formazione.
            </p>
          </div>

          {/* CARD CORSI */}
          <CardCorsi />
        </div>
      </section>
      <section>
        <CalendarioCorsi courses={courses} />
      </section>

      <FAQ />

      <FeatureBar />
    </main>
  );
}
