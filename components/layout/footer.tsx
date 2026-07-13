import Image from "next/image";

const imgLogoDvFormazione = "https://www.figma.com/api/mcp/asset/2d87b1c3-f9ad-4ec0-ac93-cfd1c91d4d1d";
const imgInstagram = "https://www.figma.com/api/mcp/asset/2781408e-2c0d-4f9c-b7e8-6d3cca0e0d2d";
const imgFacebook = "https://www.figma.com/api/mcp/asset/ca81bf67-821c-48f5-b7d9-236d39803b68";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/7e92b7e6-0bb5-48cd-9f62-a5bad4bb146b";
const imgYoutube = "https://www.figma.com/api/mcp/asset/30469f02-1942-4432-9cf9-99c4ee897b1d";

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-[#aaa] bg-[#eee] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Image alt="Dinamiche Verticali Formazione" className="h-12 w-auto" src={imgLogoDvFormazione} width={180} height={48} />
          <div className="space-y-2 text-sm text-[#1e1e1c]">
            <p>© 2026 Dinamiche Verticali Formazione srl</p>
            <p>P. IVA 11991170017</p>
            <a href="#" className="block text-[#ff6316] underline">Cookie Policy</a>
            <a href="#" className="block text-[#ff6316] underline">Privacy Policy</a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-['Barlow_Condensed:SemiBold'] text-2xl uppercase">Non perderti le novità</h3>
          <div className="space-y-3">
            <p className="text-base">Seguici sui social:</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/dinamiche_verticali" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image alt="Instagram" className="h-8 w-8" src={imgInstagram} width={32} height={32} />
              </a>
              <a href="https://www.facebook.com/dinamicheverticalisrl" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image alt="Facebook" className="h-8 w-8" src={imgFacebook} width={32} height={32} />
              </a>
              <a href="https://it.linkedin.com/company/dinamiche-verticali-srl" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Image alt="LinkedIn" className="h-8 w-8" src={imgLinkedIn} width={32} height={32} />
              </a>
              <a href="https://www.youtube.com/@DV_Formazione" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Image alt="YouTube" className="h-8 w-8" src={imgYoutube} width={32} height={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-['Barlow_Condensed:SemiBold'] text-2xl uppercase">Contatti</h3>
          <div className="space-y-2 text-base text-[#ff6316]">
            <a href="tel:+390112732500" className="block underline">+39 011 27 32 500</a>
            <a href="mailto:formazione@petzl.it" className="block underline">formazione@petzl.it</a>
            <a href="https://maps.app.goo.gl/mvX8fzTo2s7VgBh6A" target="_blank" rel="noreferrer" className="block underline">
              Via G. Battista Feroggio, 54, 10151 Torino
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}