import React from 'react'

function FormQuesoReceta() {
    return (
        <div className=''>
            <div className='grid place-content-center'>
                <div className='bg-[#AEC5FF]  p-5 w-full'>
                    <h1 className=' text-white'>Añadir Queso</h1>
                </div>
                <form className='flex flex-col'>

                    <label className='my-1' htmlFor="nombre">Nombre del queso: </label><input className='   w-80 rounded-lg p-1 border-gray-400   border-2 ' type="text" name="nombre" />

                    <label className='my-1' htmlFor="ingredientes">ingredientes: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="text" name="ingredientes" />

                    <button className='my-3 bg-[#2794E3] w-full border  text-white rounded-2xl hover:bg-white hover:border-[#2794E3]  hover:text-[#2794E3] duration-300 text-4xl'>{" "} + {" "}</button>

                    <label htmlFor="">Procedimiento de Elaboracion</label> <textarea className='border-2 border-gray-200 ' name="" id="" cols="30" rows="10"></textarea>

                    <label className='my-1' htmlFor="Imagen">Imagen: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="file" name="Imagen" />

                    <label htmlFor="">Estado</label>
                    <select name="" id="" className=' p-2 mt-2   border-2 border-gray-400 '>
                        <option value="">Produccion</option>
                        <option value="">Desabilitado</option>
                    </select>

                    <div className=' flex justify-center items-center mt-6 gap-4'>
                        <button className=' border-[#2794E3] p-2 rounded-2xl px-8 border text-[#2794E3] hover:bg-[#2794E3]  hover:text-white duration-300 '>Cancelar</button>
                        <button className=' bg-[#2794E3] border p-2 px-10 text-white rounded-2xl hover:bg-white hover:border-[#2794E3]  hover:text-[#2794E3] duration-300'>{" "} Enviar {" "}</button>
                    </div>

                    <label className='my-1' htmlFor="Comentarios">Comentarios: </label><input className='   w-80 rounded-lg p-1  border-gray-400   border-2 ' type="textfield" name="Comentarios" />


                </form>
            </div>

            <div></div>

        </div>
    )
}

export default FormQuesoReceta