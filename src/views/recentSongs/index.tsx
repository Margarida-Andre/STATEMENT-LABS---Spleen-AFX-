import { useState } from "react";
import { recentSongs } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentSongs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < recentSongs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">Ouvidas recentemente</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + itemsPerPage >= recentSongs.length}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden">
        {recentSongs.slice(startIndex, startIndex + itemsPerPage).map((song) => (
          <div key={song.id} className="w-32 flex flex-col items-center">
            <img src={song.image} alt={song.title} className="w-32 h-32 rounded-lg" />
            <p className="text-white text-sm mt-2">{song.title}</p>
            <p className="text-gray-400 text-xs">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSongs;
