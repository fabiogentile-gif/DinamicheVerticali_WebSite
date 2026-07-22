import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Via G. Battista Feroggio, 54, 10151, Torino',
    href: 'https://maps.app.goo.gl/mvX8fzTo2s7VgBh6A',
  },
  {
    icon: Mail,
    label: 'formazione@petzl.it',
    href: 'mailto:formazione@petzl.it',
  },
  {
    icon: Phone,
    label: '+39 011 27 32 500',
    href: 'tel:+390112732500',
  },
];

export default function ContactSupport() {
  return (
    <section className="bg-white px-6 py-8 text-[#1e1e1c] sm:px-8 sm:py-10">
      <div className="mx-auto flex max-w-200 flex-col items-center gap-5 lg:flex-row lg:items-start">
        <article className="w-full max-w-62.5">
          <div className="relative h-75 overflow-hidden clipped-top-right">
            <Image
              src="/images/contatti/valentina.avif"
              alt="Valentina, coordinatrice logistica"
              fill
              className="object-cover"
              sizes="250px"
              priority
            />
          </div>
          <div className="relative bg-[#f7f7f7] clipped-bottom-left-low">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 250 112" preserveAspectRatio="none" aria-hidden>
              <path d="M1 1 H249 V111 H18 L1 94 V1 Z" fill="#f7f7f7" stroke="#aaaaaa" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="relative space-y-1 px-5 py-5 text-center">
              <h2 className="font-heading text-2xl leading-none font-semibold tracking-[0.04em] uppercase text-primary">
                Valentina
              </h2>
              <p className="text-base font-bold">Coordinatrice logistica</p>
              <p className="text-base">Lingue: IT - EN</p>
            </div>
          </div>
        </article>

        <div className="w-full max-w-132.5 space-y-5">
          <header className="space-y-2 text-center uppercase">
            <p className="font-heading text-[28px] leading-none font-semibold text-primary">Contattaci</p>
            <h1 className="font-heading text-4xl leading-none font-bold">Siamo a tua disposizione!</h1>
          </header>

          <div className="space-y-4 text-base leading-normal">
            <p>
              Hai dubbi su quale sia il corso giusto a cui iscriverti? Vorresti concordare un corso per la tua azienda in
              una data non disponibile in calendario? <strong>Valentina, Coordinatrice logistica formazione, ti saprà aiutare.</strong>
            </p>
            <p>
              Per qualsiasi altra necessità, puoi contattarci via mail o telefonicamente. Faremo del nostro meglio per
              trovare la soluzione giusta per te e risolvere ogni possibile dubbio.
            </p>
          </div>

          <address className="not-italic">
            <ul className="space-y-2.5">
              {contactDetails.map((detail) => (
                <li key={detail.href}>
                  <a href={detail.href} className="flex items-center gap-2.5 font-semibold hover:text-primary">
                    <detail.icon className="size-6 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                    {detail.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
}
