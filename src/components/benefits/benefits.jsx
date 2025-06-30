import React from "react";
import {
  BenefitsCard,
  BenefitsContainer,
  BenefitsSection,
} from "../benefits/benefitsStyles";

const Benefits = () => {
  return (
    <>
      <BenefitsContainer>
        <h2>Beneficios de la guía de calistenia</h2>
        <BenefitsSection>
          <BenefitsCard>
            <img src="/assets/cerebro.png" alt="" />
            <h4>Enfoque filosófico para entrenar con propósito</h4>
          </BenefitsCard>
          <BenefitsCard>
            <img src="/assets/puzzle.png" alt="" />
            <h4>Imágenes y explicaciones de las técnicas correctas</h4>
          </BenefitsCard>
          <BenefitsCard>
            <img src="/assets/progreso.png" alt="" />
            <h4>Métodos para progresar sin frustraciones</h4>
          </BenefitsCard>
        </BenefitsSection>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
