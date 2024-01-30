import React, { Dispatch, SetStateAction } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";


interface FaqCardMobile {
  id: number;
  children: React.ReactNode;
  topic: string;
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

export const FaqCardMobile = ({ children, id, topic, selectedId, setSelectedId }: FaqCardMobile) => {
  return (
    <div className="w-full flex flex-col gap-4 md:hidden">
      <div className={`max-sm:w-64 w-96 place-self-center flex justify-between items-center px-4 py-5 rounded-lg ${ selectedId === id ? "bg-secondary text-white" : "bg-gray-100 text-gray-500"}`}>
        <p>{topic}</p>
        { id === selectedId ? 
          <FaArrowUp 
            onClick={() => setSelectedId(null)}/> : 
          <FaArrowDown onClick={() => setSelectedId(id)}/>
        }
      </div>
      {id === selectedId ? 
        <div className="flex flex-col gap-4">
          {children}
        </div> 
        : <></>}
    </div>
  )
}