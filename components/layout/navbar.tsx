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
        });

        setTimeout(() => setClicking(null), 600);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        scrollItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const ScrollItem = ({ id, label }: { id: string; label: string }) => {
        const isActive = active === id;
        const isClicking = clicking === id;

        return (
            <button onClick={() => goTo(id)}
                className={`
          relative px-2 py-1 transition-all duration-300
          ${isActive ? "text-primary scale-110" : "text-black"}
          ${isClicking ? "animate-pulse" : ""}
        `}
            >
                {label}

                <span
                    className={`
            absolute left-0 -bottom-1 h-[2px] bg-primary
            transition-all duration-300
            ${isActive ? "w-full" : "w-0"}
          `}
                />
            </button>
        );
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between border-b-2 border-primary bg-white px-5 py-5">
            {/* LOGO */}
            <Image
                src="/logo/logo-dinamiche-verticali-formazione.svg"
                width={180}
                height={180}
                alt="logo"
            />

            <NavigationMenu>
                <NavigationMenuList className="flex gap-6">

                    {/* SCROLL SECTION */}
                    {scrollItems.map((item) => (
                        <NavigationMenuItem key={item.id}>
                            <NavigationMenuLink asChild>
                                <ScrollItem id={item.id} label={item.label} />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}

                    {/* PAGES (ROUTER) */}
                    {pageItems.map((item) => (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/blog"
                                    className="px-2 py-1 text-black hover:text-primary transition"
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}

                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}