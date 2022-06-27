import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import data from "../../data.json";


const { docencia, supervision } = data;


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

        <br/>
        <br/>
        

        <section className="section">
          <h2 className="section-heading">Supervisión</h2>
          {supervision.map((item, index) => (
            <div key={index} className="publication-container">
              <p className="publication-item">
                <span className="student">{item.student}.</span>
                &nbsp;
                <span className="title">
                  <em>{item.title}.</em>
                &nbsp;
                  <span className="year">{item.year}.</span>
                </span>
                &nbsp;
                <span className="institucion">{item.institucion}</span>
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
