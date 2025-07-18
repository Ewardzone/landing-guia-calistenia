import styled from "styled-components";

export const ComparativaContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 1.5rem;
  flex-direction: column;
  background-color: #300202;
  align-items: center;

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
  img {
    width: 90%;
    height: auto;
    border: #d17e16 1px solid;
    border-radius: 10px;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1024px) {
      width: 70%;
    }
  }
`;
