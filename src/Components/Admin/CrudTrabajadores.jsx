import React, { useState } from 'react';

function CrudTrabajadores() {
    const [usuarios, setUsuarios] = useState([
        {
            userid: 1,
            username: 'Usuario1',
            userlevel: 'Nivel 1',
            enable: true,
        },
        {
            userid: 2,
            username: 'Usuario2',
            userlevel: 'Nivel 2',
            enable: false,
        },
        // Agrega más usuarios según sea necesario
    ]);

    return (
        <div className='h-[80vh] mt-10'>
            <div className='flex justify-around'>
                <div className='flex sm:gap-3'>
                    <p className='m-auto'>User</p>
                    <input type="text" placeholder='Search' className='m-auto block rounded border border-gray-300 px-2 py-1' />
                </div>
                <div>
                    <button className='bg-blue-500 rounded-xl p-3 text-white ml-1'>Add +</button>
                </div>
            </div>

            <div className='grid place-content-center mt-10'>
                <div>
                    <table className='w-full border-collapse border border-[#AEC5FF] '>
                        <thead className='bg-[#AEC5FF] text-white w-2'>
                            <tr>
                                <th className='   sm:w-32  text-white p-2' >ID</th>
                                <th className='   sm:w-32  text-white p-2' >Username</th>
                                <th className='   sm:w-32  text-white p-2' >User Level</th>
                                <th className='   sm:w-32  text-white p-2' >Enable</th>
                                <th className='   sm:w-96  text-white p-2' >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user) => (
                                <tr key={user.userid}>
                                    <td className='border border-gray-300 p-2'>{user.userid}</td>
                                    <td className='border border-gray-300 p-2'>{user.username}</td>
                                    <td className='border border-gray-300 p-2'>{user.userlevel}</td>
                                    <td className='border border-gray-300 p-2'>{user.enable ? 'Yes' : 'No'}</td>
                                    <td className='border border-gray-300 p-2'>
                                        <div className='flex justify-center max-sm:flex-col'>
                                            <button className='bg-blue-500 text-white px-2 py-1 mr-2 rounded'>Edit</button>
                                            <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>

                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CrudTrabajadores;
