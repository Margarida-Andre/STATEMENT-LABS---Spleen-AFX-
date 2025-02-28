import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent p-4 text-white">
     
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="Pesquisar álbum, música ou artista"
          className="w-full p-2 pl-4 pr-10 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

     
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40" 
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Jerome Bell</p>
          <p className="text-sm text-gray-400">jeromebell@gmail.com</p>
        </div>
        <button className="text-gray-300 text-lg">▼</button>
      </div>
    </header>
  );
};
