import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/SF_logo.png'

const Index = () => {
  return (
    <Navbar
      fluid={false}
      rounded={false}
      className='bg-gradient-to-r from-black to-[#3533cd] text-white'
    >
      <Navbar.Brand
        href="/"
      >
        <img
          src={Logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <li className='max-lg:p-2 cursor-pointer flex items-center hover:opacity-60'> 
          <Link className="h-full flex justify-center items-center" to="/">Inicio</Link>
        </li>
        <li className='max-lg:p-2 cursor-pointer flex items-center hover:opacity-60'> 
          <Link to="/portafolio" className="h-full flex justify-center items-center">Portafolio</Link>
        </li>
        <li className='max-lg:p-2 cursor-pointer flex items-center hover:opacity-60'> 
          <Link to="/contacto" className="h-full flex justify-center items-center">Contacto</Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Index