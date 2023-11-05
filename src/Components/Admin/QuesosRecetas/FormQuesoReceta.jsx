import axios from 'axios';
import React, { useState } from 'react';

function FormQuesoReceta() {
    const [formData, setFormData] = useState({
        nombreQueso: '',
        ingrediente_1: '',
        ingrediente_2: '',
        ingrediente_3: '',
        ingrediente_4: '',
        ingrediente_5: '',
        ingrediente_6: '',
        ingrediente_7: '',
        ingrediente_8: '',
        ingrediente_9: '',
        ingrediente_10: '',

        procedimientos: '',
        imagen: null,
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/quesos', formData);
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar la solicitud POST:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    return (
        <div>
            <div className='grid place-content-center'>
                <div className='bg-[#AEC5FF] p-5 w-full'>
                    <h1 className='text-white'>Añadir Queso</h1>
                </div>
                <form className='flex flex-col' onSubmit={handleFormSubmit}>
                    <label className='my-1' htmlFor="nombreQueso">Nombre del queso:</label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="nombreQueso"
                        onChange={handleInputChange} // Agregar onChange para actualizar el estado
                    />

                        <label className='my-1' htmlFor="ingrediente_1">Ingredientes:</label>
                    <div className=' grid  grid-cols-3 gap-2'>
                        <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_1"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />
                        <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_2"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_3"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_4"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_5"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_6"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_7"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_8"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_9"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />  <input
                            className='w-32 rounded-lg p-1 border-gray-400 border-2'
                            placeholder='Ingrediente'
                            type="text"
                            name="ingrediente_10"
                            onChange={handleInputChange} // Agregar onChange para actualizar el estado
                        />
                    </div>


                    <label htmlFor="procedimientos">Procedimiento de Elaboración</label>
                    <textarea
                        className='border-2 border-gray-200'
                        name="procedimientos"
                        id="procedimientos"
                        cols="30"
                        rows="10"
                        onChange={handleInputChange} // Agregar onChange para actualizar el estado
                    ></textarea>

                    <label className='my-1' htmlFor="imagen">Imagen:</label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="file"
                        name="imagen"
                        onChange={handleInputChange} // Agregar onChange para actualizar el estado
                    />

                    <button
                        className='bg-[#2794E3] border p-2 px-10 text-white rounded-2xl hover:bg-white hover:border-[#2794E3] hover:text-[#2794E3] duration-300'
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormQuesoReceta;
