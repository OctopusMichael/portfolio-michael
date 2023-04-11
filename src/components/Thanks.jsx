import React from 'react'
import iconCheked from '../images/icon-complete.svg'

const Thanks = () => {
  const handleClick = () =>{
    location.reload()
  }
  return (
    <>
      <div className='container section-checked'>
        <img  src={iconCheked}/>
        <h1 className='mt-4 text-center'>Enviado</h1>
        <h5 className='text-center'>Te contactare lo mas pronto posible.</h5>
        <button onClick={handleClick} className='btn'> continue </button>
      
      </div>
    </>
  )
}

export default Thanks