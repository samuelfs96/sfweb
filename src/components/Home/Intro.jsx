import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/SF_logo.png'

const Intro = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
        <div className='bg-bg1 bg-cover h-full w-full' style={{filter: 'brightness(0.3)'}}></div>
        <div className='absolute w-full container'>
          <h1 className=' text-white text-4xl font-thin uppercase mb-2 mt-8 max-lg:flex max-lg:flex-col max-lg:items-center'><span className='text-3xl border-b-2 pb-1 pl-4 max-lg:p-0 max-lg:border-none'>Samuel Figueroa,</span> <span className='font-bold italic max-lg:text-center'>Desarrollador Frontend</span></h1>
          <div className="flex max-md:flex-col max-md:items-center gap-2 justify-center mt-48 max-lg:mt-16">
          <NavLink to='/portafolio'>
            <button style={{
              animation: 'pulse 2s infinite'
            }} className='bg-sf-blue text-white px-10 py-3 uppercase rounded-full text-sm border-2 border-sf-blue'>
              <div>Ver Portafolio</div>
            </button>
          </NavLink>
          <NavLink to='/portafolio'>
            <button style={{
              animation: 'pulse 2s infinite'
            }} className=' text-white px-10 py-3 uppercase rounded-full text-sm border-2 border-sf-blue hover:bg-sf-blue transition-all'>
              <div>Contacto</div>
            </button>
          </NavLink>
          </div>
          <img
          src={Logo}
          className="absolute right-0 bottom-[-180px] w-80 max-lg:relative max-lg:bottom-[-80px] max-lg:w-40"
          alt="SF Logo"
        />
        </div>
      </div>
  )
}

export default Intro