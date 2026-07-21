import LinkButton from '@/components/ui/Linkbutton';

export default function AboutCta() {
  return (
    <section className="bg-[#1e1e1c] px-6 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="font-heading text-[28px] leading-none font-semibold uppercase text-primary">Affidati a noi</p>
        <h2 className="font-heading mt-2 text-4xl leading-none font-bold uppercase sm:text-5xl">
          La scelta giusta per la tua formazione
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-normal text-white/85">
          Percorsi formativi riconosciuti a livello internazionale, istruttori qualificati e un centro unico in Italia.
        </p>
        <div className="mt-8">
          <LinkButton title="Scopri i corsi" href="/categorie" bg arrow />
        </div>
      </div>
    </section>
  );
}
