import styled from "styled-components";
import fondo from "../../../public/assets/fondo.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  background-image: url(${fondo});
  background-position: center center; /* centra horizontal y vertical */
  background-repeat: no-repeat; /* evita que se repita */
  background-size: cover;
  img {
    width: 32vw;
    height: auto;
    padding-top: 2rem;
    margin-left: 43vw;
    filter: drop-shadow(1px 2px 6px rgba(0, 0, 0, 0.8));
  }
  @media (min-width: 768px) {
    img {
      width: 25vw;
    }
  }
  @media (min-width: 1024px) {
    img {
      margin-left: 40rem;
      width: 20rem;
    }
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  h2 {
    color: white;
    font-family: montserrat;
    font-weight: bold;
    font-size: 9vw;
    letter-spacing: 0;
    line-height: 1;
    text-shadow: 2px 2px 2px black;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 7vw;
    }
  }
`;

export const MainButton = styled.button`
  width: fit-content;
  border-radius: 0.8rem;
  font-size: 3.5vw;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 5vw;
  padding: 1.5vw;
  transition: filter 0.3s ease;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8);
  &:hover {
    filter: brightness(0.85);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 0px 0 #b35f12;
  }
`;
