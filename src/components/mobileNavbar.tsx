import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";

export const MobileNavbar = () => {
  return (
    <div className="md:hidden fixed flex justify-between items-center w-screen z-50 bg-white px-14 py-3 text-gray-500 bottom-0">
      <Link href="/inicio" className="flex flex-col items-center text-center gap-1 text-primary">
        <BiHome size={24} />
        <p className="font-semibold text-[0.5rem]">Início</p>
      </Link>
      <Link href="/sobre" className="flex flex-col items-center text-center gap-1">
        <FaRegSmile size={24} />
        <p className="font-semibold text-[0.5rem]">Sobre nós</p>
      </Link>
      <Link href="/solucoes" className="flex flex-col items-center text-center gap-1">
        <TbTargetArrow size={24} />
        <p className="font-semibold text-[0.5rem]">Soluções</p>
      </Link>
      <Link href="/inicio#beneficios" className="flex flex-col items-center text-center gap-1">
        <FaArrowTrendUp size={24} />
        <p className="font-semibold text-[0.5rem]">Benefícios</p>
      </Link>
    </div>
  )
}