"use client"

import { FormEvent, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { BsTrophy } from "react-icons/bs";
import { PiGitFork } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { FiLock, FiMail } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiFolderLockLine } from "react-icons/ri";

import { supportText } from "./supportText";
// import { Tag } from "@/components/tag";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
//import { Orbit } from "@/components/orbit";
const Orbit = dynamic(() => import("../../components/orbit"), { ssr: false, loading: () => <Loading />})
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
// import { CookiesModal } from "@/components/cookiesModal";
import { EmailModal } from "@/components/emailModal";
import { MobileNavbar } from "@/components/mobileNavbar";
import { BenefitsCarousel } from "@/components/benefitsCarousel";

// import globe from "../../../public/globe.svg";
import email from "../../../public/email.svg";
import brazil from "../../../public/brazil.svg";
import quintera_bg from "../../../public/quintera_bg.svg";
import quintera_logo from "../../../public/quintera_logo.svg";


export default function Intro() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);  

  const onEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();    
    setIsDisabled(prev => !prev);
    
    if(!nameRef.current?.value && !emailRef.current?.value && !phoneRef.current?.value && !messageRef.current?.value) {
      setError(prevState => !prevState);
      return;
    }
    // chama a api do email
    const response = await fetch("/api/send", {
      method: 'POST',
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        phone: phoneRef.current?.value,
        message: messageRef.current?.value
      })
    })

    const { status } = response;
    
    if(status === 500) {
      setError(prevState => !prevState);
      setIsDisabled(false);
      return
    }
    setIsOpen(prevState => !prevState) 
    setIsDisabled(false); 
    setError(false);  
    
    nameRef!.current!.value = ""
    emailRef!.current!.value = ""
    phoneRef!.current!.value = ""
    messageRef!.current!.value = ""
  }

  return (
    <>
      <MobileNavbar />
      <EmailModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <section className="w-screen bg-main lg:px-[4.5rem] md:px-10 px-6 md:pt-[calc(5rem+78px)] pt-[calc(50px+1.5rem)] flex flex-col max-md:pb-8 max-sm:-mb-8">
        <Image src={quintera_bg} alt="" className="absolute top-0 left-0 z-20 max-md:hidden"/>
        <div className="md:grid md:grid-cols-2 gap-12 place-self-center"> {/*review gap-12 -> lower it?*/}
          {/* textos */}
          <div className="max-w-xl flex flex-col gap-6 place-items-center md:place-items-start">
            {/* <Highlight 
              icon={<TbTargetArrow />}
              description="Não existe meia conformidade com a lei"
            /> */}
            <div className="flex justify-center my-6 md:hidden">
              <Orbit />
            </div>
            <div className="w-fit flex flex-col gap-2 md:gap-6 place-items-center md:place-items-start">
              <h1 className="text-secondary font-roboto md:font-black font-bold md:text-left text-center md:text-header max-sm:max-w-64 text-lg md:leading-[3rem] leading-6 relative z-20">
                {supportText.home.title}
              </h1>
              <h2 className="text-support font-normal font-inter text-md md:text-left text-center leading-4 max-sm:max-w-72">
                {supportText.home.subtitle}
              </h2>
            </div>
          </div>
          {/* animacao */}
          <div className="md:flex hidden md:justify-left lg:justify-center">
            <Orbit />
          </div>
        </div>
        {/* <div className="flex md:flex-row flex-col justify-center items-center md:w-full w-[calc(16rem+1.5rem)] self-center md:gap-6 gap-3 md:h-32 md:px-48 px-5 md:py-8 py-5 md:mt-28 mt-6 md:mb-12 mb-8 rounded-2xl border-white border shadow-md shadow-black/10">
          <h4 className="flex md:flex-row flex-col items-center font-inter font-medium text-gray-500 md:text-base text-xs md:leading-5 leading-3 md:text-left text-center">
            <span className="md:text-header text-3xl font-black text-primary md:mr-2 font-roboto">1046</span>
            PROJETOS<br/> EXECUTADOS
          </h4>
          <hr className="text-line w-full md:hidden"/>
          <h4 className="flex md:flex-row flex-col items-center font-inter font-medium text-gray-500 md:text-base text-xs md:leading-5 leading-3 md:text-left text-center md:border-x border-x-line md:px-6">
            <span className="md:text-header text-3xl font-black text-primary md:mr-2 font-roboto">32</span>
            ANOS DE <br/>EXPERIÊNCIA
          </h4>
          <hr className="text-line w-full md:hidden"/>
          <h4 className="flex md:flex-row flex-col items-center font-inter font-medium text-gray-500 md:text-base text-xs md:leading-5 leading-3 md:text-left text-center">
            <span className="md:text-header text-3xl font-black text-primary md:mr-2 font-roboto">100%</span>
            PROJETOS<br/> ENTREGUES
          </h4>
        </div> */}
      </section>
      <section id="beneficios" className={`w-screen bg-main lg:px-44 px-6 md:pb-16 pb-7 flex flex-col md:gap-8 gap-2 items-center justify-center md:pt-[calc(5rem+1.5rem)] pt-14`}>
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
          {/* <div className="md:absolute lg:-right-20 lg:bottom-5 md:bottom-2 mt-6">
            button
          </div> */}
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
      <BenefitsCarousel />
    </section>
      <section className="w-screen md:bg-white bg-gray-700 md:px-28 px-6 md:pt-12 pt-8 max-md:py-8 flex flex-col gap-12 items-center md:-mb-12">
        <div className="flex flex-col items-center justify-center gap-4 md:py-6 md:bg-main md:border w-full md:border-gray-300 md:rounded-2xl md:shadow-md md:shadow-black-[.1]">
          <Highlight 
            description={supportText.box.hightlight}
            icon={<BsTrophy />}
            bgColor="blue"
          />
          <div className="flex flex-col gap-4 max-sm:gap-2 justify-center items-center">
            <h3 className="font-black font-roboto text-header max-sm:text-3xl text-center text-support max-w-72 md:max-w-none leading-[3rem]">
              {supportText.box.title}
            </h3>
            <summary className="list-none font-inter font-medium text-center max-sm:text-sm md:max-w-3xl text-support leading-5 max-w-80 md:px-10">
              {supportText.box.summary}
            </summary>
          </div>
        </div>
      </section>
      <section id="contato" className="w-screen bg-white flex flex-col md:pb-4 items-center md:px-36 px-8 md:pt-[calc(5rem+18px)] pt-6">
        <Highlight 
            description={supportText.contact.highligh}
            icon={<TbTargetArrow />}
          />
        <h3 className="font-black font-roboto md:text-header text-lg leading-6 md:leading-10 text-center text-primary max-sm:max-w-64 md:mb-12 md:mt-4 mt-2 mb-3">
          {supportText.contact.title}
        </h3>
        <div className="lg:grid lg:grid-cols-2 lg:gap-9 flex flex-col-reverse ">
          <form className="flex flex-col gap-4 px-3"  onSubmit={onEmailSubmit}>
            <Input 
              label="Nome"
              placeholder="Qual é o seu nome?"
              ref={nameRef}
            />
            <Input 
              label="E-mail"
              placeholder="Seu melhor e-mail"
              type="email"
              ref={emailRef}
            />
            <Input 
              label="Telefone/Whatsapp"
              placeholder="(00) 00000-0000"
              type="number"
              ref={phoneRef}
            />
            <textarea 
              rows={6}
              className="px-5 py-3 border rounded-lg border-gray-400 
              bg-white shadow shadow-black-[0.05] font-normal text-md text-gray-500
              placeholder:text-md placeholder:font-normal resize-none"  
              placeholder="Escreva sua mensagem"
              ref={messageRef}
            />
            <div className="md:hidden">
              <Button 
                text="Enviar mensagem"
                style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "192px"}}
                icon={<FiMail />}
                type="submit"
              />
            </div>
            <div className="max-md:hidden">
              <Button 
                text="Enviar mensagem"
                style={{ marginLeft: "auto", marginRight: "auto", width: "100%"}}
                type="submit"
                disabled={isDisabled}
              />
            </div>
            { error ? <p className="text-xs font-roboto text-red-600">Algo deu errado no servidor</p> : <></>}
          </form>
          <Image src={email} alt="email" />
        </div>
      </section>
      <section className="w-screen bg-white md:pb-10 py-10 lg:px-36 px-11 flex flex-col items-center md:gap-10">
        <Highlight 
          description="Sessão de ajuda por soluções"
          icon={<TbTargetArrow />}
        />
        <h3 className="font-black font-roboto md:text-header text-lg max-sm:max-w-64 leading-6 md:leading-10 max-md:mt-2 max-md:mb-6 text-center text-primary">
          {supportText.faq.title}
        </h3>
        <div className="sm:grid sm:grid-cols-3 md:gap-x-16 md:gap-y-8 flex flex-col max-sm:w-full max-md:gap-2">
          <Link href="/faqs">
            <Card 
              header={supportText.faq.topics[0].header}
              content={supportText.faq.topics[0].content}
              icon={<RiFolderLockLine />} 
            />
          </Link>
          <Link href="/faqs">
            <Card 
              header={supportText.faq.topics[1].header}
              content={supportText.faq.topics[1].content}
              icon={<FiLock />}
            />
          </Link>
          <Link href="/faqs">
            <Card 
              header={supportText.faq.topics[2].header}
              content={supportText.faq.topics[2].content}
              icon={<PiGitFork style={{ transform: "rotate(90deg)" }}/>}
            />
          </Link>
        </div>
      </section>
    </>
  )
}
