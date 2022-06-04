import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import data from "../../data.json";

const { proyectos } = data;
console.log(proyectos);

export default function Investigacion() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Proyectos</h2>

          {proyectos.map((proyecto, index) => (
            <div key={index} className="publication-container">
              <p className="publication-item">
                <span className="title">
                  <em>{proyecto.nombre}</em>.
                </span>
                &nbsp;
                <span className="institucion">{proyecto.institucion}.</span>
                &nbsp;
                <span className="cargo">{proyecto.cargo}.</span>
                &nbsp;
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
