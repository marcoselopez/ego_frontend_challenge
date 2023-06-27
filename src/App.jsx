import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Spinner from "./components/Utilities/Spinner";
import FooterComponent from "./components/FooterComponent/FooterComponent";


function App() {

  return (
    <BrowserRouter>
      <Spinner />
      <NavbarComponent />
      <Router />
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
