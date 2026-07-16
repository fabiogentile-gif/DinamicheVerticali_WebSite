import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-burning-orange-400">
      <div className="container mx-auto px-5 py-2.5">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-white">
          {items.map((item, index) => {
            const last = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-2">
                {item.href && !last ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className={last ? "underline" : ""}>{item.label}</span>
                )}

                {!last && <ChevronRight size={14} />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}