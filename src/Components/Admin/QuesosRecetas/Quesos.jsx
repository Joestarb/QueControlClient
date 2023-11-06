import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Quesos() {
  const [selectedQueso, setSelectedQueso] = useState(null);
  const [quesos, setQuesos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQueso, setEditedQueso] = useState({
    nombreQueso: '',
    procedimientos: '',
    ingrediente_1: '',
    ingrediente_2: '',
    ingrediente_3: '',
    ingrediente_4: '',
    ingrediente_5: '',
    ingrediente_6: '',
    ingrediente_7: '',
    ingrediente_8: '',
    ingrediente_9: '',
    ingrediente_10: '',
  });

  useEffect(() => {
    axios.get('http://localhost:3000/quesos')
      .then((response) => {
        setQuesos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener quesos:', error);
      });
  }, []);

  const openModal = (queso) => {
    setSelectedQueso(queso);
  };

  const closeModal = () => {
    setSelectedQueso(null);
  };

  const startEditing = (queso) => {
    setIsEditing(true);
    setSelectedQueso(queso);
    setEditedQueso(queso);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setSelectedQueso(null);
  };

  const updateQueso = () => {
    axios.put(`http://localhost:3000/queso/${selectedQueso.idQueso}`, editedQueso)
      .then((response) => {
        if (response.status === 200) {
          setQuesos(quesos.map((queso) => (queso.idQueso === selectedQueso.idQueso ? editedQueso : queso)));
          setIsEditing(false);
          setSelectedQueso(null);
        }
      })
      .catch((error) => {
        console.error('Error al editar queso:', error);
      });
  };

  const deleteQueso = (quesoId) => {
    axios.delete(`http://localhost:3000/queso/${quesoId}`)
      .then((response) => {
        if (response.status === 200) {
          setQuesos(quesos.filter((queso) => queso.idQueso !== quesoId));
        }
      })
      .catch((error) => {
        console.error('Error al eliminar queso:', error);
      });
  };

  return (
    <div>
      <section>
        <div className='grid grid-cols-2 justify-center gap-10'>
          {quesos.map((item) => (
            <div key={item.idQueso} className='text-center flex flex-col justify-center'>
              <div className='flex justify-center'>
                <img className='w-64 mt-10' src={item.imagen} alt={item.nombreQueso} />
              </div>
              <p className='font-bold text-2xl'>{item.nombreQueso}</p>
              <p>Ingredientes:  </p>
              <button
                className='p-2 bg-[#2794E3] rounded-2xl text-white'
                onClick={() => openModal(item)}
              >
                Ver más
              </button>
              <button
                className='p-2 bg-red-500 rounded-2xl text-white mt-2'
                onClick={() => deleteQueso(item.idQueso)}
              >
                Eliminar
              </button>
              <button
                className='p-2 bg-green-500 rounded-2xl text-white mt-2'
                onClick={() => startEditing(item)}
              >
                Editar
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedQueso && !isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-[#000] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
          <div className="modal bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <span className="absolute top-2 right-2 cursor-pointer text-xl" onClick={cancelEditing}>
              &times;
            </span>
            <h2 className="text-2xl font-bold">{selectedQueso.nombreQueso}</h2>
            <section className='grid grid-cols-2'>
              <img src={selectedQueso.imagen} alt={selectedQueso.nombreQueso} className="w-64 mt-4 mx-auto" />
              <div className='bg-blue-200 rounded-xl'>
                <h3 className='font-bold text-center'>Ingredientes</h3>
                <div className='grid grid-cols-3 ml-10'>
                  <p className="mt-2"> {selectedQueso.ingrediente_1}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_2}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_3}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_4}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_5}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_6}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_7}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_8}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_9}</p>
                  <p className="mt-2"> {selectedQueso.ingrediente_10}</p>
                </div>
              </div>
            </section>
            <div className='bg-blue-200 rounded-xl mt-4 p-3'>
              <h3 className='font-bold'>Procedimiento</h3>
              <p className="mt-4">{selectedQueso.procedimientos}</p>
            </div>
          </div>
        </div>
      )}

      {selectedQueso && isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-[#000] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
          <div className="modal bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <span className="absolute top-2 right-2 cursor-pointer text-xl" onClick={cancelEditing}>
              &times;
            </span>
            <h2 className="text-2xl font-bold ">Editar Queso</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="nombreQueso" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre del Queso:
                </label>
                <input
                  type="text"
                  id="nombreQueso"
                  name="nombreQueso"
                  value={editedQueso.nombreQueso}
                  onChange={(e) => setEditedQueso({ ...editedQueso, nombreQueso: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="procedimientos" className="block text-gray-700 text-sm font-bold mb-2">
                  Procedimientos:
                </label>
                <textarea
                  type="text"
                  id="procedimientos"
                  name="procedimientos"
                  value={editedQueso.procedimientos}
                  onChange={(e) => setEditedQueso({ ...editedQueso, procedimientos: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 grid   grid-cols-2">
                <label htmlFor="ingrediente_1" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 1:
                </label>
                <input
                  type="text"
                  id="ingrediente_1"
                  name="ingrediente_1"
                  value={editedQueso.ingrediente_1}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_1: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />




                <label htmlFor="ingrediente_1" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 2:
                </label>
                <input
                  type="text"
                  id="ingrediente_2"
                  name="ingrediente_2"
                  value={editedQueso.ingrediente_2}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_2: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_2" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 3:
                </label>
                <input
                  type="text"
                  id="ingrediente_3"
                  name="ingrediente_3"
                  value={editedQueso.ingrediente_3}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_3: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_3" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 4:
                </label>
                <input
                  type="text"
                  id="ingrediente_4"
                  name="ingrediente_4"
                  value={editedQueso.ingrediente_4}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_4: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_4" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 5:
                </label>
                <input
                  type="text"
                  id="ingrediente_5"
                  name="ingrediente_5"
                  value={editedQueso.ingrediente_5}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_5: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_5" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 6:
                </label>
                <input
                  type="text"
                  id="ingrediente_6"
                  name="ingrediente_6"
                  value={editedQueso.ingrediente_6}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_6: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                /><label htmlFor="ingrediente_6" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 7:
                </label>
                <input
                  type="text"
                  id="ingrediente_7"
                  name="ingrediente_7"
                  value={editedQueso.ingrediente_7}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_7: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_7" className="block text-gray-700 text-sm font-bold mb-2">

                  Ingrediente 8:
                </label>
                <input
                  type="text"
                  id="ingrediente_8"
                  name="ingrediente_8"
                  value={editedQueso.ingrediente_8}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_8: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><label htmlFor="ingrediente_8" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 9:
                </label>
                <input
                  type="text"
                  id="ingrediente_9"
                  name="ingrediente_9"
                  value={editedQueso.ingrediente_9}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_9: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label htmlFor="ingrediente_1" className="block text-gray-700 text-sm font-bold mb-2">
                  Ingrediente 10:
                </label>
                <input
                  type="text"
                  id="ingrediente_10"
                  name="ingrediente_10"
                  value={editedQueso.ingrediente_10}
                  onChange={(e) => setEditedQueso({ ...editedQueso, ingrediente_10: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={updateQueso}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>


          </div>
        </div>
      )}
    </div>
  );
}

export default Quesos;
