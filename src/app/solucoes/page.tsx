"use client"

import { useEffect, useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

import { useModal } from "@/context/useModal";

import { CardProps, cardsDescription, topics } from "./supportText";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { ProductCard } from "@/components/productCard";

import { CardDetails } from "@/components/cardDetails";
import { MobileCarousel } from "@/components/carousel";
import { CarouselCard } from "@/components/carouselCard";
import { FaqCardMobile } from "@/components/faqCardMobile";

export default function Solutions() {
  const { isOpen, setIsOpen } = useModal();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<number | null>(null);

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const width = window.screen.width;
    const mediumScreen = 760;
    width > mediumScreen ? setActiveTopicId(0) : null;
  }, []);

  const FilteredCardDetails = () => {
    const [currentTopic, setCurrentTopic] = useState<CardProps | null>(null);

    useEffect(() => {
      const [topic] = cardsDescription?.[activeTopicId!]?.filter(
        (card: CardProps) => card.id === selectedId
      );
      setCurrentTopic(topic);
    }, []);

    return (
      <>
        {currentTopic ? (
          <CardDetails
            header={currentTopic.header}
            image={currentTopic.image}
            type={currentTopic.type}
            key={currentTopic.id}
          >
            {currentTopic.expandedText}
          </CardDetails>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <section className="w-screen bg-main md:px-12 px-4 md:pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)] pb-12 flex flex-col items-center">
      <Highlight
        description="Tudo que você precisa para estar em conformidade com a lei"
        icon={<TbTargetArrow />}
      />
      <h1 className="font-black font-inter md:text-header text-lg md:leading-10 leading-6 max-sm:max-w-64 text-center text-primary md:mt-4 mt-2 md:mb-10 mb-6">
        Selecione o produto que deseja mais informações
      </h1>
      <ul className="flex gap-6 items-start font-roboto font-light text-sm mb-10 max-md:hidden cursor-pointer">
        {topics.map((topic, index) => (
          <li
            key={index}
            className={`hover:cursor-pointer ${
              activeTopicId === index
                ? "text-secondary font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTopicId(index);
              setSelectedId(null);
            }}
          >
            {topic}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-6 w-fit mb-14 max-md:hidden">
        {cardsDescription?.[activeTopicId!]?.map(
          (card: CardProps, index: number) => (
            <ProductCard
              description={card.content}
              header={card.header}
              src={card.image}
              topic={card.type}
              alt=""
              key={index}
              onClick={() => {
                setSelectedId(index);
                scrollToSection();
              }}
            />
          )
        )}
      </div>
      <div className="w-full flex flex-col gap-4 md:hidden">
        {topics.map((topic, index) => (
          <FaqCardMobile
            index={index}
            topic={topic}
            setSelectedId={setSelectedId}
            key={index}
            activeTopicId={activeTopicId}
            setActiveTopicId={setActiveTopicId}
          >
            <MobileCarousel>
              {cardsDescription?.[activeTopicId!]?.map(
                (card: CardProps, index: number) => (
                  <CarouselCard
                    key={index}
                    img={card.image}
                    topic={card.type}
                    header={card.header}
                    content={card.content}
                    onClick={() => {
                      setSelectedId(index);
                      scrollToSection();
                    }}
                  />
                )
              )}
            </MobileCarousel>
          </FaqCardMobile>
        ))}
      </div>
      {selectedId !== null ? (
        <div className="mb-6 max-md:mt-8" ref={sectionRef}>
          <FilteredCardDetails />
        </div>
      ) : (
        <></>
      )}
      <div className="max-md:hidden">
        <Button
          text="Entrar em contato"
          icon={<FaWhatsapp />}
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </div>
    </section>
  );
}