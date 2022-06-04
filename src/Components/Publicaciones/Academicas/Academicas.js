"use strict";

import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import dataFile from "../../../academicas.json";
import Section from "./SectionComponent";
import "./academicas.css";

const { journals, reports } = dataFile;

// const reports = papers;

const other = journals;

// TODO: fecha justo después del nombre de los autores y entre paréntesis
// TODO: DOI o link, poner "DOI:" y ponerlo a continuación del nombre de la publicación

export default function Academicas() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">
            Publicaciones en revistas arbitradas
          </h2>
          {journals.map((item, index) => (
            <Section
              type="journals"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              href={item.href}
              doi={item.doi}
            />
          ))}
        </section>

        <section className="section">
          <h2 className="section-heading">
            Informes y publicaciones no arbitradas
          </h2>
          {reports.map((item, index) => (
            <Section
              type="reports"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              href={item.href}
              doi={item.doi}
            />
          ))}
        </section>

        {/* <p>
            <strong>Hernandez-Milian, G.</strong> 2010.{" "}
            <em>
              The construction of a bones reference collection for piscivorous
              predators diet
            </em>
            . Internal report, University College Cork, Ireland. 10pp.
            <br />
            <br />
            <strong>Hernández-Milián, G.</strong>, Goetz, S., Varela-Dopico, C.,
            Rodríguez Gutiérrez, J., Romon, J., Fuertes Gamundi, J.R., Ulloa,
            E., Tregenza, N.J.C., Smerdon, A., Otero, M.G., Tato, V., Wang, J.,
            Santos, M.B., López, A., Lago, R., Portela, J. y Pierce, G.J. 2008.{" "}
            <em>
              Resultados del estudio a pequeña escala de las interacciones de
              cetáceos y pesquerías de palangre en las aguas del Atlántico:
              resultado de las correlaciones ambientales con las capturas y las
              incidencias de depredación
            </em>
            . Informe interno, Anexo IV, ARVI, Ministerio de Medio Ambiente.
            51pp.
            <br />
            <br />
            <strong>Hernández-Milián, G.</strong> 2003.{" "}
            <em>Arao dos con (Uria aalge ibericus)/Iberian guillemot</em>.
            Boletín El Abejaruco 3: 5-6. Grupo Ornitológico ALCEDO, Universidad
            de Alcalá de Henares, España
            <br />
            <br />
            <strong>Hernández-Milián, G.</strong> 2003.{" "}
            <em>
              Plantas del litoral affectadas por la marea negra/coastal
              vegetation affected by the oil spill.
            </em>{" "}
            Boletín El Abejaruco 3: 9-10. Grupo Ornitológico ALCEDO, Universidad
            de Alcalá de Henares, España
            <br />
            <br />
            <strong>Hernandez Milián, G.</strong> 2003.{" "}
            <em>Monte Louro y Lagoa das Xarfas/Louro Hill and Xarfas Lagoa</em>.
            Boletín El Abejaruco 3: 11-12. Grupo Ornitológico ALCEDO,
            Universidad de Alcalá de Henares, España
            <br />
            <br />
          </p> */}

        <section className="section">
          <h2 className="section-heading">Libros y monografías</h2>
          {other.map((item, index) => (
            <Section
              type="other"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              href={item.href}
              doi={item.doi}
            />
          ))}

          {/*
          <br />
          <strong>Hernández Milián, G.</strong> 2002.{" "}
          <em>Boletín Flora del Parque Natural de Monfragüe</em>. Santiago de
          Compostela, España. Realizado para la excursión a dicho Parque Natural
          con la asociación Obradoiro Ambiental Oureol (8-10 de marzo)
          <br />
          <br />
          <strong>Hernández Milián, G.</strong> 2002.{" "}
          <em>Boletín Historia del Parque Natural de Monfragüe</em>. Santiago de
          Compostela, España. Realizado para la excursión de dicho Parque
          Natural con la asociación Obradoiro Ambiental Oureol (8-10 de marzo)
          <br />
          <br />
          <strong>Hernández Milián, G.</strong> 2001.{" "}
          <em>Parque Natural de Corrubedo</em>. Boletín El Abejaruco 3: 7-8.
          Grupo Ornitológico ALCEDO, Universidad de Alcalá de Henares, Madrid,
          España. */}
        </section>
      </main>
      <Footer />
    </>
  );
}
