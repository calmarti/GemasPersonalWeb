import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Investigacion from "./Components/Investigacion/Investigacion";
import Academicas from "./Components/Publicaciones/Academicas/Academicas";
import Docencia from "./Components/Docencia/Docencia";
import Asesorias from "./Components/Asesorias/Asesorias";
import NotFound from "./NotFound";


function App() {
  return (
    <Routes>
      <Route path="/investigacion" element={<Investigacion />} />
      <Route path="/publicaciones/academicas" element={<Academicas />} />
      <Route path="/publicaciones/congresos" element={<Congresos />} />
      <Route path="/publicaciones/divulgacion" element={<Divulgacion />} />
      <Route path="/docencia" element={<Docencia />} />      
      <Route path="/asesorias-y-colaboraciones" element={<Asesorias />} />
      <Route exact path="/" element={<Home />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
