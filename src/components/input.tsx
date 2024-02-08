import React, { ForwardRefRenderFunction, HTMLProps, forwardRef } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
}

const InputCustom:  ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, placeholder, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      { label ? 
        <label className="text-support font-roboto text-xs font-medium">
          {label}
      </label> :
      <></>
      }
      
      <input 
        ref={ref}
        {...rest}
        placeholder={placeholder} 
        className="px-5 py-3 border rounded-lg border-gray-400 
        bg-white shadow shadow-black-[0.05] font-normal font-roboto text-sm text-gray-500
        placeholder:text-sm placeholder:font-normal [&::-webkit-inner-spin-button]:appearance-none max-sm:placeholder:text-sm"
      />
    </div>
  )
}

export const Input = forwardRef(InputCustom)