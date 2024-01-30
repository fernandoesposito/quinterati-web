"use client"

import { useState } from "react";
import Image from "next/image";
import { FaRegSmile, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { WhatsAppModal } from "@/components/whatsappModal";

import quintera_logo from "../../../public/quintera_logo.svg"
import quintera_mobile_logo from "../../../public/splash_3.svg";

export default function Sobre() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      { isOpen ? <WhatsAppModal isOpen={isOpen} setIsOpen={setIsOpen}/> : <></>}
      <section className="w-screen md:bg-main bg-white flex flex-col items-center md:px-[4.5rem] px-6 md:pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)]">
        <Highlight 
          icon={<FaRegSmile />}
          description="Sobre nós"
        />
        <div className="flex flex-col items-center md:gap-6 gap-4 md:mt-4 mt-2 md:mb-10 mb-6">
          <h1 className="md:text-header text-lg text-center font-black font-roboto max-w-3xl max-sm:max-w-64 md:leading-[3rem] text-primary">
            A Quintera é feita de pessoas que querem
            resolver problemas de pessoas
          </h1>
          <Button 
            text="Entrar em contato"
            icon={<FaWhatsapp/>}
            onClick={() => setIsOpen(prevState => !prevState)}
          />
        </div>
        <div className="flex flex-col md:gap-10 gap-6 pb-4">
          <h2 className="text-center font-roboto text-gray-600 font-bold md:text-2xl text-lg">
            “Frase que define a Quintera”
          </h2>
          <div className="grid md:grid-cols-2 md:gap-14 max-md:grid-rows-2 gap-6 font-roboto">
            <p className="text-gray-600 text-sm leading-6"> 
              &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            </p>
            <p className="text-gray-600 text-sm leading-6">
              &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl h-11 px-56 py-36 flex items-center justify-center mb-12 max-sm:hidden">
          <Image src={quintera_logo} alt="logo da quintera ti" width={660} height={166}/>
        </div>
        <div className="w-full p-6 sm:hidden items-center bg-main rounded flex justify-center mb-6">
          <Image src={quintera_mobile_logo} alt="logo da quintera ti" width={211} height={303}/>
        </div>
      </section>
    </>
  )
}