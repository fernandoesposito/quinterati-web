"use client"

import { Dispatch, SetStateAction, useEffect } from "react";

interface FaqCardProps {
  id: number;
  icon: any;
  title: string;
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  setCurrentTopic: Dispatch<SetStateAction<string>>;
}

export const FaqCard = ({ id, icon, title, selectedId, setSelectedId, setCurrentTopic }: FaqCardProps) => {
  useEffect(() => {
    id === selectedId ? setCurrentTopic(title) : null
  }, [id, selectedId, setCurrentTopic, title])
  
  return (
    <div className={`flex flex-col gap-5 w-44 ${ selectedId === id ? "text-secondary" : "text-support"}`}>
      <button 
        className={`rounded-full size-11 shadow-xl shadow-black-[0.1] flex justify-center items-center text-2xl border-2 border-white ${ selectedId === id ? "bg-secondary text-white" : "bg-main"}`}
        onClick={() => setSelectedId(id)}
      >
        <div>{ icon }</div>
      </button>
      <h3 className="font-semibold text-xl font-inter">{title}</h3>
    </div>
  )
}