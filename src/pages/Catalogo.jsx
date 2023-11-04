import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importa el icono de la "x" desde React Icons
import AdminNavHome from '../Components/Admin/AdminNavHome';
import Footer from '../Components/Footer/Footer';
import Queso1 from '../assets/receta1.jpeg';

function Catalogo() {
  const cheeses = [
    {
      id: 1,
      name: 'Queso Cheddar',
      image: Queso1,
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Cheddar...',
    },
    {
      id: 2,
      name: 'Queso Brie',
      image: Queso1, // Reemplaza Queso1 con la ruta correcta de tu imagen
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Brie...',
    },
    {
      id: 1,
      name: 'Queso Cheddar',
      image: Queso1,
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Cheddar...',
    },
    {
      id: 2,
      name: 'Queso Brie',
      image: Queso1, // Reemplaza Queso1 con la ruta correcta de tu imagen
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Brie...',
    },
    {
      id: 1,
      name: 'Queso Cheddar',
      image: Queso1,
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Cheddar...',
    },
    {
      id: 2,
      name: 'Queso Brie',
      image: Queso1, // Reemplaza Queso1 con la ruta correcta de tu imagen
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      procedure: 'Pasos para preparar el queso Brie...',
    },
  ];

  const [selectedCheese, setSelectedCheese] = useState(null);

  const openModal = (cheese) => {
    setSelectedCheese(cheese);
  };

  const closeModal = () => {
    setSelectedCheese(null);
  };

  return (
    <>
      <AdminNavHome />
      <div className=" p-4 flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cheeses.map((cheese) => (
            <div key={cheese.id} className="p-4">
                <h2 className="text-lg font-semibold mt-2 text-center">{cheese.name}</h2>

              <div className=" rounded-lg shadow-lg p-4 ">
                <img
                  src={cheese.image}
                  alt={cheese.name}
                  className="w-full h-40  rounded"
                />

              </div>
              <div className=' flex justify-center'>
                <button
                  className="mt-4  bg-blue-500 text-white px-4 py-2 rounded-full hover-bg-blue-600" onClick={() => openModal(cheese)}
                >
                  Mostrar Receta
                </button>
              </div>

            </div>
          ))}
        </div>


        {selectedCheese && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2">
              <div className="flex justify-end">
                <button
                  className="text-xl text-gray-600 hover:text-red-600"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{selectedCheese.name}</h2>
              <div className="flex">
                <img
                  src={selectedCheese.image}
                  alt={selectedCheese.name}
                  className="w-1/2 h-60 object-cover rounded"
                />
                <div className="ml-4 flex-1"> {/* Agregamos flex-1 para que ocupe el espacio restante */}
                  <div className="bg-blue-200 rounded p-4">
                    <h3 className="text-lg font-semibold">Ingredientes:</h3>
                    <ul>
                      {selectedCheese.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-200 rounded p-4">
                <h3 className="text-lg font-semibold">Procedimiento:</h3>
                <p>{selectedCheese.procedure}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Catalogo;
