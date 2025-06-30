import React from "react";
import { ContactCard, ContactContainer, ContactSection } from "./contactStyles";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import gmail from "../../assets/gmail.png";
const Contact = () => {
  return (
    <>
      <ContactContainer>
        <h2>Otras vías de contacto</h2>
        <ContactSection>
          <a href="https://www.instagram.com/ewardzone/" target="blank">
            <ContactCard>
              <img src={instagram} alt="" />
            </ContactCard>
          </a>
          <a href="https://www.facebook.com/Ewardzone" target="blank">
            <ContactCard>
              <img src={facebook} alt="" />
            </ContactCard>
          </a>
          <a href="https://www.youtube.com/@Ewardzone-" target="blank">
            <ContactCard>
              <img src={youtube} alt="" />
            </ContactCard>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ewardzone.er@gmail.com&su=Consulta&body=Hola%20Eduardo"
            target="blank"
          >
            <ContactCard>
              <img src={gmail} alt="" />
            </ContactCard>
          </a>
        </ContactSection>
      </ContactContainer>
    </>
  );
};

export default Contact;
