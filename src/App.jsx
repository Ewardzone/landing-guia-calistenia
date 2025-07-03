import { useEffect } from "react";
import ReactGA from "react-ga4";

import "./App.css";
import Benefits from "./components/benefits/benefits";
import Comparativa from "./components/comparativa/comparativa";
import Contact from "./components/contact/contact";
import Main from "./components/main/main";
import Orientada from "./components/orientada/orientada";
import Whatsapp from "./components/whatsapp/whatsapp";

function App() {
  useEffect(() => {
    // Hotjar
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 6454226, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

    // Google Analytics
    ReactGA.initialize("G-44MF9QEG1X");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

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
