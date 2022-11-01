import React from "react";
import { Container } from "./styled";

export default function index() {
  return (
    <Container>
      <div className="containerHome">
        <div className="imgHome"></div>
      </div>

      <section className="containerAbout">
        <div className="aboutImg"></div>
        <div className="aboutTexts">
          <p className="aboutText">
            Em 2020 eu estava decindindo que area profissional queria atuar, até que rodando por vários temas “dei de
            cara” com a programação.
          </p>
          <p className="aboutText">
            {" "}
            Criei um forte interesse pela mesma algo que me ajudou muito inicialmente foi uma comunidade que me inseri
            no discord, lá senti dentro de uma fámilia todos se ajudavam para progredirmos junto, quando estava
            desânimado sempre viâ-os empenhando e aquilo me movia.
          </p>
          <p className="aboutText">
            Com o passar do tempo estudando dia após dia, percebi que era isso que eu queria para minha vida, estudar já
            não era uma coisa “forçada”, porque eu gostava doque eu fazia{" "}
          </p>
          <p className="aboutText">
            Nesse tempo estudando fui percebendo a importância de tudo, desde de o sono até o humor. Quanto mais eu
            evoluía mais eu tinha vontade de aprender, Quando eu estava desmotivado olhava pra trás e percebia o quanto
            eu já tinha me desenvolvido.
          </p>
        </div>
      </section>
      <section>
        <h2></h2>
        <div className="projects">
          <h2></h2>
          <div className="project">
            <h2></h2>
            <div className="imgProject"></div>
            <p></p>
          </div>
          <div className="project">
            <h2></h2>
            <div className="imgProject"></div>
            <p></p>
          </div>
          <div className="project">
            <h2></h2>
            <div className="imgProject"></div>
            <p></p>
          </div>
        </div>
      </section>
    </Container>
  );
}
