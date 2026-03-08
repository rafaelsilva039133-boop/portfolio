'use client'

import { useState } from "react";
import {Link} from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function Header(){ 
  const t = useTranslations("Header");
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
    <header className="fixed top-0 left-0 w-full bg-(--color-primary) shadow-md z-20 ">

      <button 
        className="absolute top-5.5 right-10 lg:right-30"
        onClick={() => toggleMenu()}>
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
      </button>

      <div className={`
        flex justify-between items-center
        transition-[height,padding-left] duration-400 
        ${menu ? "h-screen px-15 sm:px-30 md:px-60 lg:px-80 xl:px-90 2xl:px-110" : "h-18 px-10 lg:px-30"}
      `}>

        <Link href={"/#home"}><img src={"/logo.svg"} alt="logo" className={` transition-all duration-500 ${menu ? " h-30 sm:h-40 md:h-50" : "h-14"}`} /></Link>

        {
          menu 
          ?(<div   className={`
            gap-3 flex flex-col text
            transition-all duration-700 
            ${showLinks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}>
          <Link href={"/#home"}>{t("home")}</Link>
          <Link href={"/#projects"}>{t("projects")}</Link>
          <Link href={"/#about"}>{t("about")}</Link>
          <Link href={"/#services"}>{t("services")}</Link>
          <Link href={"/#plans"}>{t("plans")}</Link>
          <Link href={"/#contact"}>{t("contact")}</Link>
          <div className=" border-t-2">
            <span className=" font-bold text-(--color-secondary) font-Charis text-lg sm:text-xl md:text-2xl leading-snug">{t("language")}</span>
            <div className="flex gap-2">
              <a className=" font-semibold" href="/en">en</a> 
              <>|</>
              <a className=" font-semibold" href="/pt">pt</a>
            </div>
          </div>
          
        </div>)
        :(<div className="gap-6 hidden pr-20 lg:flex text">
          <Link href={"/#home"}>{t("home")}</Link>
          <Link href={"/#projects"}>{t("projects")}</Link>
          <Link href={"/#about"}>{t("about")}</Link>
          <Link href={"/#services"}>{t("services")}</Link>
          <Link href={"/#plans"}>{t("plans")}</Link>
          <Link href={"/#contact"}>{t("contact")}</Link>
        </div>)
        }
      </div>
    </header>
  )
}

export default Header;