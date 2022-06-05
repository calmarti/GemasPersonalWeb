import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import data from "../../data.json";
import Section from "../../common/Section";

const { proyectos, workshops } = data;
console.log(workshops);

//TODO: resolver el problema de los puntos en registros donde no hay info (meter un condicional en el JSX) y agregar sección de Workshops

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
                  <em>{proyecto.nombre}.</em>
                </span>
                &nbsp;
                <span className="institucion">{proyecto.institucion}.</span>
                &nbsp;
                <span className="cargo">{proyecto.cargo}.</span>
                &nbsp;
                <span className="fecha">{proyecto.fecha}.</span>
                &nbsp;
                <span className="sponsor">{proyecto.sponsor}.</span>
                &nbsp;
                <span className="grants">{proyecto.grants}.</span>
                &nbsp;
              </p>
            </div>
          ))}
        </section>
        <section className="section">
          <h2 className="section-heading">Workshops</h2>
          {workshops.map((item, index) => (
            <Section
              type="workshops"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              workshop={item.workshop}
              tipo={item.tipo}
              spanish={false}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
