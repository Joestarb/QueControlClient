import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FichaInventario from '../Components/Admin/QR/FichaInventario'
import QrForm from '../Components/Admin/QR/QrForm'
import { useState } from 'react'


function GenerarQr() {

  const [id, setId] = useState('')
  const link = `http://localhost:5173/producto/${id}`
  console.log(id)
  return (
    <div>
      <AdminNavHome />
      <AdminNavbar />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <QrForm id={id} setId={setId}/>
        <FichaInventario link={link} />
      </div>
    </div>
  )
}

export default GenerarQr