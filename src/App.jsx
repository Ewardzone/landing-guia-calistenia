import "./App.css";
import Benefits from "./components/benefits/benefits";
import Comparativa from "./components/comparativa/comparativa";
import Contact from "./components/contact/contact";
import Main from "./components/main/main";
import Orientada from "./components/orientada/orientada";
import Whatsapp from "./components/whatsapp/whatsapp";

function App() {
  return (
    <>
      <div>
        <Main />
        <Benefits />
        <Orientada />
        <Comparativa />
        <Contact />
        <Whatsapp />
      </div>
    </>
  );
}

export default App;
