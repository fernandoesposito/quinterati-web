import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-spin text-secondary text-2xl">
      <AiOutlineLoading3Quarters/>
    </div>
  )
}