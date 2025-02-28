import Container from "../../views/container";
import MoodSection from "../../views/moodSection.tsx";
import PremiumOffer from "../../views/premiumOffer.tsx/index.tsx";
import RecentSongs from "../../views/recentSongs";
import { Slider } from "../../views/slider";
import TopMusics from "../../views/topMusics/index.tsx";
import UpcomingSongs from "../../views/upcomingSongs";

export function Dashboard(){
    return(
       <Container 
        children={
        <div className="flex justify-between py-4 px-4">
        
        <div className="w-[900px] flex-col items-center justify-between rounded-lg">
        <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-lg font-bold flex items-center gap-2">
          Olá, bom dia <span className="animate-waving-hand">👋</span>
        </h1>
  
        <button className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
          Criar nova playlist
        </button>
        </div>
        <div className="mt-4">
        <Slider/>
        </div>
        <div className="mt-4">
        <RecentSongs/>
        </div>
        <div className="mt-4">
        <UpcomingSongs/>
        </div>
        <div className="mt-4">
        <MoodSection/>
        </div>
        </div>
      <div className="w-[322px]">
        <TopMusics/>
        <PremiumOffer/>
      </div>
      </div>
    }/>
    )
}