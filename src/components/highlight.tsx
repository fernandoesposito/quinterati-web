interface HighlightProps {
  icon?: any;
  bgColor?: string;
  description: string;
}

interface HighlightVariantProps {
  default: string,
  blue: string
}

export const Highlight = ({ icon, bgColor="default" as string, description }: HighlightProps) => {
  const highlightVariants: HighlightVariantProps = {
    default: "border-main shadow-sm shadow-main-[0.1] bg-white text-secondary",
    blue: "border-secondary shadow-sm shadow-black-[0.1] bg-primary text-white"
  }  
  
  return (
    <div className={`flex items-center gap-1 px-5 py-3 rounded-3xl w-fit border ${highlightVariants[bgColor as keyof HighlightVariantProps]}`}>
      { icon }
      <span className={`sm:text-sm text-[0.625rem] font-bold ${ bgColor === "default" ? "text-gray-500" : "text-white" }`}>{description}</span>
    </div>
  )
}