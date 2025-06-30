import React from "react";
import {
  BenefitsCard,
  BenefitsContainer,
  BenefitsSection,
} from "./benefitsStyles";
import brain from "/Users/Eduardo Reynoso/Desktop/mi-landing/src/assets/cerebro.png";
import puzzle from "/Users/Eduardo Reynoso/Desktop/mi-landing/src/assets/puzzle.png";
import progreso from "/Users/Eduardo Reynoso/Desktop/mi-landing/src/assets/progreso.png";

const Benefits = () => {
  return (
    <>
      <BenefitsContainer>
        <h2>Beneficios de la guía de calistenia</h2>
        <BenefitsSection>
          <BenefitsCard>
            <img src={brain} alt="" />
            <h4>Enfoque filosófico para entrenar con propósito</h4>
          </BenefitsCard>
          <BenefitsCard>
            <img src={puzzle} alt="" />
            <h4>Imágenes y explicaciones de las técnicas correctas</h4>
          </BenefitsCard>
          <BenefitsCard>
            <img src={progreso} alt="" />
            <h4>Métodos para progresar sin frustraciones</h4>
          </BenefitsCard>
        </BenefitsSection>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
