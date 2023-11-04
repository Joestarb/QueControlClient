import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FormQuesoReceta from '../Components/Admin/QuesosRecetas/FormQuesoReceta'
import Quesos from '../Components/Admin/QuesosRecetas/Quesos'
import Footer from '../Components/Footer/Footer'

function QuesoyReceta() {
    return (
        <div>
            <AdminNavHome />
            <AdminNavbar />
            <div className='girdquesoreceta'>
                <FormQuesoReceta />
                <Quesos />
            </div>
            <Footer/>
        </div>
    )
}

export default QuesoyReceta