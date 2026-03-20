'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";

function Header(){ 
  const t = useTranslations("Header");
  const [menu, setMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
  };

  const handleMenuLinkClick = (id) => {
    scrollToSection(id);
    toggleMenu();
  }

  return(
    <header className="fixed top-0 left-0 w-full bg-(--color-primary) shadow-md z-20 ">

      <button 
        className="absolute top-5.5 right-10 lg:right-30"
        onClick={() => toggleMenu()}
      >
        {menu ? 
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        :
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        }
      </button>

      <div className={`
        flex justify-between items-center
        transition-[height,padding-left] duration-400 
        ${menu ? "h-screen px-15 sm:px-30 md:px-60 lg:px-80 xl:px-90 2xl:px-110" : "h-18 px-10 lg:px-30"}
      `}>

        <button onClick={() => scrollToSection("home")}><img src={"/logo.svg"} alt="logo" className={` transition-all duration-500 ${menu ? " h-30 sm:h-40 md:h-50" : "h-14"}`} /></button>

        {
          menu 
          ?(<div   className={`
            gap-3 flex flex-col text-header
            transition-all duration-700 text-(--color-secondary)
            ${showLinks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}>
          <button onClick={() => handleMenuLinkClick("home")}>{t("home")}</button>
          <button onClick={() => handleMenuLinkClick("projects")}>{t("projects")}</button>
          <button onClick={() => handleMenuLinkClick("about")}>{t("about")}</button>
          <button onClick={() => handleMenuLinkClick("services")}>{t("services")}</button>
          <button onClick={() => handleMenuLinkClick("contact")}>{t("contact")}</button>
          <div className=" border-t-2">
            <span className=" font-bold text-(--color-secondary) font-Charis text-lg sm:text-xl md:text-2xl leading-snug">{t("language")}</span>
            <div className="flex gap-2 text-(--color-text)">
              <a className=" font-semibold" href="/en">en</a> 
              <>|</>
              <a className=" font-semibold" href="/pt">pt</a>
            </div>
          </div>
          
        </div>)
        :(<div className="gap-6 hidden pr-20 lg:flex text-header text-(--color-secondary)">
          <button onClick={() => scrollToSection("home")}>{t("home")}</button>
          <button onClick={() => scrollToSection("projects")}>{t("projects")}</button>
          <button onClick={() => scrollToSection("about")}>{t("about")}</button>
          <button onClick={() => scrollToSection("services")}>{t("services")}</button>
          <button onClick={() => scrollToSection("contact")}>{t("contact")}</button>
        </div>)
        }
      </div>
    </header>
  )
}

export default Header;