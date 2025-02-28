import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { upcomingSongs } from "./data";


const UpcomingSongsView = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">Novas músicas por lançar</h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll(-720)} 
            className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>

          <button
            onClick={() => scroll(720)} 
            className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600"
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-[720px]">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {upcomingSongs.map((song) => (
            <div
              key={song.id}
              className="relative w-[350px] h-[200px] bg-cover bg-center rounded-xl overflow-hidden flex-shrink-0"
              style={{ backgroundImage: `url(${song.image})` }}
            >
              <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded-lg">
                Sneak Peak
              </span>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-300">{song.artist}</p>
                <p className="text-xs text-gray-400">{song.releaseDate}</p>
              </div>

              <button className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                ▶
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSongsView;
