import { useTranslations } from "next-intl";

export default async function ProjectPage({ params }) {
  const { project } = await params;
  const t = useTranslations(`Project.${project}`);

  return (
    <section>
      <h1 className="title">{t('projectTitle')}</h1>
    </section>
  );
}