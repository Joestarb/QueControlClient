import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import QrProducto from '../Components/Admin/QR/QrProducto'

function Producto() {
  return (
    <div>
      <AdminNavHome/>
      <AdminNavbar/>
        <QrProducto/>
    </div>
  )
}

export default Producto