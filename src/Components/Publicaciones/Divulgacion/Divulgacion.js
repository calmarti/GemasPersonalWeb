import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Item from "../../../common/Item";


const { divulgacion } = data;


export default function Divulgacion() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section">
          <h2 className="section-heading">Divulgación</h2>
          {divulgacion.map((item, index) => (
            <Item
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
