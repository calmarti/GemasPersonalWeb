
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Item from "../../../common/Item";
import "../../Layout/section.css";

const { conferences } = data;

export default function Congresos() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Congresos</h2>
          {conferences.map((item, index) => (
            <Item
              type="conferences"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              conference={item.conference}
              href={item.href}
              tipo={item.tipo}
              // spanish={false}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
