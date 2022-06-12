import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Item from "../../common/Item";
import data from "../../data.json";
import "../Layout/section.css";

const { docencia } = data;

//TODO: recuerda mirar CV para ver el formato de los items de Docencia y de las demás secciones! (no asumir que son iguales a Académicas)

export default function Docencia() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Docencia</h2>

          {docencia.map((item, index) => (
            <div key={index} className="publication-container">
              <p className="publication-item">
                <span className="asignaturas">
                  <em>{item.asignaturas}.</em>
                </span>
                &nbsp;
                <span className="titulacion">{item.titulacion}.</span>
                &nbsp;
                <span className="institucion">{item.institution}.</span>
                &nbsp;
                <span className="fecha">{item.fecha}.</span>
              </p>
            </div>
          ))}
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
