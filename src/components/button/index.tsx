import { buttonProps } from "./type";

export const Button = ({
   children,
   onClick
}: buttonProps) => {
  return (
    <button 
    onClick={onClick}
    className="w-[510px] h-[57px] rounded-lg px-4 py-2 bg-[#FBE601] text-black font-medium text-lg hover:bg-yellow-400 transition-all">
    {children}
    </button>
  )
  
};
