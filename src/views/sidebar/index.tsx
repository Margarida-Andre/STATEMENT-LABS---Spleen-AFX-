import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../../assets/logo.svg";
import { menuItems, supportItems } from "./util";

export const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");


  return (
    <div className="w-64 h-screen bg-[#0D0727] text-white p-6">
      <img src={Logo} alt="logo"/>

      <h3 className="text-sm text-gray-400 mb-2 mt-6">Menu Principal</h3>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={twMerge(
              "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition",
              active === item.name ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"
            )}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-sm text-gray-400 mt-6 mb-2">Suporte</h3>
      <ul>
        {supportItems.map((item) => (
          <li
            key={item.name}
            className={twMerge(
              "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition",
              active === item.name ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"
            )}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
