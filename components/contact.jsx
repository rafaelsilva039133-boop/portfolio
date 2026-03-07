import { useTranslations } from "next-intl";

function Contact(){ 
  const t = useTranslations("Contact");
  return(
    <section id="contact" className="fullscreen flex items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </section>
  )
}

export default Contact;