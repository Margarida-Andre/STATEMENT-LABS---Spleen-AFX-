import { useState } from "react";
import { moodData } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MoodSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < moodData.length) {
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
      {/* Título e setas no topo */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">Mood</h2>
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
            disabled={startIndex + itemsPerPage >= moodData.length}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Carrossel de Mood */}
      <div className="flex gap-4 overflow-hidden">
        {moodData.slice(startIndex, startIndex + itemsPerPage).map((mood) => (
          <div key={mood.id} className="w-32 flex flex-col items-center">
            <div className="relative">
              <img src={mood.image} alt={mood.title} className="w-32 h-32 rounded-lg" />
              <p className="absolute top-2 left-2 text-white font-bold">{mood.title}</p>
            </div>
            <p className="text-white text-sm mt-2">{mood.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSection;
