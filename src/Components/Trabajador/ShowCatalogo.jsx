import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavHome from '../../Components/Admin/AdminNavHome';
import NavbarTrabajador from './NavbarTrabajador';

function ShowCatalogo() {
    const [selectedQueso, setSelectedQueso] = useState(null);
    const [quesos, setQuesos] = useState([]);

    useEffect(() => {
        // Realizar una solicitud para obtener los quesos desde el servidor
        axios.get('http://localhost:3000/quesos') // Reemplaza la URL con la correcta
            .then((response) => {
                // Cuando la solicitud se completa con éxito, actualiza el estado con los datos de quesos
                setQuesos(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener quesos:', error);
            });
    }, []); // El segundo argumento del useEffect asegura que la solicitud se realice solo una vez al cargar el componente

    const openModal = (queso) => {
        setSelectedQueso(queso);
    };

    const closeModal = () => {
        setSelectedQueso(null);
    };
    const deleteQueso = (quesoId) => {
        // Realizar una solicitud para eliminar el queso con el ID específico
        axios.delete(`http://localhost:3000/queso/${quesoId}`)
            .then((response) => {
                if (response.status === 200) {
                    // Actualizar la lista de quesos después de eliminar el queso con éxito
                    setQuesos(quesos.filter((queso) => queso.idQueso !== quesoId));
                }
            })
            .catch((error) => {
                console.error('Error al eliminar queso:', error);
            });
    };

    return (
        <div>
            <AdminNavHome />
            <NavbarTrabajador />
            {quesos.length > 0 ?
                (<>
                    <section className='h-screen'>
                        <div className='grid  grid-cols-1 sm:grid-cols-4 gap-10'>
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
                </>)
                :
                (
                    <div className=' grid place-content-center'>
                        <div className='h-screen'>
                            <p className='font-bold text-center text-6xl'> No hay recetas añadidas</p>
                        </div>
                    </div>

                )}

        </div>
    );
}

export default ShowCatalogo;
