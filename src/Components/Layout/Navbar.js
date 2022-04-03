import "./navbar.css";
import StyledLink from "./StyledLink"
import { useState } from "react";
import Dropdown from "./Dropdown";

//TODO: arreglar StyledLink (no quita el text-decoration a las pseudo clases: visited, etc.)
//TODO: componente Entry (creado en /common) que recibe datos del entry como props 
//TODO: upgrade a react-router v6
//TODO: enrutar bien el NotFound (documentación de react-router v6)
//TODO: Datos: restan por incluirse Congresos y Divulgación
//TODO: falta arreglar warning de missing hrefs en Academicas
//TODO: animación del título del hero de la home
//TODO: find out where global css variables should go in Material UI (index.css)
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
    <nav class="navbar">
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
