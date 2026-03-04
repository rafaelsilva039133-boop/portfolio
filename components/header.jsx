'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Header(){ 

  const [menu, setMenu] = useState(false);

  return(
    <header className="fixed top-0 left-0 w-full bg-red-500 shadow-md z-20 ">

      <button 
        className="absolute top-5.5 right-10 md:right-30"
        onClick={() => setMenu(!menu)}>
        menu
      </button>

      <div className={`
        flex justify-between items-center
        transition-all duration-600 
        ${menu ? "h-screen px-120" : "h-18 px-30"}
      `}>

        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />

        {
          menu 
          ?(<div className="gap-6 pr-20 flex flex-col">
          <Link href={"/#home"}>Inicio</Link>
          <Link href={"/#projects"}>Projetos</Link>
          <Link href={"/#about"}>Sobre</Link>
          <Link href={"/#services"}>Serviços</Link>
          <Link href={"/#plans"}>Planos</Link>
          <Link href={"/#contact"}>Contato</Link>
        </div>)
        :(<div className="gap-6 pr-20 flex">
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