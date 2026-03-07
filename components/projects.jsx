import { useTranslations } from "next-intl";

function Projects(){ 
  const t = useTranslations("Projects");
  
  return(
    <section id="projects" className="fullscreen flex items-center justify-center">
      <h1>{t("title")}</h1>
      <h2>{t("pjt1")}</h2>
      <p>{t("desc1")}</p>
    </section>
  )
}

export default Projects;