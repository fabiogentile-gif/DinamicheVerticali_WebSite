"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { logos } from '@/data/assets';

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/categorie", label: "CORSI" },
  { href: "/blog", label: "BLOG" },
  { href: "/chi-siamo", label: "CHI SIAMO" },
  { href: "/contatti", label: "CONTATTI" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#aaa] bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logos.dinamicheVerticali}
            alt="Dinamiche Verticali Formazione"
            width={180}
            height={48}
            className="h-8 w-auto sm:h-10"
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
                  isActive ? "text-[#ff6316]" : "text-[#1e1e1c] hover:text-[#ff6316]"
                }`}
              >
                {item.label}
                {isActive && <span className="absolute -bottom-2 left-0 h-0.75 w-full bg-[#ff6316]" />}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#aaa] bg-white px-4 pb-6 pt-2 md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-[#eee] py-3 text-base font-bold uppercase transition last:border-b-0 ${
                  isActive ? "text-[#ff6316]" : "text-[#1e1e1c]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
