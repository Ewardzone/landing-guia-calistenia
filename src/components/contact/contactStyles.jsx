import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 1.5rem;
  flex-direction: column;

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

export const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 15vw;
  background-color: #300101;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 8vw;
    height: 8vw;
  }
  @media (min-width: 1024px) {
    width: 6vw;
    height: 6vw;
  }
  transition: filter 0.3s ease;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8);
  &:hover {
    filter: brightness(0.85);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 0px 0 #b35f12;
  }
  img {
    height: auto;
    width: 10vw;
    @media (min-width: 768px) {
      width: 5vw;
    }
    @media (min-width: 1024px) {
      width: 5vw;
    }
  }
  h4 {
    color: #cccccc;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: bold;
    font-size: 3vw;
    letter-spacing: 2;
    line-height: 1.1;
    margin: 1vw 0.5vw;
  }
`;
