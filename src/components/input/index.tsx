import { inputProps } from "./type";

export const Input = ({
    type,
    id,
    name,
    placeholder,
}: inputProps) => {
  return (
    <input 
    type={type} 
    id={id}
    name={name}
    placeholder={placeholder}
    className="w-[510px] h-[53px] bg-transparent rounded-lg p-4 border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  )
};
