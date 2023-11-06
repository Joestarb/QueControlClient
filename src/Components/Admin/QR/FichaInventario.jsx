import React, { useEffect } from 'react';
import Qr from './Qr';
import ReactToPrint from 'react-to-print';

function FichaInventario({ link }) {
  const data = link;
  const componentRef = React.useRef();

  useEffect(() => {
    if (link !== 'http://localhost:5173/producto/') {
      console.log(data);
    }
  }, [link]);

  return (
    <div className='grid place-content-center'>
      <div className='flex justify-center'>
        <div className="App">
          {link !== 'http://localhost:5173/producto/' ? (
            <div className='flex flex-col'>
              {console.log(data)}
              <Qr data={data} ref={componentRef} />
              <ReactToPrint
                trigger={() => (
                  <button className="border-2 rounded-md border-[#2794E3] text-[#2794E3]  m-4 px-2 ">Imprimir codigo QR</button>
                )}
                content={() => componentRef.current}
              />
            </div>
          ) : (
            <div>
              <h2>Genera un QR con el form y aparecerá acá</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FichaInventario;
