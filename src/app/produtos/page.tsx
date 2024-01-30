import { FaWhatsapp } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";
import { ProductCard } from "@/components/productCard";

import product_example from "../../../public/product_example.svg";


export default function Produtos() {
  return (
    <section className="w-screen bg-main md:px-12 px-4 md:pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)] pb-12 flex flex-col items-center">
      <Highlight 
        description="Tudo que você precisa para estar em conformidade com a lei"
        icon={<TbTargetArrow />}
      />
      <h1 className="font-black font-inter md:text-header text-lg md:leading-10 leading-6 max-sm:max-w-64 text-center text-primary md:mt-4 mt-2 md:mb-10 mb-6">
        Selecione o produto que deseja mais informações
      </h1>
      <ul className="flex gap-6 items-start text-gray-500 font-roboto font-light text-sm mb-10">
        <li>LGPD</li>
        <li>Cibersegurança</li>
        <li>TI</li>
        <li>Serviços</li>
        <li>Infraestrura</li>
      </ul>
      <div className="grid grid-cols-3 gap-6 w-fit mb-14">
        <ProductCard 
          alt=""
          header="Controle de acesso"
          description="Gestão de utilização de credenciais para usuários autenticados e usuários com permissões privilegiadas para acesso a dispositivos e sistemas.

          - Gestão de acesso, destinada a todos os colaboradores para utilização em estações de trabalho, aplicações locais ou em Nuvem;
          - Gestão de Credenciais Privilegiadas, destinada aos times de tecnologia,"
          src={product_example}
          topic="LGPD"
        />
        <ProductCard 
          alt=""
          description="lorem ipsum"
          header="faassfa"
          src=""
          topic="LGPD"
        />
        <ProductCard 
          alt=""
          description="lorem ipsum"
          header="faassfa"
          src=""
          topic="LGPD"
        />
        <ProductCard 
          alt=""
          description="lorem ipsum"
          header="faassfa"
          src=""
          topic="LGPD"
        />
        <ProductCard 
          alt=""
          description="lorem ipsum"
          header="faassfa"
          src=""
          topic="LGPD"
        />
        <ProductCard 
          alt=""
          description="lorem ipsum"
          header="faassfa"
          src=""
          topic="LGPD"
        />
      </div>
      <Button 
        text="Entrar em contato"
        icon={<FaWhatsapp/>}

      />
      
    </section>
  )
}