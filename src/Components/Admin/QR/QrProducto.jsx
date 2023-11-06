import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QrProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(''); 

  const ObtenerProducto = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/productos/${id}`);
      console.log('Respuesta del servidor:', response.data);
      setProducto(response.data);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  }

  useEffect(() => {
    ObtenerProducto();
  }, [id]);

  return (
    <div>
      {producto && (
        <div>


      <div className='ml-10 '>
            <div className='grid place-content-center'>
                <div className='bg-[#AEC5FF] p-5 w-full shadow-2xl'>
                    <h1 className='text-white'>Informacion de lote {producto.lote}</h1>
                </div>
                <div className='flex flex-col bg-white border border-3 pt-3 pb-10 px-28 h-full w-full'>

                    <h4 className='my-1 font-semibold' >Nombre del producto: </h4> 
                      <p className='w-80 rounded-lg' >{producto.nombre_producto}</p>

                    <h4 className='my-1 font-semibold' >Descripcion del producto: </h4> 
                      <p className='w-80 rounded-lg' >{producto.descripcion_producto}</p>

                    <h4 className='my-1 font-semibold' >Fecha de elaboracion: </h4> 
                      <p className='w-80 rounded-lg' >{producto.fecha_creacion}</p>
                    
                    <h4 className='my-1 font-semibold' >Fecha de caducidad: </h4> 
                      <p className='w-80 rounded-lg' >{producto.caducidad}</p>

                    <h4 className='my-1 font-semibold' >Almacen: </h4> 
                      <p className='w-80 rounded-lg' >{producto.ubicacion_almacen}</p>

                    <h4 className='my-1 font-semibold' >Comentarios: </h4> 
                      <p className='w-80 rounded-lg' >{producto.comentarios}</p>

                    <div className='w-80 my-1'>
                      <h4 className='font-semibold'>Imagen: </h4>
                      <img className='h-full w-full object-cover' src={producto.imagen_producto}/>
                    </div>

                </div>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default QrProducto;
