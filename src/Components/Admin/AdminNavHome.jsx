import React from 'react'
import Logo from '../../assets/LOGO.png'
function AdminNavHome() {
  return (
    <div className='bg-[#AED7FF] flex w-full  justify-between'>
      <img src={Logo} alt="logo" className=' w-16 m-2' />
      <div className=' grid place-content-center mx-8'>
        <p>User</p>
      </div>
    </div>
  )
}

export default AdminNavHome