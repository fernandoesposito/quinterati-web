import Image from "next/image"
import { ReactNode } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MobileCarousel = ({ children }: { children: ReactNode }) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1.2,
    }
  }
  return (
    <Carousel 
      responsive={responsive}
      arrows={false}
      ssr={true}
      showDots={true}      
    >
      {children}
    </Carousel>
  )
}