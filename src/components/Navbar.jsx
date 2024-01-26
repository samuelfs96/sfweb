import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/SF_logo.png'

const Index = () => {
  return (
    <div className='sticky top-0 z-10 shadow-md'>
    <Navbar
      fluid={false}
      rounded={false}
      className='bg-gradient-to-r from-black to-sf-blue text-white'
    >
      <Navbar.Brand
        href="/"
      >
        <img
          src={Logo}
          className="mr-3 h-6 sm:h-9"
          alt="SF Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className='text-white hover:bg-transparent' />
      <Navbar.Collapse>
        <li className='max-lg:p-4 cursor-pointer flex items-center hover:opacity-60'> 
          <Link className="h-full flex justify-center items-center uppercase text-xs" to="/">Inicio</Link>
        </li>
        <li className='max-lg:p-4 cursor-pointer flex items-center hover:opacity-60'> 
          <Link to="/portafolio" className="h-full flex justify-center items-center uppercase text-xs">Portafolio</Link>
        </li>
        <li className='max-lg:p-4 cursor-pointer flex items-center hover:opacity-60'> 
          <Link to="/contacto" className="h-full flex justify-center items-center uppercase text-xs">Contacto</Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Index