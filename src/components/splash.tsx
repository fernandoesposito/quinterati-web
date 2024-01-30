"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";

import bg_logo from "../../public/bg_logo.svg";
import splash_1 from "../../public/splash_1.svg"
import splash_2 from "../../public/splash_2.svg"
import splash_3 from "../../public/splash_3.svg"
import mobile_bg from "../../public/mobile_bg.svg";

interface SplashProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const Splash = ({ isLoading, setIsLoading }: SplashProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const animate = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 1000)
    
    setTimeout(() => {
      clearInterval(animate)
      setIsLoading(false)
    }, 4000)    

    return () => clearInterval(animate)
  }, [isLoading, setIsLoading])

  const AnimatedLogo = () => {
    switch(counter) {
      case 1:
        return <Image src={splash_1} alt=""/>
      case 2: 
        return <Image src={splash_2} alt=""/>
      case 3:
        return <Image src={splash_3} alt=""/>
    }
  }


  return (
    <section className="w-screen h-screen grid grid-cols-5 max-md:flex max-md:flex-col max-md:items-center">
      <Image src={bg_logo} alt="quintera ti logo" className="w-full md:col-span-3 max-md:hidden"/>
      <Image src={mobile_bg} alt="quintera ti logo" className="md:hidden absolute bottom-1/2 translate-y-1/2 w-full h-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-in-out">
        <AnimatedLogo />
      </div>
    </section>
  )
}