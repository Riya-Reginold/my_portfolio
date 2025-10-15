"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
     const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu =()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems=[
        {href:"/",label:"Home"},
        {href:"/about",label:"About Me"},
        {href:"/skills",label:"Skills"},
        {href:"/projects",label:"Projects"},
        {href:"/contact",label:"Contact"},

    ]
    
  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-gray-400 dark:bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 shadow-lg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-xl md:text-2xl font-semibold tracking-wide dar:text-gray-100 hover:text-indigo-300 hover:scale-105 transition duration-300">
            Riya Reginold Kalluvalappil
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 bg-white/5 backdrop-blur-md border border-white/10">
            {
              menuItems.map((item) =>{
                const isActive = pathname === item.href;
                return(
                <Link key={item.href} href={item.href} 
                className={` hover:text-primary transition-colors font-medium ${isActive ? 'text-primary':''}`}>
                {item.label}
              </Link>
                )
              })
            }
           
            
          </div>
            <button onClick={toggleTheme} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:text-white  hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {
                  theme==="dark" ?(
                    <><SunIcon className='w-5 h-5'/> Light Mode</>
                  ) : (
                    <><MoonIcon className='w-5 h-5'/> Dark Mode</>
                  )
              }
            </button>
            <button 
              onClick={toggleMobileMenu}
              className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                {
                  isMobileMenuOpen ? (<XMarkIcon className='w-5 h-5'/>): (<Bars3Icon className='w-5 h-5'/>)
                }
            </button>
            
            
        </div>
          {
            isMobileMenuOpen && (
              <div className='md:hidden'>
                <div className='py-4 space-y-4'>
                  {
                    menuItems.map((item, index) => (
                      <div key={index} onClick={toggleMobileMenu}>
                        <Link
                          href={item.href}
                          className="block py-2 hover:text-primary transition-colors">
                          {item.label}
                       </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          )}

      </div>
        
    </nav>


  )
}

export default Navbar