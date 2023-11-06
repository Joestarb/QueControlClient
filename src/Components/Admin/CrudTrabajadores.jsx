import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function CrudTrabajadores() {
    const [usuarios, setUsuarios] = useState([]);
    const [deletedUserId, setDeletedUserId] = useState(null);

    useEffect(() => {
        // Función para obtener la lista de usuarios
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3000/usuarios'); // Reemplaza la URL con la ruta correcta de tu endpoint de API
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsuarios();
    }, [deletedUserId]);

    // Función para eliminar un usuario
    const handleDeleteUsuario = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/usuario/${userId}`); // Reemplaza la URL con la ruta correcta de tu endpoint de eliminación de usuarios
            if (response.status === 200) {
                // Marcar el usuario como eliminado
                setDeletedUserId(userId);
            }
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };
    return (
        <div className='h-[80vh] mt-10'>
            <div className='flex justify-around'>
                <div>

                 <Link to="/anadir">

                 <button className='bg-blue-500 rounded-xl p-3 text-white ml-1'>Añadir mas trabajadores +</button>
                    </Link> 
                    
                </div>
            </div>

            <div className='grid place-content-center mt-10'>
                <div>

                    {usuarios.length > 0 ?
                        (<>
                            <table className='w-full border-collapse border border-[#AEC5FF] '>
                                <thead className='bg-[#AEC5FF] text-white w-2'>
                                    <tr>
                                        <th className='sm:w-32 text-white p-2'>ID</th>
                                        <th className='sm:w-32 text-white p-2'>Username</th>
                                        <th className='sm:w-32 text-white p-2'>User Level</th>
                                        <th className='sm:w-32 text-white p-2'>Enable</th>
                                        <th className='sm:w-96 text-white p-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((user) => (
                                        <tr key={user.idUser}>
                                            <td className='border border-gray-300 p-2'>{user.idUser}</td>
                                            <td className='border border-gray-300 p-2'>{user.nombre}</td>
                                            <td className='border border-gray-300 p-2'>{user.perfil}</td>
                                            <td className='border border-gray-300 p-2'>{user.estatus ? 'Yes' : 'No'}</td>
                                            <td className='border border-gray-300 p-2'>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded' onClick={() => handleDeleteUsuario(user.idUser)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>)
                        :
                        (<>
                            <div className=' text-4xl font-bold   text-center '>No hay registros de usuarios.</div>
                        </>)
                    }

                </div>
            </div>
        </div>
    );
}

export default CrudTrabajadores;
