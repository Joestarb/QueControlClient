import React from 'react'

function QrForm() {
    return (
        <div  className='ml-10 '>
            <div className='grid place-content-center'>

                <div className='bg-[#AEC5FF]  p-5 w-full shadow-2xl'>
                    <h1 className=' text-white'>Generador QR</h1>
                </div>
                <form className='flex flex-col bg-white border border-3 pt-3 pb-10 px-28 h-full w-full'>

                    <label className='my-1' htmlFor="nombre">Descripcion del producto: </label><textarea className='   w-80 rounded-lg p-1 border-gray-400   border-2 ' type="text" name="nombre" />

                    <label className='my-1' htmlFor="Contraseña">Fecha de Creacion: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="date" name="Contraseña" />

                    <label className='my-1' htmlFor="Contraseña">Nombre Del Producto: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="text" name="Contraseña" />

                    <label className='my-1' htmlFor="Disponibilidad">Caducidad: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="date" name="Disponibilidad" />

                    <label className='my-1' htmlFor="Teléfono">Ubicacion del almacen: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="text" name="Teléfono" />

                    <label className='my-1' htmlFor="Informacion adicional">Imagen del producto: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="text" name="Informacion adicional" />
                    
                    <label className='my-1' htmlFor="Informacion adicional">Comentarios: </label><textarea className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="text" name="Informacion adicional" />


                    <div className=' flex justify-center items-center mt-6 gap-4'>
                        <button className=' border-[#2794E3] p-2 rounded-2xl px-8 border text-[#2794E3] hover:bg-[#2794E3]  hover:text-white duration-300 '>Cancelar</button>
                        <button className=' bg-[#2794E3] border p-2 px-10 text-white rounded-2xl hover:bg-white hover:border-[#2794E3]  hover:text-[#2794E3] duration-300'>{" "} Enviar {" "}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default QrForm