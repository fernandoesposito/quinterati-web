import Image from "next/image"
import splash_3 from "../../public/splash_3.svg"

export const Orbit = () => {
  return (
    <div className="sm:size-[462px] size-[301px] bg-transparent flex flex-col items-center justify-center">
      <Image src={splash_3} alt="" width={30}/>
      <div className="sm:size-[462px] size-[301px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:top-[140px] top-[80px] sm:left-[43px] left-[30px]" />
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative right-[20px] top-[110px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Infraestrutura</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[50px] sm:left-[6px] left-[12px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[70px] right-[50px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Cibersegurança</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:bottom-[180px] bottom-[120px] sm:right-[65px] right-[57px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[160px] left-[360px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Implantação</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:top-[180px] top-[88px] sm:right-[67px] right-[20px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative top-[210px] left-[280px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Conformidade</div>
          </div>
        </div>
      </>
      <div className="sm:size-[325px] size-[212px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:left-[325px] left-[211px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative left-[260px] top-[25px] animate-rotation-balance">
            <div className="sticky animate-rotateY">LGPD</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-y-1/2 sm:top-[167px] top-[103px] sm:left-[200px] left-[120px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative top-[150px] left-[120px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Integração</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute translate-y-1/2 sm:bottom-[175px] bottom-[104px] sm:left-[162px] left-[116px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[150px] left-[137px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Serviços</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:bottom-[82px] bottom-0 sm:left-[20px] left-[1px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[90px] left-[0px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Pessoas</div>
          </div>
        </div>
      </>
      <div className="sm:size-[168px] size-[109px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[168px] w-[109px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:left-[164px] left-[108px] sm:bottom-[30px] bottom-0"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[0px] left-[140px] animate-rotation-balance">
            <div className="sticky animate-rotateY">TI</div>
          </div>
        </div>
        <div className="absolute rounded-full sm:w-[168px] w-[109px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[30px] right-[30px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Consultoria</div>
          </div>
        </div>
      </>
    </div>
  )
}