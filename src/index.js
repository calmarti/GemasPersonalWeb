import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import "./section.css"

ç
//¿seccion fotos?
//Gema: revisión exhaustiva de los items, agregar nuevos items, corregir typos y demás
//TODO: leer todo el código: identificar potenciales mejoras en naming, estructura de ficheros, legibilidad y no-redundancia o inutilización de propiedades y clases CSS


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
