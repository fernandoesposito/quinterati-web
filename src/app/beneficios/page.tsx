"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";

import { useModal } from "@/context/useModal";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";

import { supportText } from "./supportText";

import brazil from "../../../public/brazil.svg"
import quintera_logo from "../../../public/quintera_logo.svg"

export default function Benefits() {
  const { isOpen, setIsOpen } = useModal();
  const path = usePathname()
  return (
    <section id="beneficios" className={`w-screen bg-main lg:px-44 px-6 md:pb-16 pb-7 flex flex-col md:gap-8 gap-2 items-center justify-center ${path === "/beneficios" ? "md:pt-[calc(5rem+78px)] pt-[calc(50px+1.5rem)]" : ""}`}>
      <div className="flex items-center justify-center">
        <Highlight 
          icon={<FaArrowTrendUp />}
          description={supportText.benefits.highlight}
        />
      </div>
      <h2 className="md:font-black font-bold font-roboto md:text-header md:leading-10 text-lg text-center max-sm:max-w-52 text-primary">
        {supportText.benefits.title}
      </h2>
      <div className="md:hidden max-w-64 overflow-visible flex flex-col gap-2 mb-[calc(0.5rem+1rem)]">
        <div className="flex justify-center gap-2">
          <Highlight description="LGPD" />
          <Highlight description="Infraestrutura" />
          <Highlight description="Cibersegurança" />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-[4.5rem] flex flex-col gap-6">
        <div className="md:w-96 p-7 md:px-10 md:py-7 flex flex-col max-sm:items-center rounded-2xl border border-gray-300">
          <Image src={quintera_logo} alt="quinterati logo"/>
          <summary className="list-none md:mt-3 mt-4 md:mb-4 mb-8 text-center md:text-left text-gray-500 font-inter font-medium text-md leading-5">
            {supportText.benefits.summary}
          </summary>
          <dl className="flex flex-col gap-2 text-gray-500 font-inter font-medium text-md mr-auto">
            {supportText.benefits.topics.map((topic, index) => (
              <dt className="flex gap-1" key={index}>
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>{topic}</span>
            </dt>
            ))}
          </dl>
          <div className="mt-5">
            <Button 
              text="Entrar em contato"
              icon={<FaWhatsapp />}
              onClick={() => setIsOpen(prevState => !prevState)}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center"> 
          <Image src={brazil} alt="mapa do Brasil"/>
          <div className="md:absolute lg:-right-20 lg:bottom-5 md:bottom-2 mt-6">
            
          </div>
          {/* <div className="absolute lg:-right-24 lg:bottom-20 bottom-1/2">
            <Tag 
              icon={globe}
              description="Em todo o Brasil você
              encontra a excelênica
              da Quintera!"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}