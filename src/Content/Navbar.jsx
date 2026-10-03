import {useState, useEffect} from 'react'
import logo from '../Images/Logo-Full.png'
import dark from '../Images/Logo-Full-Dark.png'
import { FiMenu } from 'react-icons/fi'
import { Switch } from '@headlessui/react'
import { scrollToSection } from '../utils/scrollTo'

export default function Navbar() {
   const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])
  return (
    <header className="fixed w-full border-b-2 py-2 z-40 backdrop-blur-3xl font-display">
      <div className="flex w-full max-w-full flex-wrap items-center justify-between
       px-[8%] lg:mx-auto lg:max-w-[75%]">
        <div className="div fixed top-4 right-4 z-100 ">
         <Switch 
                checked={darkMode}
                onChange={setDarkMode}
                className="mx-6 group inline-flex h-6 w-11 items-center rounded-full
                 bg-primary-50 transition dark:bg-primary-600"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-primary-100 
                  transition duration-700 dark:translate-x-6"/>
                  </Switch> 
                  </div>
        <img src={darkMode ? dark : logo} width={150} height={50} alt="aria" />
        <FiMenu
          className="block h-6 w-6 cursor-pointer lg:hidden fixed top-4 right-24"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? 'block' : 'hidden'
          } flex w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="text-base text-secondary-700 lg:flex lg:justify-between">
            <li>
              <a
                className="block py-2 font-semibold hover:text-secondary-900 
                md:inline-block lg:px-5  dark:text-primary-200 dark:hover:text-primary-100
                md:mx-2"
                href="#Home"
                onClick={e => {
                  scrollToSection(e, 'Home')
                  setOpen(false)
                }}
              >
                Home
              </a>
             
              <a
                className="block py-2 font-semibold hover:text-secondary-900 
                md:inline-block md:mx-2 lg:px-5 dark:text-primary-200
                dark:hover:text-secondary-100 "
                href="#Contato"
                onClick={e => {
                  scrollToSection(e, 'Contato')
                  setOpen(false)
                }}
              >
                Contato
              </a> 
              
              <a
                className="block py-2 font-semibold  
                rounded-xl 
                hover:z-10 hover:outline bg-primary-500 text-secondary-900 hover:text-primary-100
               dark:hover:text-secondary-200 dark:bg-primary-400  
                 md:inline-block lg:px-5"
                href="#Sim"
                onClick={e => {
                  scrollToSection(e, 'Sim')
                  setOpen(false)
                }}
              >
                Simular
              </a>
              {/* <button className="checkbox block py-2 font-semibold  hover:z-10 
              hover:text-secondary-900 md:inline-block lg:px-5 scroll-smooth
               dark:text-primary-200"
                href="#drkmd"
                onClick={()  => setDarkMode(!darkMode)}
                >
                Off
                </button> */}
              
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  )
}
