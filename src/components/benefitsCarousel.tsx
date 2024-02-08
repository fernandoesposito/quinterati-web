import Image from "next/image";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import alesp from "../../public/alesp.png"
import artesp from "../../public/artesp.png"
import cetesb from "../../public/cetesb.png"
import cptm from "../../public/cptm.png"
import fde from "../../public/fde.png"
import jucesp from "../../public/jucesp.png"
import metro from "../../public/metro.png"
import mpsp from "../../public/mpsp.png"
import osasco from "../../public/osasco.png"
import policia_federal from "../../public/policia_federal.png"
import prodam from "../../public/prodam.png"
import prodesp from "../../public/prodesp.png"
import sabesp from "../../public/sabesp.png"
import ssp from "../../public/ssp.png"
import tcesp from "../../public/tcesp.png"
import tribunal_sp from "../../public/tribunal_sp.png"



export const BenefitsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 768},
      items: 8
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 4
    }
  }
  return (
    <div className="w-screen mt-3">
      <Carousel 
        autoPlay
        arrows={false}
        autoPlaySpeed={2500}
        draggable
        infinite
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
      >
        <Image src={osasco} alt="osasco"/>
        <Image src={artesp} alt="artesp"/>
        <Image src={cptm} alt="cptm"/>
        <Image src={fde} alt="fde"/>
        <Image src={prodesp} alt="prodesp"/>
        <Image src={tribunal_sp} alt="tribunal de SP"/>
        <Image src={mpsp} alt="mpsp"/>
        <Image src={sabesp} alt="sabesp"/>
        <Image src={metro} alt="metro"/>
        <Image src={ssp} alt="secretaria de seguranca publica"/>
        <Image src={jucesp} alt="jucesp"/>
        <Image src={prodam} alt="prodam"/>
        <Image src={cetesb} alt="cetesb"/>
        <Image src={alesp} alt="alesp"/>
        <Image src={policia_federal} alt="policia federal"/>
        <Image src={tcesp} alt="tcesp"/>
      </Carousel>
    </div>
  )
}