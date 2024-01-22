interface HighlightProps {
  icon: any;
  bgColor?: string;
  description: string;
}

export const Highlight = ({ icon, bgColor="#FFFFFF", description }: HighlightProps) => {
  return (
    <div className="flex items-center gap-1 px-5 py-3 rounded-3xl w-fit border border-main shadow-sm shadow-main-[0.1]" style={{ backgroundColor: bgColor }}>
      { icon }
      <span className="text-sm font-normal text-gray-500">{description}</span>
    </div>
  )
}