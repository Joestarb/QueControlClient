
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnadirTrabajadores from "./pages/AnadirTrabajadores";
import Catalogo from './pages/Catalogo';
import Error404 from "./pages/Error404";
import GenerarQr from './pages/GenerarQr';
import Homepage from "./pages/HomePage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import QuesoyReceta from "./pages/QuesoyReceta";
import RecuperarContrasena from "./pages/RecuperarContrasena";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index/>} />
          <Route path="/recetas" element={<Catalogo/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/Recuperar" element={<RecuperarContrasena/>} />
          <Route path="/Anadir" element={<AnadirTrabajadores/>} />
          <Route path="/anadirReceta" element={<QuesoyReceta/>} />
          <Route path="/qr" element={<GenerarQr/>} />


          <Route path="/*" element={<Error404/>} />





          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
