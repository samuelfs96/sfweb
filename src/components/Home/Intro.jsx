import React from 'react'
import { NavLink } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg1 bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
        <div className='absolute text-center gap-4 flex flex-col items-center'>
          <h1 className=' text-white p-8 text-3xl text-center font-thin'>Samuel Figueroa, Desarrollador Frontend</h1>
          <NavLink to='/portafolio'>
            <button className='bg-gradient-to-r from-black to-sf-blue text-white pr-6 pl-6 pt-2 pb-2 rounded-full font-light'>
              Ver Portafolio
            </button>
          </NavLink>
        </div>
      </div>
  )
}

export default Intro