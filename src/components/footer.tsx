import Image from "next/image";
import quintera_logo_white from "../../public/quintera_logo_white.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
    <footer className="w-screen bg-primary pt-16 pb-12 px-28 max-sm:px-10 max-sm:py-8">
      <div className="flex flex-col gap-8 max-sm:items-center max-sm:pb-10">
        <Image src={quintera_logo_white} alt="quinterati logo"/>
        <div className="max-w-80">
          <h4 className="text-gray-200 font-normal leading-5 max-sm:text-center max-sm:text-sm">
            Av. Antartico, 381 cj 56 <br/>
            São Bernardo do Campo - São Paulo <br/>
            CEP: 09726-150
          </h4>
        </div>
        <ul className="flex max-sm:flex-col justify-between text-gray-200 font-semibold gap-8 max-sm:mr-auto max-sm:gap-3 max-sm:text-sm">
          <p className="sm:hidden text-gray-400 mb-1">Mapa do site</p>
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
          <p className="sm:hidden text-gray-400 mb-1 mt-10">Legal</p>
          <li>
            <Link href="/uso">Termos de uso</Link>
            </li>
          <li>
            <Link href="/privacidade">Política de privacidade</Link>
            </li>
          <li>
            <Link href="">
              <span className="sm:hidden">Política de </span>
              Cookies
            </Link>
          </li> 
        </ul>
      </div>
      <div className="w-full border border-white border-opacity-50 mt-12 mb-8 max-sm:hidden"/>
      <span className="text-white font-normal max-sm:hidden">© 2024 quintera.com.br | Todos os direitos reservados.</span>
    </footer>
    <div className="sm:hidden w-screen bg-white px-7 py-10 text-center">
      <span className="text-gray-600 font-normal">
        © 2024 quintera.com.br<br/>
        CNPJ: 00.000.000/0001-00<br/>
        Todos os direitos reservados.
      </span>
    </div>
    </>
  )
}