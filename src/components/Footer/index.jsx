import { Footer } from 'flowbite-react'
import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Logo from '../../img/SF_logo.png'
import './styles.css'
import { Link } from 'react-scroll'

const Index = () => {
  return (
    <Footer container={true} className='sf-footer'>
      <div className="w-full sm:flex sm:items-center sm:justify-between container">
        <div className='flex items-center justify-center'>
        <Link to='inicio'>
          <Footer.Brand
            src={Logo}
            alt="SF Logo"
            className='mr-1'
          />
        </Link>
        <Footer.Copyright
          href="/"
          by="Samuel Figueroa"
          year={2024}
          className='text-white'
        />
        </div>
        <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
          <Footer.LinkGroup className='gap-4'>
            <a href="https://www.linkedin.com/in/samuel-figueroa-salazar-9568b1113/" target="_blank" rel='noreferrer'>
              <img src={Linkedin} alt="linkedin" className='w-10'/>
            </a>
            <a href="https://github.com/samuelfs96" target="_blank" rel='noreferrer'>
              <img src={Github} alt="github" className='w-10'/>
            </a>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  )
}

export default Index