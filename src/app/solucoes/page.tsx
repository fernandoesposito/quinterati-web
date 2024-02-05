"use client"

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

import { cardsDescription, topics } from "./supportText";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { ProductCard } from "@/components/productCard";

import product_example from "../../../public/product_example.svg";
import { FaqCardMobile } from "@/components/faqCardMobile";
import { MobileCarousel } from "@/components/carousel";
import { CarouselCard } from "@/components/carouselCard";
import { CardDetails } from "@/components/cardDetails";

export default function Solutions() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<number>(0);

  const FilteredCardDetails = () => {
    const [ topic ] = cardsDescription[activeTopicId].filter(card => card.id === selectedId);
    return (
      <>
        {topic ? 
        <CardDetails
          header={topic.header} 
          image={topic.image} 
          type={topic.type} 
          key={topic.id} 
        >
          {topic.expandedText}
        </CardDetails> 
        : <></>}
      </>
    )
  }

    
  

  return (
    <section className="w-screen bg-main md:px-12 px-4 md:pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)] pb-12 flex flex-col items-center">
      <Highlight 
        description="Tudo que você precisa para estar em conformidade com a lei"
        icon={<TbTargetArrow />}
      />
      <h1 className="font-black font-inter md:text-header text-lg md:leading-10 leading-6 max-sm:max-w-64 text-center text-primary md:mt-4 mt-2 md:mb-10 mb-6">
        Selecione o produto que deseja mais informações
      </h1>
      <ul className="flex gap-6 items-start font-roboto font-light text-sm mb-10 max-md:hidden">
        {topics.map((topic, index) => 
          <li 
            key={index}
            className={`hover:cursor-pointer ${activeTopicId === index ? "text-secondary font-semibold" : "text-gray-500"}`}
            onClick={() => {
              setActiveTopicId(index)
              setSelectedId(null)
            }}
          >
            {topic}
          </li>
        )}
      </ul>
      <div className="grid grid-cols-3 gap-6 w-fit mb-14 max-md:hidden">
        { cardsDescription[activeTopicId].map((card, index) => 
          <ProductCard 
            description={card.content}
            header={card.header}
            src={card.image}
            topic={card.type}
            alt=""
            key={index}
            onClick={() => {setSelectedId(index)}}
          />
        )}        
      </div>
      <div className="mb-6">
        <FilteredCardDetails />
      </div>
      <div className="w-full flex flex-col gap-4 md:hidden">
        <FaqCardMobile 
          id={0}
          topic="LGPD"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          <MobileCarousel>
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="LGPD"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="LGPD"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="LGPD"
            />
            
          </MobileCarousel> 
        </FaqCardMobile>
        <FaqCardMobile 
          id={1}
          topic="Cibersegurança"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          <MobileCarousel>
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Cibersegurança"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Cibersegurança"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Cibersegurança"
            />
            
          </MobileCarousel> 
        </FaqCardMobile>
        <FaqCardMobile 
          id={2}
          topic="TI"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          <MobileCarousel>
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="TI"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="TI"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="TI"
            />
            
          </MobileCarousel> 
        </FaqCardMobile>
        <FaqCardMobile 
          id={3}
          topic="Serviços"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          <MobileCarousel>
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Serviços"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Serviços"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Serviços"
            />
            
          </MobileCarousel> 
        </FaqCardMobile>
        <FaqCardMobile 
          id={4}
          topic="Infraestrutura"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        >
          <MobileCarousel>
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Infraestrutura"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Infraestrutura"
            />
            <CarouselCard 
              img={product_example}
              header="Controle de acesso"
              content="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.
  
              - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
              - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
              topic="Infraestrutura"
            />
            
          </MobileCarousel> 
        </FaqCardMobile>
      </div>
      <div className="max-md:hidden">
        <Button 
          text="Entrar em contato"
          icon={<FaWhatsapp/>}
        />
      </div>
    </section>
  )
}