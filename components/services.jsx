import { useTranslations } from "next-intl";
import Button from "./button";

function Services(){ 
  const t = useTranslations("Services");
  return(
    <section id="services" className="fullscreen  responsive-container">
      <h1 className="title text-center ">{t("title")}</h1>
      <div className="flex flex-col md:flex-row justify-between text-center pt-10 pb-10 gap-16">
        <div className="flex flex-col items-center gap-3 m-2 md:m-0 md:w-1/2">
          <img src="/webdesign.svg" alt="Web Design" className="h-40" />
          <h2 className="subtitle">{t("service1")}</h2>
          <p className="text text-(--color-text)">{t("description1")}</p>
          <Button content={{ link: "#contact", text: t("btn") }} />
        </div>
        <div className="flex flex-col items-center gap-3 m-2 md:m-0 md:w-1/2">
          <img src="/webdevelopment.svg" alt="Web Development" className="h-40" />
          <h2 className="subtitle">{t("service2")}</h2>
          <p className="text text-(--color-text)">{t("description2")}</p>
          <Button content={{ link: "#contact", text: t("btn") }} />
        </div>
      </div>
    </section>
  )
}

export default Services;