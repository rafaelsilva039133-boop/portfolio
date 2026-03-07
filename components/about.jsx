import { useTranslations } from "next-intl";

function About(){ 
  const t = useTranslations("About");

  return(
    <section id="about" className="fullscreen flex items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </section>
  )
}

export default About;