import styled from "styled-components";

export const WhatsappStyles = styled.img`
  position: fixed;
  bottom: 21vw;
  right: 3vw;
  width: 15vw;
  height: auto;
  filter: drop-shadow(2px 2px 2px black);
  @media (min-width: 768px) {
    bottom: 3vw;
    width: 10rem;
  }
  @media (min-width: 1024px) {
    bottom: 2vw;
    width: 7rem;
  }
`;
