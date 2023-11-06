import React from 'react';
import { Link } from "react-router-dom";
function NavbarTrabajador() {
  return (
    <div>
    <div className='my-4 shadow-2xl'>
      <nav className='flex justify-evenly border-white border-4 py-4 '>
        <Link to="/qrtrabajador">Añadir  Inventario </Link>
        <Link to="/index"> Quesos </Link>
        


      </nav>
    </div>
  </div>
  )
}

export default NavbarTrabajador