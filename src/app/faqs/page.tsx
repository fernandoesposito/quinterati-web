"use client"

import { useState } from "react";

import { FiLock } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiGitFork } from "react-icons/pi";
import { RiFolderLockLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";

import { FaqCard } from "@/components/faqCard";
import { Highlight } from "@/components/highlight";
import { FaqSection } from "@/components/faqSection";
import { FaqCardMobile } from "@/components/faqCardMobile";

export default function Faqs() {  
  const [ selectedId, setSelectedId ] = useState<number | null>(null);
  const [ selectedFaqIndex, setSelectedFaqIndex ] = useState<number | null>(null);
  const [ currentTopic, setCurrentTopic ] = useState<string>("");

  return (
    <>
      <section className="w-screen bg-white lg:px-52 px-10 md:pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)] pb-10 flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <Highlight 
            description="Sessão de ajuda por soluções"
            icon={<TbTargetArrow />}
          />
          <div className="flex flex-col gap-10 max-md:items-center max-md:w-full">
            <h1 className="text-primary font-roboto font-black md:text-header text-lg max-sm:max-w-64 text-center md:leading-10 leading-6">Veja algumas perguntas frequentes sobre:</h1>
            {/* Desktop */}
            <div className="md:grid md:grid-cols-3 md:gap-x-[4.5rem] md:gap-y-6 flex flex-col max-md:hidden">
              <FaqCard
                id={1}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                icon={<RiFolderLockLine />} 
                title="LGPD" 
                setCurrentTopic={setCurrentTopic}
              />
              <FaqCard 
                id={2}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                icon={<FiLock />} 
                title="Cibersegurança" 
                setCurrentTopic={setCurrentTopic}
              />
              <FaqCard 
                id={5}
                icon={<PiGitFork style={{ transform: "rotate(90deg)" }}/>}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                title="Infraestrutura" 
                setCurrentTopic={setCurrentTopic}
              />
            </div>
            {/* Mobile */}
            <div className="w-full flex flex-col gap-2 md:hidden">
              <FaqCardMobile 
                id={0}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="Documentação" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
              <FaqCardMobile 
                id={1}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="LGPD" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
              <FaqCardMobile 
                id={2}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="Cibersegurança" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
              <FaqCardMobile 
                id={3}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="TI" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
              <FaqCardMobile 
                id={4}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="Serviços" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
              <FaqCardMobile 
                id={5}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                topic="Infraestrutura" 
              >
                {
                  <div className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-3">
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={0}
                    question="Como vou acompanhar o desenvolvimento?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={1}
                    question="Qual o valor mínimo de investimento em um projeto?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={2}
                    question="Qual a diferença entre nativo e web responsivo?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={3}
                    question="O que é um MVP?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                  <FaqSection 
                    answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
                    pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
                    para você acompanhar em tempo real a criação do seu produto!"
                    index={4}
                    question="Quais as diferenças entre  low-code, no-code e code?"
                    setSelectedFaqIndex={setSelectedFaqIndex}
                    selectedFaqIndex={selectedFaqIndex}
                  />
                </div>
                }
              </FaqCardMobile>
            </div>
          </div>
        </div>
        { currentTopic ? 
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-header font-black font-roboto text-center text-support max-md:hidden">Resultados para: 
            <span className="text-header font-roboto front-black text-primary">&nbsp; {currentTopic}</span>
          </h3>
          <div className="max-w-3xl max-md:flex-col max-md:gap-3 max-md:hidden">
            <FaqSection 
              answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
              pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
              para você acompanhar em tempo real a criação do seu produto!"
              index={0}
              question="Como vou acompanhar o desenvolvimento?"
              setSelectedFaqIndex={setSelectedFaqIndex}
              selectedFaqIndex={selectedFaqIndex}
            />
            <FaqSection 
              answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
              pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
              para você acompanhar em tempo real a criação do seu produto!"
              index={1}
              question="Qual o valor mínimo de investimento em um projeto?"
              setSelectedFaqIndex={setSelectedFaqIndex}
              selectedFaqIndex={selectedFaqIndex}
            />
            <FaqSection 
              answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
              pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
              para você acompanhar em tempo real a criação do seu produto!"
              index={2}
              question="Qual a diferença entre nativo e web responsivo?"
              setSelectedFaqIndex={setSelectedFaqIndex}
              selectedFaqIndex={selectedFaqIndex}
            />
            <FaqSection 
              answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
              pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
              para você acompanhar em tempo real a criação do seu produto!"
              index={3}
              question="O que é um MVP?"
              setSelectedFaqIndex={setSelectedFaqIndex}
              selectedFaqIndex={selectedFaqIndex}
            />
            <FaqSection 
              answer="Nós temos um gerente dedicado em cada projeto. Você terá acesso a todas as fases de desenvolvimento
              pelo whatsapp, relatórios, reuniões e protótipos. Todas as plataformas tem acesso livre e a qualquer hora
              para você acompanhar em tempo real a criação do seu produto!"
              index={4}
              question="Quais as diferenças entre  low-code, no-code e code?"
              setSelectedFaqIndex={setSelectedFaqIndex}
              selectedFaqIndex={selectedFaqIndex}
            />
          </div>
        </div> :
        <></>
        }
      </section>
    </>
  )
}