"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import whatsapp from "../../public/wapp.svg";
import quintera_logo from "../../public/quintera_logo.svg";

export const Navbar = () => {
  const pathname = usePathname(); 

  return (
    <nav className="px-[4.5rem] py-6 flex justify-between items-center w-screen bg-white shadow-lg shadow-black/10 fixed z-10">
      <div className="flex justify-between items-center">
        <Image 
          src={quintera_logo} 
          alt="quintera logo"
          className="mr-14" 
          width={130}
          height={32} 
        />
        <ul className="flex gap-6 text-sm font-light text-gray-500">
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
        <div className="flex-col">
          <p className="text-end font-light text-[0.625rem]">Contato:</p>
          <h3 className="font-medium text-sm">11 98504-0153</h3>
        </div>
        <Image 
          src={whatsapp} 
          alt="icone do whatsapp" 
          width={36} 
          height={36} 
        />
      </div>
    </nav>
  )
}