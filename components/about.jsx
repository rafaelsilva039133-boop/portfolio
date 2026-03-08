import { useTranslations } from "next-intl";

function About(){ 
  const t = useTranslations("About");

  return(
    <section id="about" className="fullscreen flex flex-col justify-center responsive-container">
      <div className=" w-3/5">
        <h1 className=" title pb-4">{t("title")}</h1>
        <p className=" text">{t("description")}</p>
      </div>
    </section>
  )
}

export default About;