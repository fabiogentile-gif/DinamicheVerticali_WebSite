'use client';

import Image from 'next/image';
import { useId, useState, type FormEvent } from 'react';
import { logos } from '@/data/assets';

const socialLinks = [
  {
    href: 'https://www.instagram.com/dinamiche_verticali',
    label: 'Instagram',
    icon: '/social/instagram.svg',
  },
  {
    href: 'https://www.facebook.com/dinamicheverticalisrl',
    label: 'Facebook',
    icon: '/social/facebook.svg',
  },
  {
    href: 'https://it.linkedin.com/company/dinamiche-verticali-srl',
    label: 'LinkedIn',
    icon: '/social/linkedin.svg',
  },
  {
    href: 'https://www.youtube.com/@DV_Formazione',
    label: 'YouTube',
    icon: '/social/youtube.svg',
  },
];

const policyLinks = [
  { label: 'Cookie Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const contactLinks = [
  {
    href: 'tel:+390112732500',
    label: '+39 011 27 32 500',
  },
  {
    href: 'mailto:formazione@petzl.it',
    label: 'formazione@petzl.it',
  },
  {
    href: 'https://maps.app.goo.gl/mvX8fzTo2s7VgBh6A',
    label: 'Via G. Battista Feroggio, 54, 10151 Torino',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const emailId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className=" bg-[#f3f3f3] px-6 py-10 text-[#2d2d2d]">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        {/* SINISTRA */}
        <div>
          <Image src={logos.dinamicheVerticali} alt="Dinamiche Verticali" width={160} height={55} className="mb-5" />

          <div className="space-y-1 text-[15px] leading-7">
            <p>© 2026 Dinamiche Verticali Formazione srl</p>

            <p>
              Developed by{' '}
              <a href="#" className="text-[#f26722] underline transition hover:opacity-80">
                &lt;/divers&gt;
              </a>
            </p>

            <p>P. IVA 11991170017</p>

            <div className="pt-3 flex flex-col">
              {policyLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[#f26722] underline transition hover:opacity-80">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CENTRO */}
        <div>
          <h3 className="mb-4 font-[Barlow_Condensed] text-2xl font-semibold uppercase leading-none sm:text-[40px]">
            Non perderti le novità
          </h3>

          <p className="mb-2 text-lg">Seguici sui social:</p>

          <div className="mb-2 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={32}
                  height={32}
                  className="transition hover:opacity-70"
                />
              </a>
            ))}
          </div>

          <p className="mb-2 text-lg">Iscriviti alla nostra newsletter:</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor={emailId} className="sr-only">
              Email
            </label>

            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indirizzo e-mail"
              className="h-11 flex-1 border border-[#cfcfcf] bg-white px-3 outline-none focus:border-[#f26722]"
            />

            <button
              type="submit"
              className="h-11 bg-[#f26722] px-7 font-semibold uppercase text-white transition hover:bg-[#de5d1d] clipped-bottom-left-low "
            >
              ISCRIVITI
            </button>
          </form>
        </div>

        {/* DESTRA */}
        <div>
          <h3 className="mb-4 font-[Barlow_Condensed] text-2xl font-semibold uppercase leading-none sm:text-[40px]">Contatti</h3>

          <div className="flex flex-col gap-2 text-[17px]">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="text-[#f26722] underline underline-offset-2 transition hover:opacity-80"
                {...(contact.href.startsWith('http')
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
