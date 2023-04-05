"use client"

import { useState } from "react"
import Image from "next/image"
import logo from '../../public/logo.png'
import { Playfair_Display, Open_Sans, Roboto_Serif } from "@next/font/google"
import { CgMenuGridR } from "react-icons/cg";

const headerFont = Roboto_Serif({
    subsets: ['latin'],
    variable: "--font-robotoSerif"
  })

const accentFont = Open_Sans({
  subsets: ['latin'],
    variable: "--font-openSans"
})

export default function NavBar () {
      
    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
    setIsToggled(!isToggled);

    let ul = document.querySelector('ul');
    let shorthand = ul.classList;

    if (isToggled) { 
    shorthand.remove('false'); 
    shorthand.remove('translate-x-[400px]');
    shorthand.add('true');
    } 
    else {
    shorthand.remove('true');
    shorthand.add('translate-x-[400px]');
    shorthand.add('false');
    }
  }

  return (
    <nav className='h-full w-full flex flex-col justify-center items-center min-[805px]:hidden '>
          <Image className='w-3/4 h-auto order-2' src={logo} alt="logo" draggable='false' />
          <button className={`fixed top-0 left-0 ${isToggled ? 'hidden' : ''} cursor-default h-full w-1/2 bg-color60 bg-opacity-30 transform transition-transform duration-500`} onClick={handleClick}></button>
            <button onClick={handleClick} className={`fixed z-50 top-[10px] right-[10px] duration-200`}>
        <CgMenuGridR className={`fixed top-2 right-2 w-8 h-auto ${!isToggled ? 'text-color10' : 'text-color30'} duration-700 hover:text-color10`} />
        </button>
          <ul className={
          `${headerFont.className} 
          fixed 
          h-screen 
          w-1/2 
          transition-all 
          translate-x-[400px] 
          false 
          z-40 
          top-0
          right-0
          bg-color60shade
          bg-opacity-100
          flex
          flex-col
          justify-center
          items-center
          gap-y-32
          text-3xl
          capitalize
          `
          }>
            <li className='hover:text-color10 duration-300'><a href="#aboutMe" onClick={handleClick}>About me</a></li>
            <li className='hover:text-color10 duration-300'><a href="#skills" onClick={handleClick}>Skills</a></li>
            <li className='hover:text-color10 duration-300'><a href="#contactMe" onClick={handleClick}>contact me</a></li>
          </ul>
        </nav>
  )
}