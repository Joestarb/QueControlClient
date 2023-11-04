import React, { useState } from 'react';
import queso from '../../../assets/queso.png';

function Quesos() {
  const [selectedQueso, setSelectedQueso] = useState(null);

  const quesos = [
    {
      id: 1,
      name: "Queso Manchego",
      image: queso,
      ingredients: ["Manzana", "Pepino"],
      description: "El manchego es un queso de la raza Leicester, originario de La Mancha (España)"
    },
    // Agrega más objetos de queso aquí
  ];

  const openModal = (queso) => {
    setSelectedQueso(queso);
  };

  const closeModal = () => {
    setSelectedQueso(null);
  };

  return (
    <div>
      <section>
        <div className='grid grid-cols-2 justify-center gap-10'>
          {quesos.map((item) => (
            <div key={item.id} className='text-center flex flex-col justify-center'>
              <div className='flex justify-center'>
                <img className='w-64 mt-10' src={item.image} alt={item.name} />
              </div>
              <p className='font-bold text-2xl'>{item.name}</p>
              <p>Ingredientes: {item.ingredients.join(', ')}</p>
              <button
                className='p-2 bg-[#2794E3] rounded-2xl text-white'
                onClick={() => openModal(item)}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedQueso && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-[#000] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
          <div className="modal bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <span className="absolute top-2 right-2 cursor-pointer text-xl" onClick={closeModal}>
              &times;
            </span>
            <h2 className="text-2xl font-bold">{selectedQueso.name}</h2>
            <img src={selectedQueso.image} alt={selectedQueso.name} className="w-64 mt-4 mx-auto" />
            <p className="mt-4">Ingredientes: {selectedQueso.ingredients.join(', ')}</p>
            <p className="mt-4">{selectedQueso.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quesos;
