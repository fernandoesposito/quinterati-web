import Image from "next/image";
import { FaRegSmile, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";

import quintera_logo from "../../../public/quintera_logo.svg"

export default function Sobre() {
  return (
    <>
      <section className="w-screen bg-main flex flex-col items-center px-[4.5rem] pt-[calc(5rem+32px)]">
        <Highlight 
          icon={<FaRegSmile />}
          description="Sobre nós"
        />
        <div className="flex flex-col items-center gap-6 mt-4 mb-10">
          <h1 className="text-header text-center font-black max-w-3xl">
            A Quintera é feita de pessoas que querem
            resolver problemas de pessoas
          </h1>
          <Button 
            text="Entrar em contato"
            icon={<FaWhatsapp/>}
          />
        </div>
        <div className="flex flex-col gap-10 pb-4">
          <h2 className="text-center text-gray-600 font-bold text-2xl">“Frase que define a Quintera”</h2>
          <div className="grid grid-cols-2 gap-14">
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
        <div className="w-full bg-white rounded-2xl h-11 px-56 py-36 flex items-center justify-center mb-12">
          <Image src={quintera_logo} alt="logo da quintera ti" width={660} height={166}/>
        </div>
      </section>
    </>
  )
}