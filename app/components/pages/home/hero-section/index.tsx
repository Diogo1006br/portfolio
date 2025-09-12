'use client'

import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbBrandGithub, TbBrandLinkedin, TbBrandYoutube, TbBrandWhatsapp } from "react-icons/tb";

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/Diogo1006br',
        icon: <TbBrandGithub />
    },
    {
        url: 'www.linkedin.com/in/diogoboegeramuski',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://www.youtube.com/@DraskSounds',
        icon: <TbBrandYoutube />
    },
    {
        url: 'https://wa.me/5547999843169?text=Desenvolvedor%20Front-end',
        icon: <TbBrandWhatsapp />
    }
]

export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[520px] ">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Diogo Boege Ramuski</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Diogo Boege Ramuski e sou desenvolvedor front-end com mais de 2 anos de experiência. Sou apaixonado por tecnologia e busco criar interfaces que unam beleza, usabilidade e alto desempenho, proporcionando experiências marcantes para o usuário. Estou sempre em busca de novos desafios e oportunidades para evoluir profissionalmente.</p>

                    <div className="flex flex-wrap gap-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name="Next.js" />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5  flex-col sm:flex-row">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} className="mt-1" />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blanck"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    width={350}
                    height={404}
                    src="/images/IMG_4915.jpg"
                    alt="foto de perfil do diogo"
                    className="w-[300px] h-[300px] lg:w-[404px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>

        </section>
    )
}