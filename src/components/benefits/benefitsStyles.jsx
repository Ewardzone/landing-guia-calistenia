import styled from "styled-components";

export const BenefitsContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 1.5rem;
  flex-direction: column;
  background-color: #400202;
  h2 {
    color: #d17e16;
    font-family: montserrat;
    font-weight: bold;
    font-size: 4vw;
    letter-spacing: 0;
    line-height: 1;
    margin-top: 1rem;
    @media (min-width: 768px) {
      font-size: 3vw;
    }
    @media (min-width: 1024px) {
      font-size: 2vw;
    }
  }
`;

export const BenefitsSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 27vw;
  height: fit-content;
  background-color: #6c0606;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 25vw;
  }
  @media (min-width: 1024px) {
    width: 20vw;
  }

  img {
    height: 27vw;
    width: auto;
    filter: brightness(1.5);
    @media (min-width: 768px) {
      height: 15vw;
      width: auto;
    }
    @media (min-width: 1024px) {
      height: 15vw;
      width: auto;
    }
  }
  h4 {
    color: #cccccc;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: normal;
    font-size: 3vw;
    letter-spacing: 2;
    line-height: 1.1;
    @media (min-width: 768px) {
      font-size: 1.5vw;
    }
    @media (min-width: 1024px) {
      font-size: 1vw;
    }
  }
`;
