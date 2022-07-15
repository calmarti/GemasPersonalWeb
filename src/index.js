import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import "./section.css";

//TODO: aumentar ahora el weight o el size del font en toda la web y ajuste especial al subtitulo del Home
//OJO: al parecer el nuevo font descuadró el justificado (al menos en Congresos), revisar!

//TODO: Investigación: un popover activable con click (con librería floating-ui) contentivo de una imagen ilustrativa y la descripción del proyectos
//TODO: en el popover de la tesis aparecerá el logo, en los otros proyectos una imagen
//revisión exhaustiva de los items con Gema
//fotos en algunas secciones (i.e. Docencia, Proyectos) para darle + vida
//Gema: revisión exhaustiva de los items, agregar nuevos items, corregir typos y demás
//TODO: dar más contraste a estilos en general y aplicar ui principles
//TODO: leer todo el código: identificar potenciales mejoras en naming, estructura de ficheros, legibilidad y no-redundancia o inutilización de propiedades y clases CSS

// scp -i /home/ivan/Desktop/bootcampweb-kc.pem -r build  ubuntu@54.164.117.110:/home/ubuntu


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
