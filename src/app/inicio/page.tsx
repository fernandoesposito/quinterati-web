import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { RiFolderLockLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiGitFork } from "react-icons/pi";

import { Tag } from "@/components/tag";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";

import globe from "../../../public/globe.svg";
import email from "../../../public/email.svg";
import brazil from "../../../public/brazil.svg";
import quintera_logo from "../../../public/quintera_logo.svg";

export default function Intro() {
  return (
    <>
      <section className="w-screen bg-main px-28 pt-[calc(5rem+78px)] pb-4 flex flex-col">
        <div>
          {/* textos */}
          <div className="max-w-xl grid gap-6">
            <Highlight 
              icon={<TbTargetArrow />}
              description="Não existe meia conformidade com a lei"
            />
            <h1 className="text-secondary font-black text-header leading-[3rem]">
              Referência para o setor público em soluções personalizadas na segurança de dados
            </h1>
            <span className="text-subtitle font-normal text-sm">
              Nossa missão é arrumar sua casa com excelência para estar em conformidade com as mais atuais leis de segurança de dados. 
            </span>
          </div>
          {/* animacao */}
          <div></div>
        </div>
        <div className="flex justify-center items-center gap-6 h-32 px-48 py-8 mt-28 mb-12 rounded-2xl border-white border shadow-md shadow-black-[.1]">
          <h4 className="flex items-center font-medium text-base leading-5">
            <span className="text-header font-black mr-2">1046</span>
            PROJETOS<br/> EXECUTADOS
          </h4>
          <div className="w-[1px] bg-primary h-full"/>
          <h4 className="flex items-center font-medium text-base leading-5">
            <span className="text-header font-black mr-1">32</span>
            ANOS DE <br/>EXPERIÊNCIA
          </h4>
          <div className="w-[1px] bg-primary h-full"/>
          <h4 className="flex items-center font-medium text-base leading-5">
            <span className="text-header font-black mr-1">100%</span>
            PROJETOS<br/> ENTREGUES
          </h4>
        </div>
        <div className="flex items-center justify-center">
        <Highlight 
          icon={<FaArrowTrendUp />}
          description="Benefícios exclusivos"
        />
        </div>
      </section>
      <section className="w-screen bg-main px-44 pb-16 flex flex-col gap-8 items-center justify-center">
        <h2 className="font-black text-header text-center text-primary">
          Por que a Quintera se destaca no mercado?
        </h2>
        <div className="grid grid-cols-2 gap-[4.5rem]">
          <div className="w-96 p-10 flex flex-col rounded-2xl border border-gray-300">
            <Image src={quintera_logo} alt="quinterati logo"/>
            <summary className="list-none mt-2 mb-5">
              Nós exergamos a necessidade do 
              setor público por parceiros realmente
              preocupados com a entrega e sustentação
              de seus produtos.
            </summary>
            <dl className="flex flex-col gap-2">
              <dt className="flex gap-1">
                <GoCheckCircle size={24}/>
                <span>Consultoria e entendimento</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24}/>
                <span>Solução personalizada</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24}/>
                <span>Pagamento em reais</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24}/>
                <span>Suporte que funciona</span>
              </dt>
              <dt className="flex gap-1">
                <GoCheckCircle size={24}/>
                <span>Acompanhamento da implantação</span>
              </dt>
            </dl>
          </div>
          <div className="relative"> 
            <Image src={brazil} alt="mapa do Brasil"/>
            <Button 
              text="Entrar em contato"
              icon={<FaWhatsapp />}
              style={{ position: "absolute", right: "-80px", bottom: "21px" }}
            />
            <Tag 
              icon={globe}
              description="Em todo o Brasil você
              encontra a excelênica
              da Quintera!"
              style={{ position: "absolute", right: "-100px", bottom: "80px" }}
            />
          </div>
        </div>
      </section>
      <section className="w-screen bg-white px-28 pt-12 pb-4 flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center justify-center gap-4 py-6 bg-main border w-full border-gray-300 rounded-2xl shadow-md shadow-black-[.1]">
          <Highlight 
            description="Fortalecimento do setor público"
            icon={<BsTrophy />}
            bgColor="blue"
          />
          <div className="flex flex-col gap-1 justify-center items-center">
            <h3 className="font-black text-header text-center text-primary">
              Exclusividade EMX no Brasil
            </h3>
            <summary className="list-none font-medium text-center text-sm max-w-md text-support leading-5">
              Trabalhar em parceria com empresas líderes de mercado facilita o compartilhamento de ideias e experiências, 
              resultando em soluções mais eficientes e 
              adaptadas as necessidades do mercado além de um enorme compromisso com a excelência em suas entregas.
            </summary>
          </div>
        </div>
        <Highlight 
          description="Contato do especialista"
          icon={<TbTargetArrow />}
        />
      </section>
      <section className="w-screen bg-white flex flex-col pb-4 items-center">
        <h3 className="font-black text-header text-center text-primary mb-12">Precisa de um contato personalizado?</h3>
        <div className="grid grid-cols-2 gap-9">
          <form className="flex flex-col gap-4">
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
            <Input 
              label="Mensagem"
              placeholder="Deixe uma breve mensagem."
            />
            <Button 
              text="Enviar mensagem"
              style={{ marginLeft: "auto", marginRight: "auto", width: "100%"}}
            />
          </form>
          <Image src={email} alt="email" />
        </div>
        <Highlight 
          description="Sessão de ajuda por soluções"
          icon={<TbTargetArrow />}
        />
      </section>
      <section className="w-screen bg-white pb-10 px-36 flex flex-col items-center gap-10">
        <h3 className="font-black text-header text-center text-primary">Veja algumas perguntas frequentes sobre:</h3>
        <div className="grid grid-cols-3 gap-x-16 gap-y-8">
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
    </>
  )
}