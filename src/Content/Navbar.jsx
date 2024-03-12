import {useState} from 'react'
import logo from '../Images/Logo-Full.png'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
 
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full border-b-2 py-2 z-40 backdrop-blur-3xl font-display">
      <div className="flex w-full max-w-full flex-wrap items-center justify-between px-[8%] lg:mx-auto lg:max-w-[75%]">
        <img src={logo} width={150} height={50} alt="aria" />

        <FiMenu
          className="block h-6 w-6 cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? 'block' : 'hidden'
          } flex w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="text-base text-primary-700 lg:flex lg:justify-between">
            <li>
              <a
                className="block py-2 font-semibold hover:text-secondary-500 md:inline-block lg:px-5 scroll-smooth"
                href="#Home"
              >
                Home
              </a>
              <a
                className="block py-2 font-semibold hover:text-secondary-500 md:inline-block lg:px-5 scroll-smooth "
                href="#Sim"
              >
                App
              </a>
          
              <a
                className="block py-2 font-semibold hover:text-secondary-500 md:inline-block lg:px-5"
                href="#Contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
