import "./App.css";
import Router from "./Router";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
