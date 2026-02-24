import Image from "next/image";

function Header(){ 
  return(
    <header className="fixed top-0 left-0 w-full bg-red-500 shadow-md z-10 flex items-center justify-between px-30">
      <Image src={"/logo.svg"} width={50} height={50} alt="logo" />

      <div className=" hidden md:block space-x-3">
        <a href="#home"> Inicio </a>
        <a href="#projects"> Projetos </a>
        <a href="#about"> Sobre </a>
        <a href="#services"> Serviços </a>
        <a href="#contact"> Contato </a>
      </div>
      <button className=" md:hidden">
        menu
      </button>
    </header>
  )
}

export default Header;