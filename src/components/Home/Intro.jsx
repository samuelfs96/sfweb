import React from 'react'
import { NavLink } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg1 bg-cover h-full w-full' style={{filter: 'brightness(0.3)'}}></div>
        <div className='absolute text-center gap-8 flex flex-col items-center'>
          <h1 className=' text-white p-8 text-3xl text-center font-thin uppercase'>Samuel Figueroa, <span className='font-bold'>Desarrollador Frontend</span></h1>
          <NavLink to='/portafolio'>
            <button style={{
              animation: 'pulse 2s infinite'
            }} className='bg-gradient-to-r from-black to-sf-blue text-white px-10 py-3 rounded-md font-light uppercase'>
              <span>Ver Portafolio</span>
            </button>
          </NavLink>
        </div>
      </div>
  )
}

export default Intro