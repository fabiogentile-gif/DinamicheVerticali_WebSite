import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex p-5 justify-between border-t-3 border-amber-500">
            <div>
                <Image
                    src="/logo/logo-dinamiche-verticali-formazione.svg"
                    width={200}
                    height={200}
                    alt="logo-dinamiche-verticali-formazione" />
                <ul>
                    <li>
                        © 2026 Dinamiche Verticali Formazione srl
                    </li>
                    <li>
                        P.iva 11991170017
                    </li>
                </ul>
            </div>
            <div className="flex auto">
                <Image
                    src="/logo/logo-global-wind-organisation.avif"
                    width={100}
                    height={50}
                    alt="logo-global-wind-organisation" />
                <Image
                    src="/logo/logo-irata-international.avif"
                    width={100}
                    height={50}
                    alt="logo-global-wind-organisation" />
                <Image
                    src="/logo/logo-petzl-technical-institute.avif"
                    width={100}
                    height={50}
                    alt="logo-petzl-technical-institute" />
            </div>

        </footer>
    )
}