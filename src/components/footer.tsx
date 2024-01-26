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
        <ul className="flex justify-between text-gray-200 font-semibold gap-8">
          <li>
            <Link href="">Benefícios</Link>
          </li>
          <li>
            <Link href="">Serviços</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="">Contato via e-mail</Link>
          </li>
          <li>
            <Link href="/faqs">FAQ’s</Link>
            </li>
          <li>
            <Link href="/uso">Termos de uso</Link>
            </li>
          <li>
            <Link href="/privacidade">Política de privacidade</Link>
            </li>
          <li>
            <Link href="">Cookies</Link>
            </li> 
        </ul>
      </div>
      <div className="w-full border border-white border-opacity-50 mt-12 mb-8"/>
      <span className="text-white font-normal">© 2024 quintera.com.br | Todos os direitos reservados.</span>
    </footer>
  )
}