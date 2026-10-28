// App.jsx
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Detalles from "./components/Detail/Detail";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Profile />} />
        <Route path="/detalles/:proyecto" element={<Detalles />} />
        {/* Catch-all para 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
