import { MainButton, MainContainer, MainSection } from "../main/mainstyles";
import logo from "/src/assets/logocalistenia.png";
import guia from "../../assets/GuiaCalisteniaGratuitaEduardoReinoso.pdf";
const Main = () => {
  return (
    <MainContainer>
      <img src={logo} alt="" />
      <MainSection>
        <h2>Descarga la guía de Calistenia y empieza hoy</h2>
      </MainSection>
      <MainSection>
        <a href={guia} download="GuiaCalisteniaGratuitaEduardoReinoso.pdf">
          <MainButton style={{ backgroundColor: "#920606", color: "#cccccc" }}>
            Descargar versión gratuita
          </MainButton>
        </a>
        <MainButton style={{ backgroundColor: "#d17e16", color: "#920606" }}>
          Descargar versión completa
        </MainButton>
      </MainSection>
    </MainContainer>
  );
};

export default Main;
