
import { BrowserRouter, Routes, Route } from "react-router";
import "../css/styles.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Perfil from "./components/Perfil.jsx";
import Detalles from "./components/Detalles.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/proyectos/:proyecto" element={<Detalles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
