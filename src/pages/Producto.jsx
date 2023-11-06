import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import NavbarTrabajador from '../Components/Trabajador/NavbarTrabajador'
import QrProducto from '../Components/Admin/QR/QrProducto'

function Producto() {
  return (
    <div>
      <AdminNavHome/>
      <NavbarTrabajador/>
        <QrProducto/>
    </div>
  )
}

export default Producto