import { Routes, Route, Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";

// ---- COMPONENTES -----
import { Inicio } from "./components/menu";
import { Organismos } from "./components/organismos";
import { Programas } from "./components/programas";
import { Museos } from "./components/museos";
import { Institutos } from "./components/institutos";
import { Convocatorias } from "./components/convocatorias";
import { Tramites } from "./components/tramites";

export function App() {
  return (
    <Container maxW="container.xl">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/organismos" element={<Organismos />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/museos" element={<Museos />} />
        <Route path="/institutos" element={<Institutos />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/convocatorias" element={<Convocatorias />} />
      </Routes>
    </Container>
  );
}
