"use strict";

import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import data from "../../../data.json";
import Section from "../../../common/Section";
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
            <Section
              type="conferences"
              key={index}
              authors={item.authors}
              title={item.title}
              year={item.year}
              conference={item.conference}
              href={item.href}
              /* doi={item.doi} */
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
