import { useTranslations } from "next-intl";
import Button from "@/components/button";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Arrow from "./arrow";

function Card({content: {projectTitle, projectDesc, projectName, projectLink, projectIMG}}) {
  const t = useTranslations("Projects");
  return (
    <div className="text-center shadow-xl rounded-2xl p-5 space-y-1.5">
        <Image src={projectIMG} alt="project image" width={0} height={0} sizes="100vw" className="w-full h-auto" loading="eager" />
        <h3 className="subtitle">{projectTitle}</h3>
        <p className="text">{projectDesc}</p>
        <div className="flex justify-around">
            <Link className="text-base sm:text-lg md:text-xl leading-relaxed font-Inter text-(--color-secondary) font-semibold hover:text-amber-950 transition-colors duration-600 flex gap-1 md:gap-3 items-center " href={`/projects/${projectName}`}><Arrow/> {t('cardbtn1')}</Link>
            <Button content={{ link: projectLink, text: t('cardbtn2') }} />
        </div>
    </div>
  )
}

export default Card;