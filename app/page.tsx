import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Linkbutton from '@/components/home/Linkbutton';
import CardCorsi from '@/components/home/CardCorsi';
import CalendarioCorsi from '@/components/home/CalendarioCorsi';

import { getCourses } from '@/lib/queries/courses';

const imgHero = 'https://www.figma.com/api/mcp/asset/0e8e8eac-9525-4b73-bff1-1a0d40a34cdb';

const courses = [
  {
    name: 'IRATA',
    description: 'Industrial Rope Access Trade Association',
    logo: '/logos/logo-irata-international.avif',
  },
  {
    name: 'GWO',
    description: 'Global Wind Organisation',
    logo: '/logos/logo-global-wind-organisation.avif',
  },
  {
    name: 'PETZL',
    description: 'Petzl Technical Institute',
    logo: '/logos/logo-petzl-technical-institute.avif',
  },
  {
    name: 'ALTRI',
    description: 'Scopri l’offerta completa',
    logo: '/logos/logo-dinamiche-verticali-formazione.svg',
  },
];

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
              <p className="text-[#1e1e1c]">Formazione certificata</p>
              <p className="text-primary">per lavori in quota</p>
            </div>
            <p className="max-w-105 text-lg text-[#0c0b0b]">
              Corsi professionali e certificazioni per operare in sicurezza in quota e su fune.
            </p>
          </div>

          {/* pulsanti hero */}
          <div className="flex flex-wrap gap-4">
            <Linkbutton title="Scopri i corsi" bg path="#corsi" />
            <Linkbutton title="Contattaci" path="#contatti" />
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="bg-primary px-6 py-12 text-center text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <p className="font-manrope text-[28px] font-normal uppercase">Serve aiuto?</p>
          <p className="font-manrope text-4xl font-bold uppercase">
            Ti aiutiamo a trovare il corso giusto!
          </p>
          <Linkbutton title="Contattaci" path="#contatti" />
        </div>
      </section>

      <section id="corsi" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        {/* DESCRIZIONE CORSI */}
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="font-barlow text-primary text-[28px] leading-none font-semibold uppercase">
              I nostri corsi
            </p>
            <h2 className="font-barlow font-bolf text-4xl leading-none font-bold text-[#1e1e1c] uppercase">
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
    </main>
  );
}
