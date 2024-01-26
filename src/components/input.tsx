import React, { HTMLProps } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
}

type CombinedProps = InputProps & HTMLProps<HTMLInputElement>

export const Input:  React.FC<CombinedProps> = ({ label, placeholder, type="text" }) => {
  return (
    <div className="flex flex-col gap-2">
      { label ? 
        <label className="text-support text-xs font-medium">
          {label}
      </label> :
      <></>
      }
      
      <input 
        type={type} 
        placeholder={placeholder} 
        className="px-5 py-3 border rounded-lg border-gray-400 
        bg-white shadow shadow-black-[0.05] font-normal text-sm text-gray-500
        placeholder:text-sm placeholder:font-normal"
      />
    </div>
  )
}