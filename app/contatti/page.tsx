import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import HotelSection from '@/components/contatti/HotelSection';
import TeamCard from '@/components/ui/TeamCard';

import { profileImage, contactItems, partnerHotels, recentPlaces } from '@/data/contatti';
import { logos } from '@/data/assets';

const partnerLogos = [
  { src: logos.pti, alt: 'Petzl Technical Institute' },
  { src: logos.gwo, alt: 'Global Wind Organisation' },
  { src: logos.irata, alt: 'IRATA International' },
];



export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatti di Dinamiche Verticali Formazione. Trova informazioni su come contattarci, hotel convenzionati e articoli recenti.',
  keywords: ['contatti', 'hotel', 'numero di telefono', 'email'],
};

export default function ContattiPage() {
  return (
    <main className="bg-white text-[#1e1e1c]">
      {/* HERO */}
      <section className="bg-[#f7f7f7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Immagine profilo */}
            <TeamCard name="Valentina" role="Coordinatrice logistica" languages="IT - EN" image={profileImage} />

            {/* Elenco informazioni (allineato a sinistra) */}
            <div className="flex flex-col justify-center gap-12">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 text-left"
                  >
                    <Icon className="h-14 w-14 shrink-0 text-[#ff6316]" strokeWidth={1.5} />

                    <div>
                      <p
                        className="text-[24px] font-bold uppercase text-[#ff6316] transition group-hover:opacity-80"
                        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                      >
                        {item.title}
                      </p>

                      {item.content.map((line) => (
                        <p key={line} className="text-[18px] font-semibold">
                          {line}
                        </p>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Loghi partner (centrati) */}
            <div className="flex flex-col items-center justify-center gap-12 lg:w-45 lg:shrink-0">
              {partnerLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="h-auto w-full object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOTEL */}
      <section className="bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Titolo principale */}
          <div className="mb-14 text-center">
            <p
              className="text-[24px] font-semibold uppercase tracking-[0.06em] text-[#ff6316]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Pernottamento
            </p>

            <h2 className="mt-2 text-[36px] font-bold uppercase" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              Trova il tuo hotel più vicino
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7">
              Abbiamo selezionato alcune strutture convenzionate nelle vicinanze della sede dei corsi.
            </p>
          </div>

          {/* Hotel convenzionati */}
          <div className="mb-8">
            <h3 className="text-[28px] font-bold uppercase" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              Hotel convenzionati
            </h3>
          </div>

          <HotelSection hotels={partnerHotels} columns="lg:grid-cols-2" />

          {/* Articoli recenti */}
          <div className="mt-20 border-t border-[#d8d8d8] pt-14">
            <h3 className="text-[28px] font-bold uppercase" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              Articoli recenti
            </h3>
          </div>

          <div className="mt-8">
            <HotelSection hotels={recentPlaces} columns="md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>
    </main>
  );
}
