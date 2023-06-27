import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";


function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Router />
    </BrowserRouter>
  )
}

export default App
