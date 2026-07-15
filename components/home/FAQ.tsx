'use client';

import { useState } from 'react';
import { Phone, Plus, Minus, ArrowUpRight } from 'lucide-react';
import LinkButton from '@/components/ui/Linkbutton';

const faqItems = [
  {
    question: 'A CHI SONO RIVOLTI I CORSI?',
    answer:
      'I nostri corsi sono rivolti a professionisti, aziende e persone che vogliono acquisire competenze certificate nel settore delle attività verticali.',
  },
  {
    question: 'QUALI CERTIFICAZIONI RILASCIATE?',
    answer: 'Al termine dei corsi vengono rilasciate certificazioni riconosciute secondo gli standard previsti.',
  },
  {
    question: 'I CORSI SONO RICONOSCIUTI A LIVELLO INTERNAZIONALE?',
    answer: 'Sì, alcuni percorsi formativi sono riconosciuti anche a livello internazionale.',
  },
  {
    question: 'COME MI ISCRIVO A UN CORSO?',
    answer: 'Puoi iscriverti compilando il modulo di contatto oppure contattandoci direttamente.',
  },
  {
    question: 'È POSSIBILE ORGANIZZARE CORSI IN AZIENDA?',
    answer: 'Sì, organizziamo corsi personalizzati direttamente presso le aziende.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-4xl font-bold text-orange-500">F.A.Q.</p>

        <h2 className="mt-3 text-4xl font-black tracking-tight">HAI QUALCHE DOMANDA?</h2>

        <p className="mt-4 text-gray-600">
          Abbiamo la risposta a (quasi) tutte le domande. Se non la trovi, contattaci!
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <div key={item.question} className="overflow-hidden border border-gray-300">
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"
                >
                  <span className="break-words">{item.question}</span>

                  {open ? (
                    <Minus className="shrink-0 text-orange-500" size={22} />
                  ) : (
                    <Plus className="shrink-0 text-orange-500" size={22} />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-300 px-5 py-5">
                      <p className="text-sm text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="group relative h-fit w-full max-w-[260px] overflow-hidden">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 260 300" preserveAspectRatio="none">
            <path
              d="M1 1 H230 L259 30 V299 H30 L1 270 V1"
              fill="currentColor"
              fillOpacity="0.05"
              className="text-muted"
            />

            <path
              d="M1 1 H230 L259 30 V299 H30 L1 270 V1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="text-border"
            />
          </svg>

          <div className="relative z-10 flex h-full flex-col p-7">
            <Phone size={56} strokeWidth={1.5} className="mb-6" />

            <h3 className="text-xl font-black leading-tight">
              NON TROVI LA
              <br />
              RISPOSTA?
            </h3>

            <p className="mt-5 text-sm text-gray-600">Per qualsiasi dubbio, noi siamo a disposizione!</p>

            <div className="mt-6">
              <LinkButton title="Contattaci" href="/contatti" bg arrow />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
