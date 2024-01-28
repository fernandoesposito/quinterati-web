import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  icon: any;
  header: string;
  content: string;
}

export const Card = ({ icon, header, content }: CardProps) => {
  return (
    <div className="flex flex-col sm:gap-5 sm:max-w-72 max-sm:bg-gray-100 max-sm:rounded-lg max-sm:p-4 max-sm:w-full">
      <div className="rounded-full size-11 shadow-xl shadow-black-[0.1] flex justify-center items-center text-2xl max-sm:hidden">
        { icon }
      </div>
      <div className="flex sm:flex-col gap-2 max-sm:items-center max-sm:justify-between">
        <h4 className="text-support font-semibold sm:text-xl text-sm">
          { header }
        </h4>
        <summary className="list-none font-normal text-support max-sm:hidden">
          { content }
        </summary>
        <div className="sm:hidden text-secondary">
          <FaArrowRight />
        </div>
      </div>
    </div>
  )
}