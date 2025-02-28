import { topMusics } from "./data";
import { Heart, PlayCircle } from "lucide-react";

const TopMusics = () => {
  return (
    <div className="p-6 bg-transparent rounded-lg text-white w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">Top músicas</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-300 text-sm">
            <th className="w-8">#</th>
            <th className="w-12">Capa</th>
            <th className="flex-1">Título e Música</th>
            <th className="w-12 text-center">Gostos</th>
          </tr>
        </thead>
        <tbody>
          {topMusics.map((musica, index) => (
            <tr key={musica.id} className="border-b border-gray-700">
              <td className="py-2">{String(index + 1).padStart(2, "0")}</td>
              <td className="py-2">
                <img src={musica.image} alt={musica.title} className="w-10 h-10 rounded-md" />
              </td>
              <td className="py-2">
                <p className="font-bold">{musica.title}</p>
                <p className="text-gray-400 text-sm">{musica.artist}</p>
              </td>
              <td className="py-2 flex items-center justify-center gap-2">
                <Heart size={16} className="text-gray-300" />
                <span>{musica.likes}</span>
                <PlayCircle size={20} className="text-yellow-400 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopMusics;
