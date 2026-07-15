import Image from 'next/image';
import Link from 'next/link';
import { profileImage, contactItems, partnerHotels, recentPlaces } from '@/data/contatti';

import HotelSection from '@/components/contatti/HotelSection';

const partnerLogos = [
  { src: '/logos/logo-petzl-technical-institute.avif', alt: 'Petzl Technical Institute' },
  { src: '/logos/logo-global-wind-organisation.avif', alt: 'Global Wind Organisation' },
  { src: '/logos/logo-irata-international.avif', alt: 'IRATA International' },
];

export default function ContattiPage() {
  return (
    <main className="bg-white text-[#1e1e1c]">
      {/* HERO */}
      <section className="bg-[#f7f7f7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
            {/* CARD PERSONALE */}
            <div className="relative lg:w-[320px] lg:shrink-0">
              {/* Definizione del clipPath */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="teamCardClip" clipPathUnits="objectBoundingBox">
                    <path d="M0.003125 0.001923 H0.90625 L0.996875 0.057692 V0.998077 H0.09375 L0.003125 0.942308 V0.001923 Z" />
                  </clipPath>
                </defs>
              </svg>

              {/* Bordo */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 320 520"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 1 H290 L319 30 V519 H30 L1 490 V1 Z"
                  fill="none"
                  stroke="#aaaaaa"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Contenuto */}
              <div className="relative z-10 bg-white" style={{ clipPath: 'url(#teamCardClip)' }}>
                <div className="border-b border-[#aaaaaa] p-6">
                  <h2
                    className="text-[26px] font-bold uppercase text-[#ff6316]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    Valentina
                  </h2>

                  <p className="mt-1 font-semibold">Coordinatrice logistica</p>

                  <p className="mt-1 text-[#555]">Lingue: IT - EN</p>
                </div>

                <Image
                  src={profileImage}
                  alt="Valentina"
                  width={320}
                  height={420}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>

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
            <div className="flex flex-col items-center justify-center gap-12 lg:w-[180px] lg:shrink-0">
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
