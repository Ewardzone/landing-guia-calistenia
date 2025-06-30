import styled from "styled-components";

export const OrientadaContainer = styled.div`
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
  align-items: center;
  justify-content: center;

  img {
    height: 27vw;
    width: auto;
    fill: #d17e16;
    filter: brightness(1.5);
    background-color: #300101;
    border-radius: 10px 10px 0 0;
  }
  h4 {
    color: #400202;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: bold;
    font-size: 3vw;
    letter-spacing: 2;
    line-height: 1.1;
    margin: 0 0.5vw;
    background-color: #d17e16;
    border-radius: 0 0 10px 10px;
  }
`;
