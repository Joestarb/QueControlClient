import React from 'react'
import Logo from "../../assets/LOGO.png"
function RecuperarContrasenaForm() {
  return (
    <div className='grid place-content-center h-screen bg-form'>
      <div className=' flex  justify-center'>
        <img className='   shadow-2xl  rounded-full' src={Logo} alt="logo" />
      </div>
      <form className=' bg-white p-14 rounded-2xl flex flex-col gap-5 my-3  shadow-2xl'>
        <div>


          <label htmlFor="" className='font-bold  text-xl'>Nueva Contraseña</label>
          <input type="text" className=' border-4  w-full' />
        </div>

        <div>

          <label htmlFor="" className='font-bold  text-xl mt-2'>Confirmar Contraseña</label>
          <input type="password" className=' border-4  w-full' />
        </div>

        <div>
          <button className=' p-2  my-3   rounded-3xl w-full text-white bg-[#2794E3]'>Cambiar contraseña</button>
        </div>
      </form>
    </div>
  )
}

export default RecuperarContrasenaForm