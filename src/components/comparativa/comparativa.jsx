import React from "react";
import { ComparativaContainer } from "./comparativaStyles";
import tabla from "./../../assets/tabla.png";

const Comparativa = () => {
  return (
    <>
      <ComparativaContainer>
        <h2>Comparativa gratuita vs completa</h2>
        <img src={tabla} alt="" />
      </ComparativaContainer>
    </>
  );
};

export default Comparativa;
