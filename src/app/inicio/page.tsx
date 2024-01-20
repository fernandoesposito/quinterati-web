import { TbTargetArrow } from "react-icons/tb";
import { Highlight } from "@/components/highlight";

export default function Intro() {
  return (
    <section className="w-screen bg-main px-28">
      <div>
        {/* textos */}
        <div className="max-w-xl">
          <Highlight 
            icon={<TbTargetArrow className="text-secondary" size={15}/>}
            description="Não existe meia conformidade com a lei"
          />
          <h1 className="text-secondary font-black text-header leading-[3rem]">
            Referência para o setor público em soluções personalizadas na segurança de dados
          </h1>
          <span className="text-subtitle font-normal text-sm">
            Nossa missão é arrumar sua casa com excelência para estar em conformidade com as mais atuais leis de segurança de dados. 
          </span>
        </div>
        {/* animacao */}
        <div></div>
      </div>
      <div>
        
      </div>
      <div>

      </div>
    </section>
  )
}