import Image from "next/image";
import quintera_logo_white from "../../public/quintera_logo_white.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
    <footer className="w-screen bg-primary pt-16 pb-12 lg:px-28 max-md:px-10 md:px-10 max-md:py-8">
      <div className="flex flex-col gap-8 max-md:items-center max-md:pb-10">
        <Image src={quintera_logo_white} alt="quinterati logo"/>
        <div className="max-w-80">
          <h4 className="text-gray-200 font-normal font-inter leading-5 max-md:text-center max-md:text-sm">
            Av. Antartico, 381 cj 56 <br/>
            São Bernardo do Campo - São Paulo <br/>
            CEP: 09726-150
          </h4>
        </div>
        <ul className="flex font-inter max-md:flex-col justify-between text-gray-200 font-semibold gap-8 md:gap-4 max-md:mr-auto max-md:gap-3 max-md:text-sm">
          <p className="md:hidden text-gray-400 mb-1">Mapa do site</p>
          <li>
            <Link href="/inicio#beneficios">Benefícios</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="/inicio#contato">Contato via e-mail</Link>
          </li>
          <li>
            <Link href="/faqs">FAQ’s</Link>
          </li>
          <p className="sm:hidden text-gray-400 mb-1 mt-10">Legal</p>
          <li>
            <Link href="/termos">Termos de uso</Link>
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
      <div className="w-full border border-white border-opacity-50 mt-12 mb-8 max-md:hidden"/>
      <span className="text-white font-normal font-inter max-md:hidden">© 2024 quintera.com.br | CNPJ: 19.941.422/0001-90 | Todos os direitos reservados.</span>
    </footer>
    <div className="md:hidden w-screen bg-white px-7 pt-10 pb-16 text-center">
      <span className="text-gray-600 font-normal font-inter">
        © 2024 quintera.com.br<br/>
        CNPJ: 19.941.422/0001-90<br/>
        Todos os direitos reservados.
      </span>
    </div>
    </>
  )
}
