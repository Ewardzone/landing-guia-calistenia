import styled from "styled-components";

export const OrientadaContainer = styled.div`
  display: flex;
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

export const OrientadaSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrientadaCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 27vw;
  height: 40vw;
  background-color: #6c0606;
  @media (min-width: 768px) {
    width: 25vw;
    height: 27vw;
  }
  @media (min-width: 1024px) {
    width: 20vw;
    height: 27vw;
  }

  img {
    height: 27vw;
    width: auto;
    fill: #d17e16;
    filter: brightness(1.5);
    background-color: #300101;
    border-radius: 10px 10px 0 0;
    @media (min-width: 768px) {
      height: 20vw;
    }
    @media (min-width: 1024px) {
      height: 20vw;
    }
  }
  h4 {
    color: #cccccc;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: bold;
    font-size: 2.5vw;
    letter-spacing: 2;
    line-height: 1.1;
    margin: 0 0.5vw;
    border-radius: 30px 30px 10px 10px;

    @media (min-width: 768px) {
      font-size: 2vw;
    }
    @media (min-width: 1024px) {
      font-size: 1.5vw;
    }
  }
`;
