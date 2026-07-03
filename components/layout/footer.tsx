import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" border-t-3 border-primary">
            <div className="flex p-5 justify-around items-center mx-20">
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
                <div className="flex gap-6 justify-center">
                    <div className="relative h-16 w-32">
                        <Image
                            src="/logo/logo-global-wind-organisation.avif"
                            width={100}
                            height={100}
                            alt="logo-global-wind-organisation" />
                    </div>
                    <div className="relative h-16 w-32">
                        <Image
                            src="/logo/logo-irata-international.avif"
                            width={100}
                            height={100}
                            alt="logo-global-wind-organisation" />
                    </div>
                    <div className="relative h-16 w-32">
                        <Image
                            src="/logo/logo-petzl-technical-institute.avif"
                            width={100}
                            height={100}
                            alt="logo-petzl-technical-institute" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Contattaci</h3>
                    <div>
                        <h3 className="text-primary text-xl">+39 011 27 32 500</h3>
                        <p className="text-sm">(dalle 08:30 alle 17:30 ; Lun-Ven)</p>
                        <p>formazione@petzl.it</p>
                        <p>Via G. Battista Feroggio, 54, 10151 Torino</p>
                    </div>
                </div>
            </div>


        </footer>
    )
}