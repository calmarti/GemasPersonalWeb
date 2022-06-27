import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import "./section.css"

// scp -i /home/ivan/Desktop/bootcampweb-kc.pem -r build  ubuntu@54.164.117.110:/var/www/html 

//TODO: popover con la descripción de los proyectos

//fotos en algunas secciones (i.e. Docencia, Proyectos) para darle + vida
//Gema: revisión exhaustiva de los items, agregar nuevos items, corregir typos y demás
//TODO: dar más contraste a estilos en general y aplicar ui principles
//TODO: leer todo el código: identificar potenciales mejoras en naming, estructura de ficheros, legibilidad y no-redundancia o inutilización de propiedades y clases CSS


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
