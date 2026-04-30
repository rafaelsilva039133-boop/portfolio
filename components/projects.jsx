import { useTranslations } from "next-intl";
import Card from "./card";
import { Link } from "@/i18n/navigation";
import Arrow from "./arrow";

function Projects() {
  const t = useTranslations("Projects");
  const tProject = useTranslations("Project");

  // Coloca -3 depois para aparecer apenas os ultimos 3 projetos
  const featuredKeys = t.raw("featured").slice(0, 2);

  return (
    <section id="projects" className="responsive-container gap-3 md:gap-6 flex flex-col items-center">
      <h1 className="title">{t("title")}</h1>

      <div className="grid lg:grid-cols-2 gap-3 lg:gap-6 2xl:grid-cols-3">
        {featuredKeys.map((key) => (
          <Card
            key={key}
            content={{
              projectTitle: tProject(`${key}.projectTitle`),
              projectDesc: tProject(`${key}.projectDesc`),
              projectName: tProject(`${key}.projectName`),
              projectLink: tProject(`${key}.projectLink`),
              projectIMG: tProject(`${key}.projectIMG`)
            }}
          />
        ))}
      </div>

      <Link className="text-base sm:text-lg md:text-xl leading-relaxed font-Inter text-(--color-secondary) font-semibold hover:text-amber-950 transition-colors duration-600 flex gap-1 md:gap-3 items-center" href={'/projects'}><Arrow/> {t('btn')}</Link>
    </section>
  );
}

export default Projects;