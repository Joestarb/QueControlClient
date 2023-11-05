import Axios from 'axios';
import React, { useState } from 'react';

function FormAnadirTrabajadores() {
  const [userData, setUserData] = useState({
    nombre: '',
    contrasenia: '',
    perfil: '',
    telefono: '',
    infoAdicional: '',
    estatus: true, // Puedes establecer un valor predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que el campo "estatus" no esté en blanco
    if (!userData.estatus) {
      alert('El campo "estatus" no puede estar en blanco');
      return;
    }

    try {
      const response = await Axios.post('http://localhost:3000/usuarios', userData);
      // Manejar la respuesta aquí si es necesario
      console.log(response.data);
    } catch (error) {
      // Manejar errores aquí
      console.error(error);
    }
  };

  return (
    <div className='grid place-content-center'>
      <div className='bg-[#AEC5FF]  p-5 w-full'>
        <h1 className='text-white'>Añadir Trabajadores</h1>
      </div>
      <form
        className='flex flex-col bg-white border border-3 pt-3 pb-10 px-28 h-full w-full'
        onSubmit={handleSubmit}
      >
        <label className='my-1' htmlFor="nombre">
          Nombre de Trabajador:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />

        <label className='my-1' htmlFor="contrasenia">
          Contraseña:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="password"
          name="contrasenia"
          value={userData.contrasenia}
          onChange={handleChange}
        />

        <label className='my-1' htmlFor="perfil">
          Perfil:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="text"
          name="perfil"
          value={userData.perfil}
          onChange={handleChange}
        />

        <label className='my-1' htmlFor="telefono">
          Teléfono:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="text"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <label className='my-1' htmlFor="infoAdicional">
          Información adicional:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="text"
          name="infoAdicional"
          value={userData.infoAdicional}
          onChange={handleChange}
        />

        <label className='my-1' htmlFor="estatus">
          Estatus:
        </label>
        <input
          className='w-80 rounded-lg p-1 border-gray-400 border-2'
          type="text"
          name="estatus"
          value={userData.estatus}
          onChange={handleChange}
        />

        <div className='flex justify-center items-center mt-6 gap-4'>
          <button
            className='border-[#2794E3] p-2 rounded-2xl px-8 border text-[#2794E3] hover:bg-[#2794E3] hover:text-white duration-300'
            type="submit"
          >
            Cancelar
          </button>
          <button
            className='bg-[#2794E3] border p-2 px-10 text-white rounded-2xl hover:bg-white hover-border-[#2794E3] hover:text-[#2794E3] duration-300'
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAnadirTrabajadores;
