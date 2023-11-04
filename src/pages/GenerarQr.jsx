import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FichaInventario from '../Components/Admin/QR/FichaInventario'
import QrForm from '../Components/Admin/QR/QrForm'
function GenerarQr() {
  return (
    <div>
      <AdminNavHome />
      <AdminNavbar />
      <div className='girdquesoreceta'>
        <QrForm />
        <FichaInventario/>
      </div>
    </div>
  )
}

export default GenerarQr