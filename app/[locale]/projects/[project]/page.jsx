import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Header from "@/app/[locale]/projects/components/header";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { project } = await params;

  const t = await getTranslations(`Project.${project}`);

  return (
    <main>
      <Cursor/>
      <Header/>
      <section className=" responsive-container pt-25 pb-15 space-y-2.5">
        <Link href={"/projects"}>
          <svg 
              width="38" 
              height="38" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              className="stroke-[#7C2D12]">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </Link>
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