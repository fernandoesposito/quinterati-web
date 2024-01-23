import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import { Input } from "./input";
import { Button } from "./button";

import whatsApp from "../../public/wapp.svg";

export const WhatsAppModal = () => {
  return (
    <div className="flex flex-col gap-24 max-w-2xl p-5 rounded-xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="ml-auto text-secondary">
        <IoClose style={{ cursor: "pointer" }} size={30}/>
      </div>
      <div className="flex flex-col px-12 gap-11">
        <div className="flex flex-col gap-4 text-gray-500">
          <Image src={whatsApp} alt="icone do whatsapp" width={50} height={50}/>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl">
              Estamos direcionando você
              para o Whatsapp.
            </h2>
            <span className="text-xl">
              Lá nós vamos poder conversar melhor. Até já!
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <Input placeholder="Seu nome" />
          <Button 
            text="Ir para o Whatsapp"
            icon={<FaWhatsapp />}
            style={{ marginLeft: "auto"}}
          />
        </div>
      </div>
    </div>
  )
}