import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import CrudTrabajadores from '../Components/Admin/CrudTrabajadores'
import Footer from '../Components/Footer/Footer'

function HomePage() {
    return (
        <div className=' bg-[#FAFBFD]'>
            <AdminNavHome />
            <AdminNavbar/>
            <CrudTrabajadores/>
            <Footer/>
        </div>
    )
}

export default HomePage