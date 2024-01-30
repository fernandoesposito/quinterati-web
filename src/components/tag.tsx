import Image from "next/image";
import React, { HTMLProps } from "react"

interface TagProps {
  icon: any;
  description: string;
}

type CombinedTag = HTMLProps<HTMLDivElement> & TagProps

export const Tag: React.FC<CombinedTag> = ({ icon, description, ...rest }: TagProps) => {
  return (
    <div className="flex items-center gap-4 bg-main  shadow-lg shadow-black-[0.1] max-w-60 rounded-md" {...rest}>
      <div className="bg-secondary text-4xl px-3 py-2 rounded-l-md max-w-16">
        <Image src={icon} alt="globo" className="size-12" />
      </div>
      <div className="py-2 pr-3 rounded-r-md leading-3 max-w-52">
        <span className="text-[13px] text-gray-500 font-lato">{description}</span>
      </div>
    </div>
  )
}