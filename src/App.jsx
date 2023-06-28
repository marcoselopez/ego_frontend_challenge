import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Spinner from "./components/Utilities/Spinner";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import AppContext from "./AppContext";
import { useState } from "react";


function App() {

  // STATES
  const [modelId, setModelId] = useState(1);
  const [tabsValue, setTabsValue] = useState(0);

  return (
    <AppContext.Provider value={{modelId, setModelId, tabsValue, setTabsValue}}>
      <BrowserRouter>
        <Spinner />
        <NavbarComponent />
        <Router />
        <FooterComponent />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
