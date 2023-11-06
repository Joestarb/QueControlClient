
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnadirTrabajadores from "./pages/AnadirTrabajadores";
import CrudTrabajadoresp from "./pages/CrudTrabajadoresp";
import Error404 from "./pages/Error404";
import GenerarQr from './pages/GenerarQr';
import GenerarQrTrabajador from "./pages/GenerarQrTrabajador";
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
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/Recuperar" element={<RecuperarContrasena/>} />
          <Route path="/Anadir" element={<AnadirTrabajadores/>} />
          <Route path="/anadirReceta" element={<QuesoyReceta/>} />
          <Route path="/qr" element={<GenerarQr/>} />
          <Route path="/crudtrabajadores" element={<CrudTrabajadoresp/>} />
          <Route path="/qrtrabajador" element={<GenerarQrTrabajador/>} />



          <Route path="/*" element={<Error404/>} />





          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
