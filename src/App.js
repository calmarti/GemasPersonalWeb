import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Investigacion from "./Components/Investigacion/Investigacion";
import Academicas from "./Components/Publicaciones/Academicas/Academicas";
import Congresos from "./Components/Publicaciones/Congresos/Congresos";
import Divulgacion from "./Components/Publicaciones/Divulgacion/Divulgacion";
import Docencia from "./Components/Docencia/Docencia";
import Asesorias from "./Components/Asesorias/Asesorias";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/investigacion" element={<Investigacion />} />
      <Route path="/publicaciones/academicas" element={<Academicas />} />
      <Route path="/publicaciones/congresos" element={<Congresos />} />
      <Route path="/publicaciones/divulgacion" element={<Divulgacion />} />
      <Route path="/docencia-y-supervision" element={<Docencia />} />
      <Route path="/asesorias-y-colaboraciones" element={<Asesorias />} />
      <Route exact path="/" element={<Home />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
