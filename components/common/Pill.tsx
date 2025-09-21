import { PillProps } from "@/interfaces";
const Pill: React.FC<PillProps> = ({ title, active, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`cursor-pointer text-center flex items-center  w-auto ${active ? 'bg-[#F0FFFB] border border-[#34967C]' : 'bg-[#F9F9F9] border border-gray-300'}  px-3 py-4 h-[27px] rounded-full`}
    >
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;