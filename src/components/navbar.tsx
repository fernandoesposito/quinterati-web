"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { GoArrowLeft } from "react-icons/go";
import { useModal } from "@/context/useModal";


import whatsapp from "../../public/wapp.svg";
import quintera_logo from "../../public/quintera_logo.svg";

export const Navbar = () => {
  const pathname = usePathname();   
  const { isOpen, setIsOpen } = useModal();    

  return (
    <nav className="lg:px-[4.5rem] px-6 md:py-6 py-2 md:flex justify-between items-center grid grid-cols-3 w-screen bg-white shadow-lg shadow-black/10 fixed z-30">
        { pathname === "/inicio" || pathname === "/" ? <></> : 
        <Link href="/inicio" className="md:hidden text-secondary font-black">
          <GoArrowLeft size={24}/>
        </Link>}
      <div className="md:flex md:justify-between items-center max-md:col-span-2 max-md:col-start-2 max-md:col-end-3 max-md:justify-self-center relative z-30">
        <Image 
          src={quintera_logo} 
          alt="quintera logo"
          className="lg:mr-14 md:mr-6" 
          width={130}
          height={32} 
        />
        <ul className="md:flex hidden lg:gap-6 md:gap-3 text-sm font-light text-gray-500 font-roboto">
          <li>
            <Link 
              href="/inicio"
              className={`link ${pathname === "/inicio" ? "text-primary font-semibold" : ""}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              href="/beneficios"
              className={`link ${pathname === "/beneficios" ? "text-primary font-semibold" : ""}`}
            >
              Benefícios
            </Link>
          </li>
          <li>
            <Link 
              href="/solucoes"
              className={`link ${pathname === "/solucoes" ? "text-primary font-semibold" : ""}`}
            >
              Soluções
            </Link>
          </li>
          <li>
            <Link 
              href="/sobre"
              className={`link ${pathname === "/sobre" ? "text-primary font-semibold" : ""}`}
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link 
              href="/inicio#contato"
              className={`link ${pathname === "/inicio#contato" ? "text-primary font-semibold" : ""}`}
              >
                Contato via e-mail
              </Link>
          </li>
          <li>
            <Link 
              href="/faqs"
              className={`link ${pathname === "/faqs" ? "text-primary font-semibold" : ""}`}
              >
                FAQ’s
              </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="md:flex-col max-md:hidden text-gray-500 font-poppins">
          <p className="text-end font-light text-[0.625rem]">Contato:</p>
          <h3 className="font-medium text-sm">11 98504-0153</h3>
        </div>
        <Image 
          src={whatsapp} 
          alt="icone do whatsapp" 
          width={36} 
          height={36} 
          className="ml-auto cursor-pointer"
          onClick={() => {setIsOpen(prev => !prev)}}
        />
      </div>
    </nav>
  )
}