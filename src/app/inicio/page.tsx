"use client"

import { useState } from "react";

import Image from "next/image";

import { TbTargetArrow } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { RiFolderLockLine } from "react-icons/ri";
import { FiLock, FiMail } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiGitFork } from "react-icons/pi";

import { Tag } from "@/components/tag";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Orbit } from "@/components/orbit";
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { CookiesModal } from "@/components/cookiesModal";
import { MobileNavbar } from "@/components/mobileNavbar";
import { WhatsAppModal } from "@/components/whatsappModal";

import globe from "../../../public/globe.svg";
import email from "../../../public/email.svg";
import brazil from "../../../public/brazil.svg";
import quintera_logo from "../../../public/quintera_logo.svg";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <>
      { isOpen ? <WhatsAppModal isOpen={isOpen} setIsOpen={setIsOpen}/> : <></>}
      <MobileNavbar />
      <section className="w-screen bg-main lg:px-[4.5rem] px-6 sm:pt-[calc(5rem+78px)] pt-[calc(50px+1.5rem)] flex flex-col">
        <div className="sm:grid sm:grid-cols-2 gap-12"> {/*review gap-12 -> lower it?*/}
          {/* textos */}
          <div className="max-w-xl flex flex-col gap-6 place-items-center sm:place-items-start">
            <Highlight 
              icon={<TbTargetArrow />}
              description="Não existe meia conformidade com a lei"
            />
            <div className="flex justify-center my-6 sm:hidden">
              <Orbit />
            </div>
            <div className="w-fit flex flex-col gap-2 sm:gap-6 place-items-center sm:place-items-start">
              <h1 className="text-secondary sm:font-black font-bold sm:text-left text-center sm:text-header max-sm:max-w-64 text-lg sm:leading-[3rem] leading-6">
                Referência para o setor público em soluções personalizadas na segurança de dados
              </h1>
              <span className="sm:text-subtitle text-gray-500 font-normal text-sm sm:text-left text-center leading-4 sm:max-w-none max-w-72">
                Nossa missão é arrumar sua casa com excelência para estar em conformidade com as mais atuais leis de segurança de dados. 
              </span>
            </div>
          </div>
          {/* animacao */}
          <div className="sm:flex hidden sm:justify-left lg:justify-center">
            <Orbit />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center sm:w-full w-[calc(16rem+1.5rem)] self-center sm:gap-6 gap-3 sm:h-32 sm:px-48 px-5 sm:py-8 py-5 sm:mt-28 mt-6 sm:mb-12 mb-8 rounded-2xl border-white border shadow-md shadow-black/10">
          <h4 className="flex sm:flex-row flex-col items-center font-medium text-gray-500 sm:text-base text-xs sm:leading-5 leading-3 sm:text-left text-center">
            <span className="sm:text-header text-3xl font-black text-primary sm:mr-2 ">1046</span>
            PROJETOS<br/> EXECUTADOS
          </h4>
          <hr className="text-line w-full sm:hidden"/>
          <h4 className="flex sm:flex-row flex-col items-center font-medium text-gray-500 sm:text-base text-xs sm:leading-5 leading-3 sm:text-left text-center sm:border-x border-x-line sm:px-6">
            <span className="sm:text-header text-3xl font-black text-primary sm:mr-2 ">32</span>
            ANOS DE <br/>EXPERIÊNCIA
          </h4>
          <hr className="text-line w-full sm:hidden"/>
          <h4 className="flex sm:flex-row flex-col items-center font-medium text-gray-500 sm:text-base text-xs sm:leading-5 leading-3 sm:text-left text-center">
            <span className="sm:text-header text-3xl font-black text-primary sm:mr-2 ">100%</span>
            PROJETOS<br/> ENTREGUES
          </h4>
        </div>
      </section>
      <section id="beneficios" className="w-screen bg-main sm:px-44 px-6 sm:pb-16 pb-7 flex flex-col sm:gap-8 gap-2 items-center justify-center">
        <div className="flex items-center justify-center">
          <Highlight 
            icon={<FaArrowTrendUp />}
            description="Benefícios exclusivos"
          />
        </div>
        <h2 className="sm:font-black font-bold sm:text-header sm:leading-10 text-lg text-center sm:max-w-none max-w-52 text-primary">
          Por que a Quintera se destaca no mercado?
        </h2>
        <div className="sm:hidden max-w-64 overflow-visible flex flex-col gap-2 mb-[calc(0.5rem+1rem)]">
          <div className="flex justify-center gap-2">
            <Highlight description="TI" />
            <Highlight description="Serviços" />
            <Highlight description="Infraestrutura" />
          </div>
          <div className="flex gap-2 justify-center">
            <Highlight description="LGPD" />
            <Highlight description="Cyber segurança" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-[4.5rem] flex flex-col gap-6">
          <div className="sm:w-96 sm:p-10 p-7 flex flex-col items-center rounded-2xl border border-gray-300">
            <Image src={quintera_logo} alt="quinterati logo" className="ml-auto mr-auto"/>
            <summary className="list-none sm:mt-2 mt-4 sm:mb-5 mb-8 text-center sm:text-left text-gray-500 font-medium text-sm leading-5">
              Nós exergamos a necessidade do 
              setor público por parceiros realmente
              preocupados com a entrega e sustentação
              de seus produtos.
            </summary>
            <dl className="flex flex-col gap-2 text-gray-500 font-medium text-sm mr-auto">
              <dt className="flex gap-1">
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>Consultoria e entendimento</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>Solução personalizada</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>Pagamento em reais</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>Suporte que funciona</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24} color="#001E3B"/>
                <span>Acompanhamento da implantação</span>
              </dt>
            </dl>
          </div>
          <div className="relative flex flex-col items-center"> 
            <Image src={brazil} alt="mapa do Brasil"/>
            <div className="sm:absolute sm:-right-20 sm:bottom-5 mt-6">
              <Button 
                text="Entrar em contato"
                icon={<FaWhatsapp />}
                onClick={() => setIsOpen(prevState => !prevState)}
              />
            </div>
            <div className="absolute sm:-right-24 sm:bottom-20 bottom-1/2">
              <Tag 
                icon={globe}
                description="Em todo o Brasil você
                encontra a excelênica
                da Quintera!"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen sm:bg-white bg-gray-700 sm:px-28 px-6 sm:pt-12 py-8 sm:pb-4 flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center justify-center gap-4 sm:py-6 sm:bg-main sm:border w-full sm:border-gray-300 sm:rounded-2xl sm:shadow-md sm:shadow-black-[.1]">
          <Highlight 
            description="Fortalecimento do setor público"
            icon={<BsTrophy />}
            bgColor="blue"
          />
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="font-black text-header text-center text-support max-w-72 sm:max-w-none leading-9">
              Exclusividade EMX no Brasil
            </h3>
            <summary className="list-none font-medium text-center text-sm sm:max-w-md text-support leading-5 max-w-80">
              Trabalhar em parceria com empresas líderes de mercado facilita o compartilhamento de ideias e experiências, 
              resultando em soluções mais eficientes e 
              adaptadas as necessidades do mercado além de um enorme compromisso com a excelência em suas entregas.
            </summary>
          </div>
        </div>
      </section>
      <section id="contato" className="w-screen bg-white flex flex-col sm:pb-4 sm:pt-8 pt-6 items-center sm:px-36 px-8">
        <Highlight 
            description="Contato do especialista"
            icon={<TbTargetArrow />}
          />
        <h3 className="font-black sm:text-header text-lg leading-6 sm:leading-10 text-center text-primary max-sm:max-w-64 sm:mb-12 sm:mt-4 mt-2 mb-3">Precisa de um contato personalizado?</h3>
        <div className="sm:grid sm:grid-cols-2 sm:gap-9 flex flex-col-reverse ">
          <form className="flex flex-col gap-4 px-3">
            <Input 
              label="Nome"
              placeholder="Qual é o seu nome?"
            />
            <Input 
              label="E-mail"
              placeholder="Seu melhor e-mail"
              type="email"
            />
            <Input 
              label="Telefone/Whatsapp"
              placeholder="(00) 00000-0000"
            />
            <textarea 
              rows={6}
              className="px-5 py-3 border rounded-lg border-gray-400 
              bg-white shadow shadow-black-[0.05] font-normal text-sm text-gray-500
              placeholder:text-sm placeholder:font-normal resize-none"  
              placeholder="Escreva sua mensagem"
            />
            <div className="sm:hidden">
              <Button 
                text="Enviar mensagem"
                style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "192px"}}
                icon={<FiMail />}
              />
            </div>
            <div className="max-sm:hidden">
              <Button 
                text="Enviar mensagem"
                style={{ marginLeft: "auto", marginRight: "auto", width: "100%"}}
              />
            </div>
          </form>
          <Image src={email} alt="email" />
        </div>
        
      </section>
      <section className="w-screen bg-white sm:pb-10 py-10 sm:px-36 px-11 flex flex-col items-center sm:gap-10">
        <Highlight 
          description="Sessão de ajuda por soluções"
          icon={<TbTargetArrow />}
        />
        <h3 className="font-black sm:text-header text-lg max-sm:max-w-64 leading-6 max-sm:mt-2 max-sm:mb-6 text-center text-primary">Veja algumas perguntas frequentes sobre:</h3>
        <div className="sm:grid sm:grid-cols-3 sm:gap-x-16 sm:gap-y-8 flex flex-col max-sm:w-full max-sm:gap-2">
          <Card 
            header="Documentação" 
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial, 
            e na advocacia não é diferente." 
            icon={<TiDocumentText />} 
          />
          <Card 
            header="LGPD" 
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial, 
            e na advocacia não é diferente." 
            icon={<RiFolderLockLine />} 
          />
          <Card 
            header="Cibersegurança"
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial,
             e na advocacia não é diferente."  
            icon={<FiLock />}
          />
          <Card 
            header="TI"
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial,
             e na advocacia não é diferente."  
            icon={<HiOutlineChip />} 
          />
          <Card 
            header="Serviços"
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial,
             e na advocacia não é diferente."  
            icon={<HiOutlineSquare3Stack3D />} 
          />
          <Card 
            header="Infraestrutura"
            content="O planejamento financeiro é uma peça fundamental no quebra-cabeça do sucesso empresarial,
             e na advocacia não é diferente."  
            icon={<PiGitFork style={{ transform: "rotate(90deg)" }}/>}
          />
        </div>
      </section>
      <CookiesModal />
    </>
  )
}