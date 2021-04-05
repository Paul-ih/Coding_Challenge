import "./App.css";
import { NavLink } from "react-router-dom";
import NavMain from "./components/NavMain";
import React from "react";

function App() {
  return (
    <div>
      <NavMain />
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/temperatures">Temperature</NavLink>
      <NavLink to="/customizeimages">Customize images</NavLink>
    </nav>
    </div>
  );
}

export default App;
