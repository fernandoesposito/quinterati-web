import { ReactNode } from "react";
import Image from "next/image";

interface CardDetailsProps {
  children: ReactNode;
  type: string;
  header: string;
  image: string;
}

export const CardDetails = ({ type, header, children, image }: CardDetailsProps) => {
  return (
    <div className="w-full bg-white rounded-lg p-6 flex flex-col gap-8">
      <div>
        <Image src={image} alt="" />
      </div>
      <div className="flex flex-col gap-3 font-roboto">
        <p className="text-secondary font-semibold text-xs">{type}</p>
        <h3 className="text-primary font-semibold text-2xl max-md:text-lg">{header}</h3>
        { children }
      </div>
    </div>
  )
}