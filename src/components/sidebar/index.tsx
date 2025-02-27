import { FaHome, FaMusic, FaHeart, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-gray-200 p-4">
      <h1 className="text-yellow-400 text-2xl font-bold mb-6">Spleen AFX</h1>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            <FaHome /> Dashboard
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            <FaMusic /> Músicas
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            <FaHeart /> Favoritos
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            <FaCog /> Configurações
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
