import "./navbar.css";
import StyledLink from "./StyledLink";
import { useState } from "react";
import Dropdown from "./Dropdown";

//TODO: mobile, para el navbar falta:
// - arreglar posicion, bg-color y color del dropdown 
// - reducir tamaño footer o de iconos de footer
// - hero: problema del espacio a la derecha (ya lo resolví en su día en versión desktop)
// - título y subtítulos más pequeños y centrados al screen mobile al tiempo que la foto muestra a Gema
// - resto de las páginas!!



//TODO: Home, falta:
//      -arreglar missmatch en el height del navbar y el body respecto del background-image (si es que este es el problema): resuelto con pos absolute en vez de relative en .navbar
//      -dar estilos a los a:hover en la barra de navegación y dropdown
//      -animación para el título de la página y ponerle un text-shadow
//      -¿cambiar el color white?
//      -arreglar el copyright 2022
//      -ajustar el width del background-image al tamaño del viewport
//TODO: arreglar StyledLink (no quita el text-decoration a las pseudo clases: visited, etc.)
//TODO: componente Entry (creado en /common) que recibe datos del entry como props
//TODO: enrutar bien el NotFound (documentación de react-router v6)
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
    { title: "Docencia y supervisión", slug: "/docencia-y-supervision" },
    {
      title: "Asesorias y Colaboraciones",
      slug: "/asesorias-y-colaboraciones",
    },
  ];

  return (
    <nav className="navbar">
      <StyledLink className="logo" to="/"></StyledLink>

      <input id="burger-menu" type="checkbox" />
      <label for="burger-menu" className="burger-label"></label>

      <ul className="navbar-list">
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
              <StyledLink className="animated-menu-item" to={item.slug}>
                {item.title}
              </StyledLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
