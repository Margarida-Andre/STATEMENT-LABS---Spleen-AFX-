import { checkboxProps } from "./type";


export const Checkbox = ({
    name,
    id
}: checkboxProps) => {
  return (
    <input 
    type="checkbox"
    id={id}
    name={name}
    className="w-[20px] h-[20px] bg-transparent rounded-lg p-4 border border-gray-300 text-black placeholder-gray-500 focus:outline-none "/>
  )
};
