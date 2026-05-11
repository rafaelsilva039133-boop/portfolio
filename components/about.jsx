import { useTranslations } from "next-intl";

function About(){ 
  const t = useTranslations("About");

  return(
    <section id="about" className=" flex flex-col items-center responsive-container py-20">
      <div className=" xl:w-[60%] text-center space-y-1 ">
        <h1 className=" title pb-1">{t("title")}</h1>
        <p className=" text">{t("description1")}</p>
        <p className=" text">{t("description2")}</p>
      </div>
    </section>
  )
}

export default About;