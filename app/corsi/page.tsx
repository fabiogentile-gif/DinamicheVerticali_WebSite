import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronDown, Play } from 'lucide-react';

import { getCourses } from '@/lib/queries/courses';

const imgLogo = 'https://www.figma.com/api/mcp/asset/ce756b34-412e-4370-bf14-1d52c09469c2';
const imgPlayer = 'https://www.figma.com/api/mcp/asset/745691e1-7f91-4fd0-87d5-8ee1a37e6fdd';
const imgYoutube = 'https://www.figma.com/api/mcp/asset/d3cadac4-5717-4d7b-87cb-9c68c0460926';
const imgArrowSmall = 'https://www.figma.com/api/mcp/asset/23e96c26-ec95-4195-b039-775ed5d9225e';
const imgArrowSmall2 = 'https://www.figma.com/api/mcp/asset/44a695db-3d74-427a-a07c-ae386cab6f0b';
const imgLogoDvFormazione = 'https://www.figma.com/api/mcp/asset/1a5dfc39-c3d2-4064-ad48-cc61a301d5c6';

const trainerCards = [
  {
    name: 'Franco Bignami',
    role: 'Formatore IRATA',
    description: 'Esperto in training e valutazione per operatori in sicurezza su fune e in quota.',
  },
  {
    name: 'Lorenzo Ferraro',
    role: 'Formatore GWO e PTI',
    description:
      'Specialista nella formazione tecnica e nella gestione degli aspetti operativi in ambiente industriale.',
  },
];

function formatCurrency(value?: number | null) {
  if (!value) return '1.000€ + IVA';

  return `${value.toLocaleString('it-IT')}€ + IVA`;
}

export default async function CorsiPage() {
  const courses = await getCourses();
  const course = courses.find((item) => item.tag.toLowerCase().includes('irata')) ?? courses[0];

  const sessions = [...(course?.sessions ?? [])]
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 4);

  const heading = course?.title ?? 'IRATA';
  const subtitle = course?.tag ?? 'IRATA';
  const durationDays = course?.durationDays ?? 4;
  const examDays = course?.examDays ?? 1;
  const certificateDuration = course?.certificateDuration ?? 3;
  const price = formatCurrency(course?.price);

  return (
    <main className="bg-white text-[#1e1e1c]">
      <div className="border-b border-[#aaaaaa] bg-[#ff6316] px-6 py-3 text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 text-sm font-medium uppercase">
          <Link href="/" className="transition hover:opacity-80">
            Home
          </Link>
          <span className="opacity-80">/</span>
          <span className="font-semibold">Corsi</span>
          <span className="opacity-80">/</span>
          <span className="font-semibold">{subtitle}</span>
        </div>
      </div>

      <section className="bg-white px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff6316] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6316]">
              <CalendarDays size={16} />
              Informazioni
            </div>
            <h1 className="max-w-2xl font-heading text-4xl font-bold uppercase tracking-[0.02em] text-[#1e1e1c] sm:text-5xl">
              Scopri i dettagli del corso {heading}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1e1e1c]">
              {course?.description ??
                'Percorso di certificazione internazionale per l’accesso e il lavoro in sicurezza su doppia fune, regolato dal sistema TACS.'}
            </p>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="w-full max-w-[420px] rounded-[2rem] border border-[#aaaaaa] bg-[#f7f7f7] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="flex justify-center">
                <div className="relative h-[140px] w-[220px]">
                  <Image src={imgLogo} alt={heading} fill className="object-contain" />
                </div>
              </div>
              <div className="mt-8 space-y-4 text-sm text-[#1e1e1c]">
                <div className="flex items-center justify-between border-b border-[#eeeeee] pb-3">
                  <span className="font-semibold uppercase">Sede</span>
                  <span className="text-right text-[#666]">Via G.B. Feroggio 54, Torino</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#eeeeee] pb-3">
                  <span className="font-semibold uppercase">Durata</span>
                  <span className="text-[#666]">{durationDays} giorni</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#eeeeee] pb-3">
                  <span className="font-semibold uppercase">Esame</span>
                  <span className="text-[#666]">+ {examDays} giorno</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#eeeeee] pb-3">
                  <span className="font-semibold uppercase">Attestato</span>
                  <span className="text-[#666]">Validità {certificateDuration} anni</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold uppercase">Quota</span>
                  <span className="font-semibold text-[#ff6316]">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#aaaaaa] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:p-10">
          <div className="flex flex-wrap gap-3">
            {['Panoramica', 'Livelli', 'Programma', 'Certificazione', 'Date e iscrizione', 'FAQ'].map((item, index) => (
              <button
                key={item}
                className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase transition ${
                  index === 0
                    ? 'border-[#ff6316] bg-[#ff6316] text-white'
                    : 'border-[#aaaaaa] bg-[#f7f7f7] text-[#1e1e1c] hover:border-[#ff6316] hover:text-[#ff6316]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6316]">Panoramica</p>
                <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-[#1e1e1c]">
                  Tutto quello che serve sapere sul corso
                </h2>
              </div>

              <div className="space-y-4 text-base leading-8 text-[#1e1e1c]">
                <p>
                  Il percorso di certificazione internazionale per l’accesso e il lavoro in sicurezza su doppia fune,
                  regolato dal sistema TACS.
                </p>
                <p>
                  È ideale per lavoratori che intendono operare su fune, per le aziende che vogliono ampliare i servizi
                  offerti ai clienti e per tecnici già certificati che devono rinnovare l’attestato.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#eeeeee] bg-[#f7f7f7] p-6">
              <h3 className="font-heading text-2xl font-semibold uppercase text-[#1e1e1c]">Dettagli pratici</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#1e1e1c]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6316]" />
                  <span>Sede: Via G.B. Feroggio 54, Torino</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6316]" />
                  <span>
                    Durata: {durationDays} giorni di formazione + {examDays} giorno di esame
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6316]" />
                  <span>Orario: 9:00 – 17:30</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6316]" />
                  <span>Quota: {price}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6316]" />
                  <span>Requisiti: maggiore età, buono stato di salute</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6316]">Calendario</p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-[#1e1e1c]">
              Scopri le prossime date del corso
            </h2>
            <p className="mt-3 text-base text-[#666]">Seleziona il livello per filtrare le date disponibili.</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#aaaaaa] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="flex flex-wrap items-center justify-between border-b border-[#eeeeee] bg-[#f7f7f7] px-6 py-4 lg:px-8">
              <div className="flex flex-wrap gap-3">
                {['Livello 1', 'Livello 2', 'Livello 3'].map((level, index) => (
                  <button
                    key={level}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase transition ${
                      index === 0
                        ? 'border-[#ff6316] bg-[#ff6316] text-white'
                        : 'border-[#aaaaaa] bg-white text-[#1e1e1c] hover:border-[#ff6316] hover:text-[#ff6316]'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 lg:mt-0">
                <button className="rounded-full border border-[#aaaaaa] bg-white p-3 text-[#1e1e1c]">
                  <CalendarDays size={18} />
                </button>
                <button className="rounded-full border border-[#ff6316] bg-[#ff6316] p-3 text-white">
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            <div className="divide-y divide-[#eeeeee]">
              {sessions.length > 0 ? (
                sessions.map((session) => {
                  const startDate = new Date(session.startDate);
                  const endDate = session.endDate ? new Date(session.endDate) : null;

                  return (
                    <div
                      key={session.id}
                      className="flex flex-col items-start justify-between gap-4 px-6 py-5 transition hover:bg-[#f7f7f7] lg:flex-row lg:items-center lg:px-8"
                    >
                      <div className="flex gap-4">
                        <div className="flex min-w-[84px] flex-col items-center justify-center rounded-2xl border border-[#eeeeee] bg-[#f7f7f7] px-3 py-4 text-center">
                          <span className="text-2xl font-bold text-[#1e1e1c]">{startDate.getDate()}</span>
                          <span className="mt-1 text-xs uppercase text-[#666]">
                            {startDate.toLocaleDateString('it-IT', { month: 'short' })}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6316]">{subtitle}</p>
                          <h3 className="mt-1 text-xl font-semibold uppercase text-[#1e1e1c]">
                            {heading} {course?.tag === 'IRATA' ? 'L 1' : 'Corso'}
                          </h3>
                          <p className="mt-2 text-sm text-[#666]">
                            {startDate.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                            {endDate &&
                              ` - ${endDate.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}`}
                          </p>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-2 rounded-full border border-[#ff6316] px-4 py-2 text-sm font-semibold uppercase text-[#ff6316] transition hover:bg-[#ff6316] hover:text-white">
                        Vedi dettaglio <ArrowRight size={16} />
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="px-6 py-10 text-center text-[#666] lg:px-8">Nessuna data disponibile al momento.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ff6316] px-6 py-16 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            Non trovi quello che cerchi?
          </p>
          <h2 className="font-heading text-4xl font-bold uppercase sm:text-5xl">Ti aiutiamo noi!</h2>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold uppercase text-[#1e1e1c] transition hover:translate-y-[-2px]"
          >
            Contattaci <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6316]">Video</p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-[#1e1e1c]">
              Scopri come si svolge il corso {heading}
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#aaaaaa] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <Image src={imgPlayer} alt="Anteprima video corso" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/15">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-white/80 backdrop-blur-sm">
                <Play className="ml-1 h-10 w-10 fill-[#ff6316] text-[#ff6316]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6316]">Formatori</p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-[#1e1e1c]">
              Ti presentiamo i nostri formatori
            </h2>
            <p className="mt-3 text-base text-[#666]">
              I formatori di Dinamiche Verticali Formazione sono professionisti dell’esperienza pluriennale.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {trainerCards.map((trainer) => (
              <div key={trainer.name} className="rounded-[2rem] border border-[#eeeeee] bg-[#f7f7f7] p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6316] text-xl font-bold text-white">
                  {trainer.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3 className="font-heading text-2xl font-semibold uppercase text-[#1e1e1c]">{trainer.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6316]">{trainer.role}</p>
                <p className="mt-4 text-base leading-8 text-[#666]">{trainer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
