import Image from 'next/image';
import type { Metadata } from 'next';

import AboutCta from '@/components/chi-siamo/AboutCta';
import AboutStats from '@/components/ui/AboutStats';
import Testimonials from '@/components/chi-siamo/Testimonials';

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    'Dinamiche Verticali Formazione: esperienza sul campo, formazione pratica e sicurezza ai massimi livelli.',
};

const paragraphs = [
  {
    title: 'Formazione pratica, per far propria la sicurezza',
    image: '/images/chi-siamo/formazione-pratica.png',
    imageAlt: 'Formazione pratica per lavori in quota',
    content: [
      'Nel mondo verticale non basta conoscere una tecnica. Servono esperienza, preparazione, metodo e una profonda cultura della sicurezza.',
      'DV Formazione nasce con una missione precisa: trasformare passione e competenza tecnica in professionalità riconosciute, formando operatori e aziende per insegnare ad affrontare con sicurezza gli ambienti più complessi.',
      'Siamo un punto di riferimento in Italia per la formazione.',
      'La nostra forza nasce dall’unione tra esperienza sul campo, standard internazionali e una continua ricerca dell’eccellenza.',
    ],
  },
  {
    title: 'Un centro di formazione unico',
    image: '/images/chi-siamo/centro-formazione.png',
    imageAlt: 'Centro di formazione Dinamiche Verticali',
    content: [
      'Dinamiche Verticali è un centro accreditato per corsi IRATA, GWO e PTI e rappresenta l’unico ed esclusivo Petzl Technical Institute in Italia.',
      'Queste certificazioni rappresentano per noi molto più di un riconoscimento: sono una responsabilità e un impegno quotidiano nel garantire una formazione ai massimi livelli, basata su protocolli internazionali, istruttori qualificati e addestramento pratico reale.',
      'Crediamo che la sicurezza non si impari soltanto sui libri. Si costruisce attraverso l’esperienza e la capacità di prendere decisioni sotto pressione e la conoscenza approfondita delle attrezzature e delle procedure.',
    ],
  },
];

function FramedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-[280px] overflow-hidden sm:h-[350px] clipped-bottom-left">
      <div className="relative h-full w-full overflow-hidden clipped-top-right">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 485px, 100vw" />
      </div>
    </div>
  );
}

export default function ChiSiamoPage() {
  return (
    <main className="bg-white px-6 py-8 text-[#1e1e1c] sm:px-8 sm:py-10">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
        <p className="font-heading text-[28px] leading-none font-semibold uppercase text-primary">Chi siamo</p>
        <h1 className="font-heading text-4xl leading-none font-bold uppercase">Identità e valori</h1>
        <div className="mt-1 text-base leading-normal">
          <p>Siamo un ente di formazione che unisce esperienza ed eccellenza.</p>
          <p>Affidati a noi: sapremo accompagnarti al meglio nel tuo percorso di formazione.</p>
        </div>
      </section>

      <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-8 sm:mt-8 lg:gap-5">
        {paragraphs.map((paragraph, index) => (
          <section
            key={paragraph.title}
            className="grid items-start gap-6 py-2 lg:grid-cols-2 lg:gap-8"
          >
            <div className={index === 1 ? 'lg:order-2' : undefined}>
              <FramedImage src={paragraph.image} alt={paragraph.imageAlt} />
            </div>
            <div className={index === 1 ? 'lg:order-1' : undefined}>
              <h2 className="font-heading text-[28px] leading-none font-semibold uppercase">{paragraph.title}</h2>
              <div className="mt-2 space-y-4 text-base leading-normal">
                {paragraph.content.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="-mx-6 mt-10 sm:-mx-8 sm:mt-14">
        <AboutStats />
        <AboutCta />
        <Testimonials />
      </div>
    </main>
  );
}
