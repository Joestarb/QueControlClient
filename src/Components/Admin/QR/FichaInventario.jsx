import React, { useEffect } from 'react'

import Qr from './Qr'

function FichaInventario({link}) {
  const data = link;

  useEffect(()=>{
      if(link !== 'http://localhost:5173/producto/'){
        console.log(data)
      }
  },[link])

  return (
    <div className='grid place-content-center'>
      <div className='flex justify-center'>
        <div className="App">
        
        {link !== 'http://localhost:5173/producto/' ? (
          <div>
            {console.log(data)}
            <Qr data={data} />
          </div>
        ) : (
          <div>
            <h2>Genera un QR con el form y aparecerá acá</h2>
          </div>
)}

        </div>
      </div>
      </div>
  )
}

export default FichaInventario