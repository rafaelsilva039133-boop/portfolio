'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Header(){ 

  const [menu, setMenu] = useState(false);

  return(
    <header className={menu 
    ? "fixed top-0 left-0 w-full h-full bg-red-500 shadow-md z-10 flex items-center justify-between px-30"
    : "fixed top-0 left-0 w-full bg-red-500 shadow-md z-10 flex items-center justify-between px-30"
    }>

      <Image src={"/logo.svg"} width={50} height={50} alt="logo" />

      <div className=" hidden md:block space-x-3">
        <Link href={"/#home"}> Inicio </Link>
        <Link href={"/#projects"}> Projetos </Link>
        <Link href={"/#about"}> Sobre </Link>
        <Link href={"/#services"}> Serviços </Link>
        <Link href={"/plans"}> Planos </Link>
        <Link href={"/#contact"}> Contato </Link>
        
      </div>
      <button  onClick={() => setMenu(!menu)}>
        menu
      </button>
    </header>
  )
}

export default Header;