import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { project } = await params;

  const t = await getTranslations(`Project.${project}`);

  return (
    <main>
      <Cursor/>
      <Header/>
      <section className=" responsive-container pt-30 pb-15 space-y-2.5">
        <h1 className="title text-center">{t("projectTitle")}</h1>
        <Image src={t("projectIMG")} width={700} height={400} alt="Project Image" className="mx-auto rounded-2xl" />
        <p className="text">{t("projectDesc1")}</p>
        <p className="text">{t("projectDesc2")}</p>
        <p className="text">{t("projectDesc3")}</p>
        <p className="text">{t("projectDesc4")}</p>
      </section>
      <Contact/>
    </main>
  );
}