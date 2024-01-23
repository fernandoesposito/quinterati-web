import Image from "next/image";
import quintera_logo_white from "../../public/quintera_logo_white.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-screen bg-primary pt-16 pb-12 px-28">
      <div className="flex flex-col gap-8">
        <Image src={quintera_logo_white} alt="quinterati logo"/>
        <div className="max-w-80">
          <h4 className="text-gray-200 font-normal leading-5">
            Av. Antartico, 381 cj 56 <br/>
            São Bernardo do Campo - São Paulo <br/>
            CEP: 09726-150
          </h4>
        </div>
        <div className="flex justify-between text-gray-200 font-semibold gap-8">
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
      </div>
      <div className="w-full border border-white border-opacity-50 mt-12 mb-8"/>
      <span className="text-white font-normal">© 2024 quintera.com.br | Todos os direitos reservados.</span>
    </footer>
  )
}