import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
    title: string;
    bg?: boolean;
    path: string;
}

export default function LinkButton({ title, bg = false, path }: LinkButtonProps) {
    return (
        <a
            href={path}
            className={cn(
                "relative inline-flex h-12 items-center justify-center px-8 clipped-bottom-left",
                bg && "bg-[#ff6316] text-white transition hover:bg-orange-600"
            )}
        >
            {!bg && (<svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 48"
                preserveAspectRatio="none"
            >
                <path
                    d="M12 48 L0 36 V0 H200 V48 Z"
                    stroke="#1e1e1c"
                    strokeWidth="4"
                    fill="white"
                />
            </svg>)}


            <span
                className={cn(
                    "relative z-10 flex items-center gap-2 font-semibold uppercase",
                    bg ? "text-white" : "text-[#1e1e1c]"
                )}
            >
                {title}
                {!bg && (<ArrowUpRight size={16} />)}
            </span>
        </a>
    );
}