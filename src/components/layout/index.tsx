import { layoutProps } from "./type";


export const Layout = ({children}: layoutProps) => {
  return(
  <div className="bg-gradient-to-br from-[#4831A2] via-[rgba(13,7,39,0.9)] to-[#1F1153] h-screen w-full">
   {children}
  </div>
  )
  
};
