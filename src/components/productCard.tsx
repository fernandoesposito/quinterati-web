import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ProductCardProps {
  topic: string;
  header: string;
  description: string;
  alt: string;
  src: string;
}

type ExtendedProductCardProps = ProductCardProps & React.HTMLProps<HTMLDivElement>

export const ProductCard: React.FC<ExtendedProductCardProps> = ({ topic, header, description, alt, src, ...rest }: ProductCardProps) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg max-w-80 drop-shadow-md shadow-black-[0.1] font-roboto" {...rest}>
      <div className="h-[232px]">
        <Image 
          src={src} 
          alt={alt} 
          className="w-fit"
        />
      </div>
      <div className="flex flex-col gap-3 mt-7">
        <span className="font-semibold text-xs text-secondary">
          { topic }
        </span>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl text-primary">
            { header }
          </h3>
          <p className="text-sm leading-6 text-support after:content-['Ver_mais'] after:text-secondary after:cursor-pointer">
            { description}
          </p>
        </div>
      </div>
    </div>
  )
}