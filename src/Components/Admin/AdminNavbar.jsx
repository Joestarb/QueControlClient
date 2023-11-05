import React from 'react';
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <div className='my-4 shadow-2xl'>
        <nav className='flex justify-evenly border-white border-4 py-4 '>
          <Link to="/index">Sistema</Link>
          <Link to="/anadirReceta">Añadir Receta</Link>
          <Link to="/anadir">Registro Trabajadores</Link>
          <Link to="/crudtrabajadores"> Consulta trabajadores </Link>
          <Link to="/qr"> Generar QR </Link>


        </nav>
      </div>
    </div>
  );
}

export default AdminNavbar