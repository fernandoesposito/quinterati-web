"use client"

import { Dispatch, ReactNode, SetStateAction } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


interface FaqSectionProps {
  index: number;
  question: string;
  answer: ReactNode;
  selectedFaqIndex: number | null;
  setSelectedFaqIndex: Dispatch<SetStateAction<number | null>>;
}

export const FaqSection = ({ index, question, answer, selectedFaqIndex, setSelectedFaqIndex }: FaqSectionProps) => {
  return (      
    <div className={`grid grid-cols-2 gap-y-2 ${ index ? "border-t border-support" : "" } pt-6 pb-8 max-md:border max-md:border-gray-400 max-md:p-4 max-md:rounded-md max-md:grid-cols-3 max-sm:w-64 max-md:w-96 max-md:ml-auto max-md:mr-auto`}>
      <h4 className="font-medium font-inter text-support max-md:col-start-1 max-md:col-end-3 max-md:col-span-2">{question}</h4>
      { index === selectedFaqIndex ? 
        <>  
          <button className="justify-self-end text-secondary text-xl">
            <FiMinusCircle onClick={() => setSelectedFaqIndex(null)} />
          </button>
          <div className="col-span-3 text-sm font-inter leading-5 text-support pr-2">{ answer }</div>
        </> :
        <button className="justify-self-end text-secondary text-xl">
          <FiPlusCircle onClick={() => setSelectedFaqIndex(index)}/>
        </button>
      }
    </div>
  )
}