import Arrow from "./arrow";
import { useTranslations } from "next-intl";

function Contact(){ 
  const t = useTranslations("Contact");
  return(
    <section id="contact" className="responsive-container h-120 md:h-[90vh] xl:h-[70vh] flex flex-col md:flex-row items-start md:items-baseline justify-center  border-t-4 border-(--color-secondary)">
      <div className="flex flex-col gap-2 pb-6 md:pb-0">
        <h1 className="title">{t("title")}</h1>
        <p className="md:pb-2 text text-(--color-text)">{t("description")}</p>
        <a className="text text-(--color-assistant) font-bold" href="mailto:rafaelsilva039133@gmail.com" target="_blank" rel="noopener noreferrer"> <span className="border-text hover:border-zinc-700 hover:text-zinc-700">rafaelsilva039133@gmail.com</span> </a>
        <a className="text text-(--color-assistant) font-bold " href="https://wa.me/557582986745" target="_blank" rel="noopener noreferrer"> <span className="border-text hover:border-zinc-700 hover:text-zinc-700">(75) 8298-6745</span> </a>
      </div>
      <div className="md:min-w-2/5 flex flex-col items-end">
        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="subtitle pb-2">{t("social")}</h2>
          <a className="text text-(--color-secondary) flex gap-3 items-center" href="https://www.instagram.com/rafael.s_dev/" target="_blank" rel="noopener noreferrer"> <Arrow/> <span className="border-text hover:border-amber-950 hover:text-amber-950">Instagram</span> </a>
          <a className="text text-(--color-secondary) flex gap-3 items-center " href="https://x.com/Rafael_S137" target="_blank" rel="noopener noreferrer"> <Arrow/> <span className="border-text hover:border-amber-950 hover:text-amber-950">X (Twitter)</span> </a>
          <a className="text text-(--color-secondary) flex gap-3 items-center" href="https://www.linkedin.com/in/rafael-silva-7072283a4/" target="_blank" rel="noopener noreferrer"> <Arrow/> <span className="border-text hover:border-amber-950 hover:text-amber-950">Linkedin</span> </a>
          <a className="text text-(--color-secondary) flex gap-3 items-center" href="https://wa.me/557582986745" target="_blank" rel="noopener noreferrer"> <Arrow/><span className="border-text hover:border-amber-950 hover:text-amber-950">WhatsApp</span></a>
        </div>
      </div>
      
    </section>
  )
}

export default Contact;