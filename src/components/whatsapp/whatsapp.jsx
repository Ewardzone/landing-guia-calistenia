import React from "react";
import { WhatsappStyles } from "./whatsappStyles";
import whatsapp from "../../assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <a href="https://wa.me/542995097082" target="_blank">
      <WhatsappStyles src={whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default Whatsapp;
