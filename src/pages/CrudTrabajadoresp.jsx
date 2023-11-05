import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import CrudTrabajadores from '../Components/Admin/CrudTrabajadores'

function CrudTrabajadoresp() {
  return (
    <div>
      <AdminNavHome/>
      <AdminNavbar/>
        <CrudTrabajadores/>
    </div>
  )
}

export default CrudTrabajadoresp