import React from 'react'
import Qrs from "../../../assets/Qr.png"
import Qr from './Qr'

function FichaInventario({link}) {
  const data = link;

  return (
    <div className='grid place-content-center'>
      <div className='flex justify-center'>
        <div className="App">
          <Qr data={data} />
        </div>
      </div>
      </div>
  )
}

export default FichaInventario