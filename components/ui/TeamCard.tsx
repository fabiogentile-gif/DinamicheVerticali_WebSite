import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  languages: string;
  image: string;
}

export default function TeamCard({ name, role, languages, image }: TeamCardProps) {
  return (
    <div className="relative lg:w-[320px] lg:shrink-0">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="teamCardClip" clipPathUnits="objectBoundingBox">
            <path d="M0.003125 0.001923 H0.90625 L0.996875 0.057692 V0.998077 H0.09375 L0.003125 0.942308 V0.001923 Z" />
          </clipPath>
        </defs>
      </svg>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 320 520" preserveAspectRatio="none">
        <path d="M1 1 H290 L319 30 V519 H30 L1 490 V1 Z" fill="none" stroke="#aaaaaa" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative z-10 bg-white" style={{ clipPath: "url(#teamCardClip)" }}>
        <div className="border-b border-[#aaaaaa] p-6 h-[180px]">
          <h2 className="text-[26px] font-bold uppercase text-[#ff6316]" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            {name}
          </h2>

          <p className="mt-1 font-semibold">{role}</p>

          <p className="mt-1 text-[#555]">Lingue: {languages}</p>
        </div>

        <Image src={image} alt={name} width={320} height={420} className="h-105 w-full object-cover" />
      </div>
    </div>
  );
}