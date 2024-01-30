import Image from "next/image"
import splash_3 from "../../public/splash_3.svg"

export const Orbit = () => {
  return (
    <div className="md:size-[462px] size-[301px] bg-transparent flex flex-col items-center justify-center">
      <Image src={splash_3} alt="" width={30}/>
      <div className="lg:size-[462px] size-[301px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full lg:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:top-[140px] top-[80px] lg:left-[43px] left-[21px]" />
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:right-[20px] right-[60px] lg:top-[110px] top-[50px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Infraestrutura</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[50px] lg:left-[6px] left-[8px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[70px] lg:right-[50px] right-[60px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Cibersegurança</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:bottom-[180px] bottom-[120px] lg:right-[65px] right-[38px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:bottom-[160px] bottom-[98px] lg:left-[360px] left-[215px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Implantação</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:top-[180px] top-[88px] lg:right-[67px] right-[8px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:top-[210px] top-[110px] lg:left-[280px] left-[205px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Conformidade</div>
          </div>
        </div>
      </>
      <div className="lg:size-[325px] size-[212px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full lg:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:left-[325px] left-[211px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:left-[260px] left-[180px] top-[25px] animate-rotation-balance">
            <div className="sticky animate-rotateY">LGPD</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-y-1/2 lg:top-[167px] top-[115px] lg:left-[200px] left-[120px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:top-[150px] top-[100px] lg:left-[120px] left-[45px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Integração</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute translate-y-1/2 lg:bottom-[175px] bottom-[117px] lg:left-[162px] left-[116px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:bottom-[150px] bottom-[95px] lg:left-[137px] left-[100px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Serviços</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[325px] w-[212px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:bottom-[82px] bottom-0 lg:left-[20px] left-[1px]"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:bottom-[90px] bottom-[22px] lg:left-[0px] right-[40px] animate-rotation-balance">
            <div className="sticky animate-rotateY">Pessoas</div>
          </div>
        </div>
      </>
      <div className="lg:size-[168px] size-[109px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full lg:w-[168px] w-[109px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 lg:left-[164px] left-[108px] lg:bottom-[30px] bottom-0"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative lg:bottom-[0px] top-[30px] lg:left-[140px] left-[68px] animate-rotation-balance">
            <div className="sticky animate-rotateY">TI</div>
          </div>
        </div>
        <div className="absolute rounded-full lg:w-[168px] w-[109px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2"/>
          <div className="border border-white rounded-3xl bg-main px-4 w-fit relative bottom-[30px] lg:right-[30px] right-14 animate-rotation-balance">
            <div className="sticky animate-rotateY">Consultoria</div>
          </div>
        </div>
      </>
    </div>
  )
}