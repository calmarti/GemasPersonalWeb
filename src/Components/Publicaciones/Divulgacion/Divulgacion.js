import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Section from "../../../common/Section";
import "../../Layout/section.css";

const { divulgacion } = data;

console.log(divulgacion);

//Problema: no renderiza la lista de items de divulgacion pero no tira error y si se trae el array del json

export default function Divulgacion() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Divulgación</h2>
          {divulgacion.map((item, index) => (
            <Section
              type="divulgacion"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              curso={item.curso}
              lugar={item.lugar}
              tipo={item.tipo}
              //   spanish={false}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
