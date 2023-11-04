import React from 'react';

function TablaUsuarios({ data, onEditar, onEliminar }) {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="w-full">
                <thead >
                    <tr >
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            User ID
                        </th>
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Username
                        </th>
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            User Level
                        </th>
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Enable
                        </th>
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Editar
                        </th>
                        <th className=" w-48 px-6 py-3 bg-[#AEC5FF] text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((usuario) => (
                        <tr key={usuario.userid} className="bg-white">
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                {usuario.userid}
                            </td>
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {usuario.username}
                            </td>
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {usuario.userlevel}
                            </td>
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {usuario.enable ? 'Sí' : 'No'}
                            </td>
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-blue-500 hover:underline cursor-pointer">
                                <button onClick={() => onEditar(usuario.userid)}>Editar</button>
                            </td>
                            <td className="w-1/6 px-6 py-4 whitespace-no-wrap text-sm leading-5 text-red-500 hover:underline cursor-pointer">
                                <button onClick={() => onEliminar(usuario.userid)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuarios;
