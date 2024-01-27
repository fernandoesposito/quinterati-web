import Image from "next/image"
import splash_3 from "../../public/splash_3.svg"

export const Orbit = () => {
  return (
    <div className="size-[462px] bg-transparent flex flex-col items-center justify-center my-32 bg-black">
      <Image src={splash_3} alt="" width={30}/>
      <div className="size-[462px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full w-[462px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 top-[80px] left-[18px]"/>
        </div>
        <div className="absolute rounded-full w-[462px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[50px] left-[8px]"/>
        </div>
        <div className="absolute rounded-full w-[462px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[180px] right-[80px]"/>
        </div>
        <div className="absolute rounded-full w-[462px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 top-[180px] right-[82px]"/>
        </div>
      </>
      <div className="size-[325px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full w-[325px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 left-[325px]"/>
        </div>
        <div className="absolute rounded-full w-[325px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-y-1/2 top-[155px] left-[200px]"/>
        </div>
        <div className="absolute rounded-full w-[325px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute translate-y-1/2 bottom-[162px] left-[162px]"/>
        </div>
        <div className="absolute rounded-full w-[325px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 bottom-[82px] left-[30px]"/>
        </div>
      </>
      <div className="size-[168px] border border-orbit rounded-full absolute" />
      <>
        <div className="absolute rounded-full w-[168px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2 left-[160px] bottom-[30px]"/>
        </div>
        <div className="absolute rounded-full w-[168px] z-10 animate-spin-normal">
          {/* <div className="border border-white rounded-3xl bg-main px-4 w-fit">Infraestrutura</div> */}
          <div className="rounded-full size-4 border border-white bg-planet absolute -translate-x-1/2"/>
        </div>
      </>
    </div>
  )
}