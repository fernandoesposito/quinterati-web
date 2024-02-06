import React, { HTMLProps } from "react";

interface ButtonProps {
  icon?: any;
  text: string;
  bgColor?: string;
  type?: "button" | "submit"
}

type CombinedButton = ButtonProps & HTMLProps<HTMLButtonElement>

export const Button: React.FC<CombinedButton> = ({ icon, text, bgColor="transparent", type="button", ...rest }) => {
  return (
    <button type={type} className="bg-secondary font-roboto font-semibold text-white px-5 py-3 h-fit w-fit rounded-lg flex items-center justify-center gap-1 hover:brightness-90 hover:ease-in hover:duration-200" {...rest}>
      {icon ? icon : <></>}
      <span>{text}</span>
    </button>
  )
}