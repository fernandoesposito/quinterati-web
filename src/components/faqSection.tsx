"use client"

import { Dispatch, SetStateAction, useState } from "react";
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
  
  return (      
    <div className={`grid grid-cols-2 gap-2 ${ index ? "border-t border-support" : "" } pt-6 pb-8 max-md:border max-md:border-gray-400 max-md:p-4 max-md:rounded-md max-md:grid-cols-3`}>
      <h4 className="font-medium font-inter text-support max-md:col-start-1 max-md:col-end-3 max-md:col-span-2">{question}</h4>
      { index === selectedFaqIndex && isActive ? 
        <>  
          <button className="justify-self-end text-secondary text-xl">
            <FiMinusCircle onClick={() => setIsActive(prevState => !prevState)} />
          </button>
          <p className="col-span-2 text-sm font-inter leading-5 text-support pr-2">{ answer }</p>
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