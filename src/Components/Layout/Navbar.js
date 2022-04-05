import "./navbar.css";
import StyledLink from "./StyledLink"
import { useState } from "react";
import Dropdown from "./Dropdown";


//TODO: Prepara un MVP: 
//Falta: 
// 1. introducir a mano todos los datos pero con un componente reutilizable "...Item" 
//específico de cada página (académica, docencia, etc.)
// 2. dar estilos SASS al main de cada página y a ll componente item específico de cada página
// 3. publicar en GitHub Pages
// 4. empezar proyecto sencillo en react (todo list, proyecto original con alguna API pública, etc.)


//TODO: Home, falta: 
//      -arreglar missmatch en el height del navbar y el body respecto del background-image (si es que este es el problema): resuelto con pos absolute en vez de relative en .navbar
//      -dar estilos a los a:hover en la barra de navegación y dropdown
//      -animación para el título de la página y ponerle un text-shadow
//      -¿cambiar el color white?
//      -arreglar el copyright 2022
//      -ajustar el width del background-image al tamaño del viewport
//TODO: arreglar StyledLink (no quita el text-decoration a las pseudo clases: visited, etc.)
//TODO: componente Entry (creado en /common) que recibe datos del entry como props 
//TODO: upgrade a react-router v6
//TODO: enrutar bien el NotFound (documentación de react-router v6)
//TODO: Datos: restan por incluirse Congresos y Divulgación
//TODO: falta arreglar warning de missing hrefs en Academicas
//TODO: animación del título del hero de la home
//TODO: navbar size should be the same across pages

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const items = [
    { title: "Investigación", slug: "/investigacion" },
    {
      title: "Publicaciones",
      submenu: [
        { title: "Académicas", slug: "/publicaciones/academicas" },
        { title: "Congresos", slug: "/publicaciones/congresos" },
        { title: "Divulgación", slug: "/publicaciones/divulgacion" },
      ],
    },
    { title: "Docencia", slug: "/docencia" },
    { title: "Colaboraciones", slug: "/colaboraciones" },
    { title: "Asesorías", slug: "/asesorias" },
  ];

  return (
    <nav className="navbar">
      <StyledLink className="logo" to="/"></StyledLink>
      <ul>
        {items.map((item) =>
          item.submenu ? (
            <li
              key={item.title}
              onMouseEnter={() => {
                setDropdown((current) => !current);
              }}
              onMouseLeave={() => {
                setDropdown((current) => !current);
              }}
            >
              {item.title}

              <Dropdown
                submenu={item.submenu}
                title={item.title}
                dropdown={dropdown}
              />
            </li>
          ) : (
            <li key={item.title}>
              <StyledLink to={item.slug}>{item.title}</StyledLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
