import { supportText } from "./supportText";

export default function Terms() {
  return (
    <div className="flex flex-col gap-9 max-sm:gap-4">
      <h1 className="font-inter font-bold text-primary text-[2.5rem] max-md:text-2xl">{supportText.title}</h1>
      {supportText.body}
    </div>
  )
}