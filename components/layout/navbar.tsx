"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/corsi", label: "CORSI" },
  { href: "/chi-siamo", label: "CHI SIAMO" },
  { href: "/contatti", label: "CONTATTI" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#aaa] bg-white px-6 py-5 shadow-sm">
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/logo-dinamiche-verticali-formazione.svg"
          alt="Dinamiche Verticali Formazione"
          width={180}
          height={48}
          className="h-10 w-auto"
        />
      </Link>

      <div className="hidden items-center gap-7 text-[15px] font-bold uppercase md:flex">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition ${
                isActive
                  ? "text-[#ff6316]"
                  : "text-[#1e1e1c] hover:text-[#ff6316]"
              }`}
            >
              {item.label}

              {isActive && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#ff6316]" />
              )}
            </Link>
          );
        })}

        <Link
          href="/contatti"
          className="rounded-sm bg-[#ff6316] px-4 py-2 text-white transition hover:opacity-90"
        >
          CONTATTACI
        </Link>
      </div>
    </nav>
  );
}