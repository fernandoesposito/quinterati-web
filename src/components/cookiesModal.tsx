import { useState } from "react"
import Image from "next/image"
import { Button } from "./button"

import cookie from "../../public/cookie.svg"
import quintera_logo from "../../public/quintera_logo.svg"

export const CookiesModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    { isOpen ? 
      <div className="bg-black">
        <div className="w-screen flex px-16 py-14 gap-12 justify-between bg-white">
          <div className="flex">
            <Image src={cookie} alt="cookie" />
            <div className="max-w-lg flex flex-col justify-end gap-8">
              <Image src={quintera_logo} alt="quintera logo" />
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-2xl">Política de cookies</h3>
                <p className="text-sm">
                  Para otimizar a experiência durante a sua navegação em nosso site, fazemos uso de cookies. 
                  Ao continuar na nossa plataforma, 
                  consideramos que você esteja de acordo com nossa política de cookies.”
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-end">
            <Button 
              text="Recusar"
              style={{ 
                backgroundColor: "white",
                color: "#344054",
                border: "1px #344054 solid",
                width: "182px"
              }}
              onClick={() => setIsOpen(prev => !prev)}
            />
            <Button 
              text="Aceitar"
              style={{ 
                width: "182px"
              }}  
              onClick={() => setIsOpen(prev => !prev)}
            />
          </div>
        </div>
      </div> : 
      <></>
    }
    </>
  )
}