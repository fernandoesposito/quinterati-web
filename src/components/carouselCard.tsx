import Image from "next/image"
import React, { HTMLProps } from "react";

interface CarouselProps {
  img: string;
  topic: string;
  header: string;
  content: string;
  alt?: string;
}

type CarouselPropsExtended = CarouselProps & HTMLProps<HTMLDivElement>;

export const CarouselCard: React.FC<CarouselPropsExtended> = ({ img, header, topic, content, alt="", ...rest }: CarouselProps) => {
  return (
    <div className="flex flex-col items-center gap-8 bg-white p-6 rounded-lg ml-4 h-[560px]" {...rest}>
      <Image src={img} alt={alt} width={355} height={237} className="rounded-lg"/>
      <div className="flex flex-col gap-3 font-roboto overflow-hidden">
        <p className="text-secondary text-xs font-semibold">{topic}</p>
        <h3 className="text-primary font-semibold text-lg">{header}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  )
}