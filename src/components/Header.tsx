import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/dejeuner-roquette.svg"

export default function Header(){
    return(
        <header>
            <p>PortoFolio</p>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/projets'}>Projets</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>

        </header>
    )
}