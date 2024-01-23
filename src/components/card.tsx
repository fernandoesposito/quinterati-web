interface CardProps {
  icon: any;
  header: string;
  content: string;
}

export const Card = ({ icon, header, content }: CardProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-72">
      <div className="rounded-full size-11 shadow-xl shadow-black-[0.1] flex justify-center items-center text-2xl">
        { icon }
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-support font-semibold text-xl">
          { header }
        </h4>
        <summary className="list-none font-normal text-support">
          { content }
        </summary>
      </div>
    </div>
  )
}