import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faSass, faSquareJs} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import Escapium from "../../../public/images/Escap.png";

export default function works(){
    return(
        <main className="works">
            <section className="banner">
                <h2>Mes Projets</h2>
            </section>
            <section className="container">
                <section className="card">
                    <Image
                        src="/images/zaap/back.png"
                        alt="brakmar"
                        width="1200"
                        height="753"
                    />
                    {/* <Image
                        className="light-zaap-aura"
                        src="/images/zaap/zaap-light-ray.png"
                        alt="aura"
                        width="695"
                        height="695"
                    />
                    <Image
                        className="light-zaap"
                        src="/images/zaap/zaap-light.png"
                        alt="portal"
                        width="416"
                        height="416"
                    />*/}
                    <Image
                        className="default-zaap"
                        src="/images/zaap/zaap.png"
                        alt="empty cadrant"
                        width="1200"
                        height="590"
                    />
                    <Image
                        className="open-zaap"
                        src="/images/zaap/zaap-open.png"
                        alt="empty-light-cadrant"
                        width="1200"
                        height="590"
                    />
                    <Image
                        className="front"
                        src="/images/zaap/front.png"
                        alt="front"
                        width="1200"
                        height="407"
                    />
                    <div className="infoCard">
                        <h3>Dofipedia</h3>
                        <div className="imgIcone">
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <FontAwesomeIcon icon={faSass} />
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    </div>
                </section>
                <section className="card">
                    <Image src={Escapium} alt="Escapium"></Image>
                    <div className="infoCard">
                        <h3>Escapium</h3>
                        <div className="imgIcone">
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <FontAwesomeIcon icon={faSass} />
                            <FontAwesomeIcon icon={faSquareJs} />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}