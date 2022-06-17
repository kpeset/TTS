import React, { useEffect, useState } from "react";
import axios from "axios";
import GetMail from "../Components/GetMail";

function About() {
  return (
    <div className="about-page">
      <div className="title-about-section">
        <h1>Qui suis-je ?</h1>
      </div>
      <div className="about-content">
        <h2>Bonjour !</h2>
        <p>
          Je m'appelle Kevin, j'ai 34 ans, et je suis actuellement en
          reconversion professionnelle à la Wild Code School.
        </p>

        <p>
          Précédemment, j'étais responsable d'un magasin de cigarette
          électronique à Paris, mais j'ai dû quitter cette société pour la
          raison dite précédemment. C'était une expérience vraiment incroyable
          car cela m'a permis de travailler avec encore plus d'autonomie et de
          créativité par rapport à mes expériences précédentes dans le secteur
          hôtelier dans lequel j'ai une expérience professionnelle à
          l'international.
        </p>
        <p>
          Suite à ce départ, j'ai décidé de continuer sur la voie de
          l'épanouissement personnel. Il était donc évident de me reconvertir
          dans le développement web car j'ai toujours eu une grande appétence
          pour la programmation et la résolution de problèmes. C'est en février
          que j'ai entamé ma reconversion à la Wild Code School, un boot camp de
          5 mois orienté projet, dans lequel j'ai choisi de suivre le cursus
          React.js et Node.js.
        </p>
        <p>
          Ce métier me plaît énormément car j'aime apprendre constamment,
          travailler en équipe et participer activement à la résolution de
          problèmes. C'est justement cette passion qui m'anime qui me permet
          d'avoir une grande marge de progression.
        </p>
        <p>
          Si vous voulez en savoir plus mon parcours professionnel, je vous
          invite à consulter mon Linkedin
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kpeset/"
          className="links"
        >
          Mon Linkedin
        </a>
      </div>
    </div>
  );
}

export default About;
