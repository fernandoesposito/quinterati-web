"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import whatsapp from "../../public/wapp.svg";
import quintera_logo from "../../public/quintera_logo.svg";

export const Navbar = () => {
  const pathname = usePathname(); 

  return (
    <nav className="sm:px-[4.5rem] px-7 sm:py-6 py-2 sm:flex justify-between items-center grid grid-cols-3 w-screen bg-white shadow-lg shadow-black/10 fixed z-20">
      <div className="sm:flex sm:justify-between items-center col-span-2">
        <Image 
          src={quintera_logo} 
          alt="quintera logo"
          className="sm:mr-14 ml-auto" 
          width={130}
          height={32} 
        />
        <ul className="sm:flex hidden gap-6 text-sm font-light text-gray-500">
          <li>
            <Link 
              href="/inicio"
              className={`link ${pathname === "/inicio" ? "text-primary" : ""}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              href="/beneficios"
              className={`link ${pathname === "/beneficios" ? "text-primary" : ""}`}
            >
              Benefícios
            </Link>
          </li>
          <li>
            <Link 
              href="/produtos"
              className={`link ${pathname === "/produtos" ? "text-primary" : ""}`}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link 
              href="/sobre"
              className={`link ${pathname === "/sobre" ? "text-primary" : ""}`}
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link 
              href="/contato"
              className={`link ${pathname === "/contato" ? "text-primary" : ""}`}
              >
                Contato via e-mail
              </Link>
          </li>
          <li>
            <Link 
              href="/faqs"
              className={`link ${pathname === "/faqs" ? "text-primary" : ""}`}
              >
                FAQ’s
              </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="sm:flex-col hidden">
          <p className="text-end font-light text-[0.625rem]">Contato:</p>
          <h3 className="font-medium text-sm">11 98504-0153</h3>
        </div>
        <Image 
          src={whatsapp} 
          alt="icone do whatsapp" 
          width={36} 
          height={36} 
          className="ml-auto"
        />
      </div>
    </nav>
  )
}