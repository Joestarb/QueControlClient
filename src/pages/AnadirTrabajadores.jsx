import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FormAnadirTrabajadores from '../Components/Admin/AnadirTrabajadores/FormAnadirTrabajadores'
import Footer from '../Components/Footer/Footer'

function AnadirTrabajadores() {
    return (
        <div className='bg-[#FAFBF] h-screen w-full'>
            <AdminNavHome />
            <AdminNavbar />
            <FormAnadirTrabajadores/>
            <Footer />
                    </div>
    )
}

export default AnadirTrabajadores