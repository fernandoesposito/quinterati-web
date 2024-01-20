interface HighlightProps {
  icon: any;
  bgColor?: string;
  description: string;
}

export const Highlight = ({ icon, bgColor="#FFFFFF", description }: HighlightProps) => {
  return (
    <div className="flex items-center gap-1 px-5 py-3 rounded-3xl max-w-[310px] border shadow-sm shadow-main" style={{ backgroundColor: bgColor }}>
      { icon }
      <span className="text-sm font-normal text-gray-500">{description}</span>
    </div>
  )
}