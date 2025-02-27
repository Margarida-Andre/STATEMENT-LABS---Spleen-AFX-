import { labelProps } from "./type";

export const Label = ({children}: labelProps) => {
  return (
  <label className="font-inter font-medium text-[16px] leading-[24px] tracking-[0px] text-white">
  {children}
  </label>

  )
  
};
