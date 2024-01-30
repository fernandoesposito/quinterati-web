import Image from "next/image"

interface CarouselProps {
  img: string;
  topic: string;
  header: string;
  content: string;
  alt?: string;
}

export const CarouselCard = ({ img, header, topic, content, alt="" }: CarouselProps) => {
  return (
    <div className="flex flex-col items-center gap-8 bg-white p-6 rounded-lg ml-4">
      <Image src={img} alt={alt} width={355} height={237} className="rounded-lg"/>
      <div className="flex flex-col gap-3 font-roboto">
        <p className="text-secondary text-xs font-semibold">{topic}</p>
        <h3 className="text-primary font-semibold text-lg">{header}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  )
}