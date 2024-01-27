"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


interface FaqSectionProps {
  index: number;
  question: string;
  answer: string;
  selectedFaqIndex: number | null;
  setSelectedFaqIndex: Dispatch<SetStateAction<number | null>>;
}

export const FaqSection = ({ index, question, answer, selectedFaqIndex, setSelectedFaqIndex }: FaqSectionProps) => {
  const [isActive, setIsActive] = useState(false); 
  
  
  console.log(selectedFaqIndex);

  return (      
    <div className={`grid grid-cols-2 gap-2 ${ index ? "border-t border-support" : "" } pt-6 pb-8`}>
      <h4 className="font-medium text-support">{question}</h4>
      { index === selectedFaqIndex && isActive ? 
        <>  
          <button className="justify-self-end text-secondary text-xl">
            <FiMinusCircle onClick={() => setIsActive(prevState => !prevState)} />
          </button>
          <p className="col-span-2 text-sm leading-5 text-support pr-2">{ answer }</p>
        </> :
        <button className="justify-self-end text-secondary text-xl">
          <FiPlusCircle onClick={() => {
            setSelectedFaqIndex(index)
            setIsActive(prevState => !prevState)}
          }/>
        </button>
      }
    </div>
  )
}