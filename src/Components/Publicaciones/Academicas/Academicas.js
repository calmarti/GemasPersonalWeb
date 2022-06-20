import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Item from "../../../common/Item";
// import "../../../section.css";

const { journals, reports, books } = data;

const other = journals;

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
            <Item
              type="journals"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              href={item.href}
              doi={item.doi}
              // spanish={false}
            />
          ))}
        </section>

        <section className="section">
          <h2 className="section-heading">
            Informes y publicaciones no arbitradas
          </h2>
          {reports.map((item, index) => (
            <Item
              type="reports"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              href={item.href}
              project={item.Project}
              sponsor={item.sponsor}
              pages={item.Pages}
              // spanish={false}
            />
          ))}
        </section>

        <section className="section">
          <h2 className="section-heading">Libros, boletines y monografías</h2>
          {books.map((item, index) => (
            <Item
              type="books"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              publisher={item.publisher}
              institution={item.institution}
              // spanish={true}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
