import { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { IoClose } from "react-icons/io5";

import email from "../../public/email.svg";

interface EmailModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const EmailModal = ({ isOpen, setIsOpen }: EmailModalProps) => {
  return (
    <>
      { isOpen ? 
        <div 
          className="bg-smoke fixed z-40 w-[100%] h-[100%] flex justify-center items-center max-md:px-5" 
        >
        <div className="flex flex-col items-center max-w-2xl p-5 rounded-xl bg-white max-md:w-full">
          <div className="ml-auto text-secondary">
                <IoClose 
                  style={{ cursor: "pointer" }} 
                  size={30}
                  onClick={() => setIsOpen(prevState => !prevState)}
                />
              </div>
          <Image src={email} alt="imagem personalizada de email" height={353} width={353}/>
          <div className="lg:px-20">
            <h2 className="font-semibold font-inter text-xl text-center text-primary">
              Mensagem enviada com sucesso!
            </h2>
            <p className="leading-6 text-center font-roboto text-support md:px-10">
              Em breve um de nossos especialistas entrará
              em contato para entender a sua demanda.
            </p>
          </div>
        </div>
        </div> : <></>
      }
    </>
    
  )
}
