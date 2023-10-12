import Image from 'next/image'
import Bg_home from '../../public/images/bg_home.jpeg'
import IconeGH from '../../public/images/github.svg'
import IconeLK from '../../public/images/linkedin.svg'
import Link from "next/link";

export default function Home() {
    return (
    <main className="home">
      <section>
        <section className="bg-info">
          <Image src={Bg_home} alt="Background home" width={500} height={500}/>
        </section>
        <section className="info">
          <h2>Je suis <span>Pietro</span>,<br/> Développeur Web Junior </h2>
          <p>Actuellement en formation développeur web chez BeCode,
            je suis actuellement à la recherche d’un stage pour m’améliorer dans ce domaine et pouvoir valider mon certificat en tant que développeur Web chez BeCode.</p>
          <div>
            <Link  className="linkContact" href={'/contact'}>Contact</Link>
            <Link href={"https://www.linkedin.com/in/pietro-scaduto/"}><Image src={IconeLK} alt="Icone linkedin" width={30} height={30}></Image></Link>
            <Link href={'https://github.com/Otto1808'}><Image src={IconeGH} alt="Icone Github" width={30} height={30}></Image></Link>
          </div>
        </section>
      </section>
    </main>
  )
}
