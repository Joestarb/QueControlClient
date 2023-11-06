import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import FichaInventario from '../Components/Admin/QR/FichaInventario'
import QrForm from '../Components/Admin/QR/QrForm'
import NavbarTrabajador from '../Components/Trabajador/NavbarTrabajador'
function GenerarQrTrabajador() {
  return (
    <div>
      <AdminNavHome />
      <NavbarTrabajador/>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <QrForm />
        <FichaInventario/>
      </div>
    </div>
  )
}

export default GenerarQrTrabajador