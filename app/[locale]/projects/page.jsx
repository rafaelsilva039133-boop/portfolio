import { useTranslations } from "next-intl";
import Card from "@/components/card";
import Header from "@/components/header";
import Cursor from "@/components/cursor";
import Contact from "@/components/contact";

export default function page() {
    const t = useTranslations("Projects");
    const tProject = useTranslations("Project");

    const allKeys = t.raw("featured"); // sem slice

    return (
        <main>
            <Cursor/>
            <Header/>
            <section id="projects" className="flex items-center justify-center flex-col responsive-container pt-30 pb-15 ">
                <h1 className="title">{t("title")}</h1>

                <div className="projects-grid">
                    {allKeys.map((key) => (
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
            </section>
            <Contact/>
        </main>
    );
}