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
    <nav className='h-full w-full flex flex-col justify-center items-center min-[805px]:flex-row min-[805px]:justify-between min-[805px]:bg-color60 min-[805px]:z-50 min-[805px]:h-[14%] min-[805px]:fixed'>
          <Image className='w-3/4 h-auto order-2 min-[805px]:w-32 min-[805px]:order-first' src={logo} alt="logo" draggable='false' />
          <button className={`fixed top-0 left-0 ${isToggled ? 'hidden' : ''} cursor-default h-full w-1/2 bg-color60 bg-opacity-30 transform transition-transform duration-500 min-[805px]:hidden`} onClick={handleClick}></button>
            <button onClick={handleClick} className={`fixed z-50 top-[10px] right-[10px] duration-200`}>
        <CgMenuGridR className={`min-[805px]:hidden fixed top-2 right-2 w-8 h-auto ${!isToggled ? 'text-color10' : 'text-color30'} duration-700 hover:text-color10`} />
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
          min-[805px]:w-2/3
          min-[805px]:flex-row
          min-[805px]:justify-between
          min-[805px]:h-full
          min-[805px]:relative
          min-[805px]:translate-x-0
          min-[805px]:bg-transparent
          min-[805px]:order-2
          min-[805px]:text-2xl
          min-[1286px]:w-1/3 
          `
          }>
            <li className='hover:text-color10 duration-300 min-[805px]:w-1/3 min-[805px]:text-center'><a href="#aboutMe" onClick={handleClick}>About me</a></li>
            <li className='hover:text-color10 duration-300 min-[805px]:w-1/3 min-[805px]:text-center'><a href="#skills" onClick={handleClick}>Skills</a></li>
            <li className='hover:text-color10 duration-300 min-[805px]:w-1/3 min-[805px]:text-center'><a href="#contactMe" onClick={handleClick}>contact me</a></li>
          </ul>
        </nav>
  )
}