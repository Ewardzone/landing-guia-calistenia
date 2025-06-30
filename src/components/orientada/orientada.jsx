import React from "react";
import {
  OrientadaCard,
  OrientadaContainer,
  OrientadaSection,
} from "./orientadaStyles";

import ninos from "../../assets/ninos.png";
import adultos from "../../assets/adultos.png";
import profes from "../../assets/profes.png";

const Orientada = () => {
  return (
    <>
      <OrientadaContainer>
        <h2>¿Para quién es esta guía?</h2>
        <OrientadaSection>
          <OrientadaCard>
            <img src={ninos} alt="" />
            <h4>Niños y adolescentes a partir de 10 años</h4>
          </OrientadaCard>
          <OrientadaCard>
            <img src={adultos} alt="" />
            <h4>Adultos que quieran empezar en calistenia</h4>
          </OrientadaCard>
          <OrientadaCard>
            <img src={profes} alt="" />
            <h4>Profes que buscan material didáctico de apoyo</h4>
          </OrientadaCard>
        </OrientadaSection>
      </OrientadaContainer>
    </>
  );
};

export default Orientada;
