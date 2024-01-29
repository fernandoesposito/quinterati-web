"use client"

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import { Input } from "./input";
import { Button } from "./button";

import whatsApp from "../../public/wapp.svg";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const WhatsAppModal = ({ isOpen, setIsOpen }: ModalProps) => {    
  return (
    <>
      { isOpen ? 
      <div 
        className="bg-smoke fixed z-40 w-[100%] h-[100%] flex justify-center items-center" 
      >
        <div className="flex flex-col sm:gap-24 gap-14 sm:max-w-2xl w-full sm:p-5 p-6 rounded-xl bg-white z-50">
          <div className="ml-auto text-secondary">
            <IoClose 
              style={{ cursor: "pointer" }} 
              size={30}
              onClick={() => setIsOpen(prevState => !prevState)}
            />
          </div>
          <div className="flex flex-col sm:px-12 sm:gap-11 gap-5">
            <div className="flex flex-col gap-4 text-gray-500">
              <Image src={whatsApp} alt="icone do whatsapp" width={50} height={50}/>
              <div className="flex flex-col gap-2">
                <h2 className="sm:text-4xl font-bold text-xl">
                  Estamos direcionando você
                  para o Whatsapp.
                </h2>
                <span className="sm:text-xl text-sm">
                  Lá nós vamos poder conversar melhor. <br/> Até já!
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:mb-10 max-sm:flex max-sm:flex-col max-sm:gap-7">
              <Input placeholder="Seu nome" />
              <div className="sm:ml-auto max-sm:self-center"> 
              <Button 
                text="Ir para o Whatsapp"
                icon={<FaWhatsapp />}
              />
              </div>
            </div>
          </div>
        </div>
        </div>
        : <></>
      }
      
    </>
    
  )
}