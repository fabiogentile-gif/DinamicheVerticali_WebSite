import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Corsi } from "@/data/data";

export default function NavBar() {
    return (
        <nav className="flex p-5 justify-between border-b-3 border-amber-500">
            <Image
                src="./logo/logo-dinamiche-verticali-formazione.svg"
                width={200}
                height={200}
                alt="logo-dinamiche-verticali-formazione" />

            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem className="hover:text-amber-500">
                        <NavigationMenuLink asChild >
                            <Link href={"/"}>HOME</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:text-amber-500">
                        <NavigationMenuTrigger>CORSI</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white">
                            <ul>
                                <ListItems/>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:text-amber-500">
                        <NavigationMenuLink asChild >
                            <Link href={"/"}>NEWS</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:text-amber-500">
                        <NavigationMenuLink asChild >
                            <Link href={"/"}>CONTATTI</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

function ListItems() {
    return (
        <ul>
            {Corsi.map(item => (
                <li key={item.id} className="hover:text-amber-500">
                    <NavigationMenuLink asChild>
                        <Link href={"/"}>
                            <h2>{item.title}</h2>
                        </Link>
                    </NavigationMenuLink>
                </li>
            ))}
        </ul>

    )
}