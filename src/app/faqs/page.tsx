"use client"

import { useEffect, useState } from "react";

import { FiLock } from "react-icons/fi";
import { PiGitFork } from "react-icons/pi";
import { RiFolderLockLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

import { FaqCard } from "@/components/faqCard";
import { Highlight } from "@/components/highlight";
import { FaqSection } from "@/components/faqSection";
import { FaqCardMobile } from "@/components/faqCardMobile";
import { topics } from "./supportText";

export default function Faqs() {  
  const [ selectedId, setSelectedId ] = useState<number | null>(null);
  const [ selectedFaqIndex, setSelectedFaqIndex ] = useState<number | null>(null);
  const [ currentTopic, setCurrentTopic ] = useState<string>("");   

  useEffect(() => {
    setSelectedFaqIndex(null)
  }, [currentTopic]);  

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
                id={0}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                icon={<RiFolderLockLine />} 
                title="LGPD" 
                setCurrentTopic={setCurrentTopic}
              />
              <FaqCard 
                id={1}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                icon={<FiLock />} 
                title="Cibersegurança" 
                setCurrentTopic={setCurrentTopic}
              />
              <FaqCard 
                id={2}
                icon={<PiGitFork style={{ transform: "rotate(90deg)" }}/>}
                selectedId={selectedId}
                setSelectedId={setSelectedId} 
                title="Infraestrutura" 
                setCurrentTopic={setCurrentTopic}
              />
            </div>
            {/* Mobile */}
            <div className="w-full flex flex-col gap-2 md:hidden">
              { Object.keys(topics).map((topic, index) => (
                <FaqCardMobile
                  key={index} 
                  index={index}
                  topic={topic}
                  setSelectedId={setSelectedFaqIndex}
                  activeTopicId={selectedId}
                  setActiveTopicId={setSelectedId}
                >
                  <div 
                    className="max-w-3xl max-md:flex max-md:flex-col max-md:gap-2" 
                    key={index}
                  >
                  { topics?.[currentTopic]?.map((topic, index) => 
                  <FaqSection 
                    key={index}
                    answer={topic.answer}
                    question={topic.question}
                    index={index}
                    selectedFaqIndex={selectedFaqIndex}
                    setSelectedFaqIndex={setSelectedFaqIndex}
                  />
                  )}
                  </div>
                </FaqCardMobile> 
              ))}
            </div>
          </div>
        </div>
        { currentTopic ? 
        <div className="flex flex-col gap-6 items-center max-md:hidden">
          <h3 className="text-header font-black font-roboto text-center text-support">Resultados para: 
            <span className="text-header font-roboto front-black text-primary">&nbsp; {currentTopic}</span>
          </h3>
          <div className="max-w-3xl max-md:flex-col max-md:gap-3">
            { topics?.[currentTopic]?.map((topic, index) => 
              <FaqSection 
                answer={topic.answer}
                question={topic.question}
                index={index}
                selectedFaqIndex={selectedFaqIndex}
                setSelectedFaqIndex={setSelectedFaqIndex}
                key={index}
              />
            )}
            
          </div>
        </div> :
        <></>
        }
      </section>
    </>
  )
}