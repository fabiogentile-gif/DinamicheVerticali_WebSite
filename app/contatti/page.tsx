import type { Metadata } from 'next';

import ContactSupport from '@/components/contatti/ContactSupport';
import HotelSection from '@/components/contatti/HotelSection';

import { partnerHotels, recentPlaces } from '@/data/contatti';
import AboutStats from '@/components/ui/AboutStats';



export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatti di Dinamiche Verticali Formazione. Trova informazioni su come contattarci, hotel convenzionati e articoli recenti.',
  keywords: ['contatti', 'hotel', 'numero di telefono', 'email'],
};

export default function ContattiPage() {
  return (
    <main className="bg-white text-[#1e1e1c]">
      <ContactSupport />

      <AboutStats />

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
              TROVA la sistemazione che fa per te
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7">
              Se il tuo corso dura più giorni, puoi affidarti ad una delle strutture ricettive in elenco.
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
              Hotel consigliati
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
