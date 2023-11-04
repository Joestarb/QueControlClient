import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import AdminNavHome from '../Components/Admin/AdminNavHome';

function Index() {
  return (
  <>
  <AdminNavHome/>
    <div className="App flex flex-col items-center h-screen p-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex">
          <button className="p-2 bg-blue-500 text-white rounded-lg flex items-center">
          <span className="mr-2">Add New</span>
          <GrAddCircle />
          </button>
          </div>
        </div>
        
        <table className="w-full table-fixed divide-y rounded-lg divide-gray-200">
          <thead>
            <tr>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Id Lote</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Tipo de queso</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Bodega asignada</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Fecha de elaboración</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Tiempo en añejamiento</th>
              <th className="w-1/7 px-6 py-3 text-left text-xs font-medium bg-blue-300 text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">1</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">Manchego</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">En elaboración</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">B12</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">05/11/2004</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">10 años</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">
                <div className="flex">
                  <AiFillEdit className="text-blue-500 mr-2" />
                  <AiFillDelete className="text-red-500" />
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">1</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">Manchego</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">En elaboración</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">B12</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">05/11/2004</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">10 años</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">
                <div className="flex">
                  <AiFillEdit className="text-blue-500 mr-2" />
                  <AiFillDelete className="text-red-500" />
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">1</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">Manchego</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">En elaboración</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">B12</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">05/11/2004</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">10 años</td>
              <td className="w-1/7 px-6 py-4 whitespace-nowrap">
                <div className="flex">
                  <AiFillEdit className="text-blue-500 mr-2" />
                  <AiFillDelete className="text-red-500" />
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Index;
