import Image from "next/image";
import quintera_logo from "../../public/quintera_logo.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary h-[400px] pt-16 pb-12 px-28">
      <div className="max-w-80">
        <Image src={quintera_logo} alt="quinterati logo"/>
        <h4 className="text-gray-200 font-normal">
          Av. Antartico, 381 cj 56 <br/>
          São Bernardo do Campo - São Paulo <br/>
          CEP: 09726-150
        </h4>
      </div>
      <div className="flex text-gray-200 font-semibold gap-8">
        <Link href="">Home</Link>
        <Link href="">Benefícios</Link>
        <Link href="">Serviços</Link>
        <Link href="">Sobre nós</Link>
        <Link href="">Contato via e-mail</Link>
        <Link href="">FAQ’s</Link>
        <Link href="">Termos de uso</Link>
        <Link href="">Política de privacidade</Link>
        <Link href="">Cookies</Link>
      </div>
    </footer>
  )
}