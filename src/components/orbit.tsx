import Image from "next/image"
import splash_3 from "../../public/splash_3.svg"

export const Orbit = () => {
  return (
    <div className="sm:size-[462px] size-[301px] bg-transparent flex flex-col items-center justify-center">
      <Image src={splash_3} alt="" width={30}/>
      <div className="sm:size-[462px] size-[301px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          <div className="rounded-full size-4 border border-white bg-red-500 absolute -translate-x-1/2 top-[80px] sm:left-[13px] left-[30px]" />
        <div className="border border-white rounded-3xl bg-main px-4 w-fit relative right-32 top-16">Infraestrutura</div>

        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[50px] sm:left-[8px] left-[12px]"/>
        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:bottom-[180px] bottom-[120px] sm:right-[80px] right-[57px]"/>
        </div>
        <div className="absolute rounded-full sm:w-[462px] w-[301px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:top-[180px] top-[88px] sm:right-[82px] right-[20px]"/>
        </div>
      </>
      <div className="sm:size-[325px] size-[212px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:left-[325px] left-[211px]"/>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-y-1/2 sm:top-[155px] top-[103px] sm:left-[200px] left-[120px]"/>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute translate-y-1/2 sm:bottom-[162px] bottom-[104px] sm:left-[162px] left-[116px]"/>
        </div>
        <div className="absolute rounded-full sm:w-[325px] w-[212px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:bottom-[82px] bottom-0 sm:left-[30px] left-[1px]"/>
        </div>
      </>
      <div className="sm:size-[168px] size-[109px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full sm:w-[168px] w-[109px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 sm:left-[160px] left-[108px] sm:bottom-[30px] bottom-0"/>
        </div>
        <div className="absolute rounded-full sm:w-[168px] w-[109px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2"/>
        </div>
      </>
    </div>
  )
}