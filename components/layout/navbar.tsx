"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const scrollItems = [
  { id: "home", label: "HOME" },
  { id: "corsi", label: "CORSI" },
  { id: "calendario", label: "CALENDARIO" },
];

const pageItems = [
  { href: "/blog", label: "BLOG" },
  { href: "/contatti", label: "CONTATTI" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [clicking, setClicking] = useState<string | null>(null);

  const goTo = (id: string) => {
    setClicking(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => setClicking(null), 600);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120; // altezza navbar

      let current = scrollItems[0].id;

      for (const item of scrollItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        // Se sono nell'ultima sezione e sono quasi a fondo pagina
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10
        ) {
          current = scrollItems[scrollItems.length - 1].id;
          break;
        }

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = item.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);

    // Aggiorna subito lo stato
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ScrollItem = ({
    id,
    label,
  }: {
    id: string;
    label: string;
  }) => {
    const isActive = active === id;
    const isClicking = clicking === id;

    return (
      <button
        onClick={() => goTo(id)}
        className={`
          relative px-2 py-1 transition-all duration-300
          ${isActive ? "text-primary scale-110" : "text-black"}
          ${isClicking ? "animate-pulse" : ""}
        `}
      >
        {label}

        <span
          className={`
            absolute left-0 -bottom-1 h-0.5 bg-primary
            transition-all duration-300
            ${isActive ? "w-full" : "w-0"}
          `}
        />
      </button>
    );
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between border-b-2 border-primary bg-white px-5 py-5">
      <Image
        src="/logos/logo-dinamiche-verticali-formazione.svg"
        width={180}
        height={180}
        alt="logo"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {scrollItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <ScrollItem id={item.id} label={item.label} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={'/'} className="px-2 py-1 text-black hover:text-primary transition">
                NEWS
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={'/'} className="px-2 py-1 text-black hover:text-primary transition">
                CONTATTI
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="rounded-sm bg-primary px-4 py-2 text-black transition-colors hover:bg-[#EA580C]!">
                CONTATTACI
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}