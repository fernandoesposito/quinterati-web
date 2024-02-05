import React, { Dispatch, HTMLProps, SetStateAction, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";


interface FaqCardMobile {
  index: number;
  children: React.ReactNode;
  topic: string;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  activeTopicId: number | null;
  setActiveTopicId: Dispatch<SetStateAction<number | null>>;
}

type FaqCardMobileExtended = FaqCardMobile & HTMLProps<HTMLDivElement>;

export const FaqCardMobile: React.FC<FaqCardMobileExtended> = ({ children, index, topic, activeTopicId, setSelectedId, setActiveTopicId, ...rest }: FaqCardMobile) => {
  return (
    <div className="w-full flex flex-col gap-4" {...rest}>
      <div className={`max-sm:w-64 w-96 place-self-center flex justify-between items-center px-4 py-5 rounded-lg ${ activeTopicId === index ? "bg-secondary text-white" : "bg-gray-100 text-gray-500"}`}>
        <p>{topic}</p>
        { index === activeTopicId ? 
          <FaArrowUp onClick={() => {
            setSelectedId(null)
            setActiveTopicId(null)
          }}/>
           : 
          <FaArrowDown onClick={() => {
            setActiveTopicId(index)
            setSelectedId(null)
          }}/>
        }
      </div>
      {index === activeTopicId ? 
        <div className="flex flex-col gap-4">
          {children}
        </div> 
        : <></>}
    </div>
  )
}