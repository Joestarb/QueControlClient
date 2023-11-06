import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QrCodeGen from 'qrcode.react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QrForm({id, setId}) {

    const [formData, setFormData] = useState({
        descripcion_producto: '',
        fecha_creacion: '',
        nombre_producto: '',
        caducidad: '',
        ubicacion_almacen: '',
        imagen_producto: '',
        comentarios: ''
    })
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/productos', formData)
            .then((response) => {
                // Manejar la respuesta del servidor aquí, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página.
                console.log('Respuesta del servidor:', response.data);
                setId(response.data.id)
                toast.success('Nuevo lote creado con exito!!');
            })
            .catch((error) => {
                // Manejar errores, por ejemplo, mostrar un mensaje de error.
                console.error('Error al enviar el formulario:', error);
            });
    };

    useEffect(()=>{
        console.log(id)   
    },[id])
    return (
        <div className='ml-10 '>
            <div className='grid place-content-center'>
                <div className='bg-[#AEC5FF] p-5 w-full shadow-2xl'>
                    <h1 className='text-white'>Generador QR</h1>
                </div>
                <form className='flex flex-col bg-white border border-3 pt-3 pb-10 px-28 h-full w-full' onSubmit={handleSubmit}>
                    <label className='my-1' htmlFor="descripcion_producto">Descripcion del producto: </label>
                    <textarea
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="descripcion_producto"
                        value={formData.descripcion_producto}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="fecha_creacion">Fecha de Creacion: </label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="date"
                        name="fecha_creacion"
                        value={formData.fecha_creacion}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="nombre_producto">Nombre Del Producto: </label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="nombre_producto"
                        value={formData.nombre_producto}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="caducidad">Caducidad: </label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="date"
                        name="caducidad"
                        value={formData.caducidad}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="ubicacion_almacen">Ubicacion del almacen: </label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="ubicacion_almacen"
                        value={formData.ubicacion_almacen}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="imagen_producto">Imagen del producto: </label>
                    <input
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="imagen_producto"
                        value={formData.imagen_producto}
                        onChange={handleChange}
                    />
                    <label className='my-1' htmlFor="comentarios">Comentarios: </label>
                    <textarea
                        className='w-80 rounded-lg p-1 border-gray-400 border-2'
                        type="text"
                        name="comentarios"
                        value={formData.comentarios}
                        onChange={handleChange}
                    />
                    <div className=' flex justify-center items-center mt-6 gap-4'>
                        <button
                            className='border-[#2794E3] p-2 rounded-2xl px-8 border text-[#2794E3] hover:bg-[#2794E3] hover:text-white duration-300'
                        >
                            Cancelar
                        </button>
                        <button
                            className='bg-[#2794E3] border p-2 px-10 text-white rounded-2xl hover:bg-white hover:border-[#2794E3] hover:text-[#2794E3] duration-300'
                            type="submit"
                        >
                            Enviar
                        </button>
                        <div className="App">

    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QrForm;
