import { useTranslations } from "next-intl";

function About(){ 
  const t = useTranslations("About");

  return(
    <section id="about" className=" flex flex-col justify-center responsive-container py-10">
      <div className=" xl:w-3/5 text-center xl:text-left">
        <h1 className=" title pb-4">{t("title")}</h1>
        <p className=" text">{t("description")}</p>
      </div>
    </section>
  )
}

export default About;