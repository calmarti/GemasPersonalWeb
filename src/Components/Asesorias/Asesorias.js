import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import data from "../../data.json";


const { asesorias } = data;

export default function Asesorias() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Asesorias y colaboraciones</h2>

          {asesorias.map((item, index) => (
            <div key={index} className="publication-container">
              <p className="publication-item">
                <span className="title">
                  <em>{item.nombre}.</em>
                </span>
                &nbsp;
                {item.institucion && (
                  <span className="institucion">{item.institucion}.</span>
                )}
                &nbsp;
                <span className="cargo">{item.cargo}.</span>
                &nbsp;
                <span className="fecha">{item.fecha}.</span>
                {item.href && (
                  <a className="href" href={item.href}>
                    {" "}
                    {item.href}
                  </a>
                )}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
