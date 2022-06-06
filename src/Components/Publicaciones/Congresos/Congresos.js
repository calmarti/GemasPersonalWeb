
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Section from "../../../common/Section";
import "../../Layout/section.css";

const { conferences } = data;

console.log(conferences);

export default function Congresos() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Congresos</h2>
          {conferences.map((item, index) => (
            <Section
              type="conferences"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              conference={item.conference}
              href={item.href}
              tipo={item.tipo}
              spanish={false}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
