import { useTranslations } from "next-intl";

function Plans(){ 
  const t = useTranslations("Plans");
  return(
    <section id="plans" className="fullscreen flex items-center justify-center">
      <h1>{t("title")}</h1>
      <h2>{t("plan1")}</h2>
      <p>{t("description1")}</p>
      <h2>{t("plan2")}</h2>
      <p>{t("description2")}</p>
      <h2>{t("plan3")}</h2>
      <p>{t("description3")}</p>
    </section>
  )
}

export default Plans;