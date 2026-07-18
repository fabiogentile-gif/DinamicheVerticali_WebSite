'use client';

import Link from 'next/link';

const faqs = [
  {
    question: 'È possibile richiedere una data non pianificata?',
    answer:
      'Entro la scadenza della certificazione è necessario effettuare il rinnovo frequentando un corso di formazione della durata di 2 giorni. Se la certificazione non viene rinnovata entro la scadenza sarà necessario ripetere il corso.',
  },
  {
    question: "Cosa succede se non supero l'esame?",
    answer:
      'Se non superi l’esame dovrai ripetere il corso di formazione di 2 giorni e sostenere nuovamente la prova per ottenere la certificazione.',
  },
  {
    question: "Come rinnovo l'attestato?",
    answer:
      'Per rinnovare la certificazione entro la data di scadenza è necessario completare un corso di aggiornamento di 2 giorni. In caso di mancato rinnovo sarà obbligatorio ripetere l’intero corso.',
  },
  {
    question: 'Dove posso soggiornare durante i corsi di più giorni?',
    answer: 'Abbiamo una selezione di partner convenzionati che potranno accoglierti durante la tua permanenza.',
    link: 'Scopri gli hotel convenzionati',
  },
];

export default function FaqTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {faqs.map((faq, index) => (
        <article
          key={index}
          className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
        >
          <div className="absolute right-0 top-0 h-20 w-20 bg-primary opacity-10 [clip-path:polygon(100%_0,100%_100%,0_0)]" />

          <div className="absolute left-0 top-0 h-full w-1 bg-primary transition-all duration-300 group-hover:w-2" />

          <span className="absolute -bottom-6 -right-3 text-8xl font-black text-primary/10">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-primary text-sm font-bold text-white [clip-path:polygon(0_0,100%_0,100%_75%,75%_100%,0_100%)]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="h-px flex-1 bg-border transition group-hover:bg-primary" />
            </div>

            <h3 className="mb-4 text-xl font-bold leading-tight text-foreground">{faq.question}</h3>

            <div className="mb-5 h-px w-12 bg-primary transition-all duration-300 group-hover:w-full" />

            <p className="relative max-w-[95%] text-sm leading-7 text-muted-foreground">{faq.answer}</p>

            {faq.link && (
              <Link
                href="/contatti"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
              >
                {faq.link}
                <span>→</span>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
