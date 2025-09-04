import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"


export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="/images/image.png"
                    alt="GIDF"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50 ">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    GIDF
                </h3>

                <p className="text-gray-400 my-6">
                    O GDFI é uma plataforma inovadora destinada a otimizar o gerenciamento de inspeções de infraestrutura urbana, focada na eficiência e qualidade. O sistema foi projetado para engenheiros civis, permitindo a coleta de dados, análises detalhadas e geração de relatórios de inspeção com alta precisão. A plataforma combina uma interface web intuitiva com uma API robusta, garantindo agilidade e consistência nos processos de inspeção, além de facilitar o acesso a dados e informações críticas para tomadas de decisão.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>

                <Link
            </div>
        </div>
    )
}