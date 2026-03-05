'use client'

import { useState } from "react";
import Link from "next/link";

function Header(){ 

  const [menu, setMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false)

  function toggleMenu() {
  if (!menu) {
    setMenu(true)

    setTimeout(() => {
      setShowLinks(true)
    }, 300) 
  } else {
    setShowLinks(false)

    setTimeout(() => {
      setMenu(false)
    }, 300)
  }
}

  return(
    <header className="fixed top-0 left-0 w-full bg-red-500 shadow-md z-20 ">

      <button 
        className="absolute top-5.5 right-10 lg:right-30"
        onClick={() => toggleMenu()}>
        menu
      </button>

      <div className={`
        flex justify-between items-center
        transition-[height,padding-left] duration-400 
        ${menu ? "h-screen px-20 sm:px-30 md:px-40 lg:px-60 xl:px-90 2xl:px-110" : "h-18 px-10 lg:px-30"}
      `}>

        <img src={"/logo.svg"} alt="logo" className={` transition-all duration-500 ${menu ? " h-30 sm:h-40 md:h-50" : "h-14"}`} />

        {
          menu 
          ?(<div   className={`
            gap-6 flex flex-col
            transition-all duration-700 
            ${showLinks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}>
          <Link href={"/#home"}>Inicio</Link>
          <Link href={"/#projects"}>Projetos</Link>
          <Link href={"/#about"}>Sobre</Link>
          <Link href={"/#services"}>Serviços</Link>
          <Link href={"/#plans"}>Planos</Link>
          <Link href={"/#contact"}>Contato</Link>
        </div>)
        :(<div className="gap-6 hidden pr-20 md:flex ">
          <Link href={"/#home"}>Inicio</Link>
          <Link href={"/#projects"}>Projetos</Link>
          <Link href={"/#about"}>Sobre</Link>
          <Link href={"/#services"}>Serviços</Link>
          <Link href={"/#plans"}>Planos</Link>
          <Link href={"/#contact"}>Contato</Link>
        </div>)
        }
      </div>
    </header>
  )
}

export default Header;