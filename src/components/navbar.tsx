import Image from "next/image";
import quintera_logo from "../../public/quintera_logo.svg";
import whatsapp from "../../public/wapp.svg";

export const Navbar = () => {
  return (
    <nav className="px-[4.5rem] py-6 flex justify-between items-center w-screen">
      <div className="flex justify-between items-center">
        <Image 
          src={quintera_logo} 
          alt="quintera logo"
          className="mr-14" 
          width={130}
          height={32} 
        />
        <div className="flex gap-6 text-sm font-light">
          <h5>Início</h5>
          <h5>Benefícios</h5>
          <h5>Produtos</h5>
          <h5>Sobre nós</h5>
          <h5>Contato via e-mail</h5>
          <h5>FAQ’s</h5>
        </div>
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