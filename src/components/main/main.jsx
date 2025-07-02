import { MainButton, MainContainer, MainSection } from "../main/mainstyles";
import logo from "../../../public/assets/logocalistenia.png";
import guia from "../../../public/assets/GuiaCalisteniaGratuitaEduardoReinoso.pdf";
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
        <a href="https://pay.hotmart.com/U100579317M" target="blank">
          <MainButton style={{ backgroundColor: "#d17e16", color: "#920606" }}>
            Descargar versión completa
          </MainButton>
        </a>
      </MainSection>
    </MainContainer>
  );
};

export default Main;
