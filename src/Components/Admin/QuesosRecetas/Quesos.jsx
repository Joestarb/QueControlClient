import React, { useState } from 'react';
import queso from '../../../assets/queso.png';

function Quesos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  const quesos = [
    {
      id: 1,
      name: "Queso Manchego",
      image: queso,
      ingredients: ["Manzana", "Pepino"],
    },
    // Agrega más objetos de queso aquí
  ];

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
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Quesos;
