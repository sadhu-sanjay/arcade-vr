import { useState } from "react";
import "./App.css";
import hoverSound from "../src/assets/sounds/hover.wav";

function App() {
  const [playSound, setPlaySound] = useState(false);
  const handleHover = () => {
    setPlaySound(true);
    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <>
      <div className="bg-blue-500/10 absolute bottom-0 w-full h-[65%] lg:h-[80%]">
        <div className="w-full h-full p-4">
          <div className="grid grid-cols-4 grid-rows-4 rounded-lg w-full h-full">
            {Games.map((Game: any) => (
              // <div
              //   key={Game.id}
              //   className="hover:shadow-2xl shadow-xl hover:scale-110 transition-transform duration-100
              // ease-in-out transform hover:border-collapse border-2 hover:shadow-amber-700 hover:border-amber-700 
              // rounded-2xl relative bg-white m-4 shadow-Fuchsia-700 shadow-border-Fuchsia-700
              // lg:min-h-[100px] 
              // "
              //   onMouseEnter={handleHover}
              // >
                <div key={Game.id} className="m-2 overflow-hidden">
                <img
                  className="rounded-2xl object-contain "
                  src={Game.image}
                  alt={Game.name}
                />
                </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
      {playSound && <audio src={hoverSound} autoPlay />}
    </>
  );
}

export default App;

// 16 random Games from some api
const Games = [
  {
    name: "Game1",
    image: "https://images.crazygames.com/turbo-crash/20230815180910/turbo-crash-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 1,
  },
  {
    name: "Game2",
    image: "https://images.crazygames.com/shellshockersio/20230203070909/shellshockersio-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 2,
  },
  {
    name: "Game3",
    image: "https://images.crazygames.com/holey-io-battle-royale/20230815121211/holey-io-battle-royale-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 3,
  },
  {
    name: "Rocket Bot Royal",
    image: "https://images.crazygames.com/rocket-bot-royale/20220310095708/rocket-bot-royale-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 4,
  },
  {
    name: "Game5",
    image: "https://images.crazygames.com/games/kirka-io/cover-1649101040624.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 5,
  },
  {
    name: "Game6",
    image: "https://images.crazygames.com/games/sky-riders-buk/cover-1689090304613.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 6,
  },
  {
    name: "Game7",
    image: "https://images.crazygames.com/cups---water-sort-puzzle/20221212114329/cups---water-sort-puzzle-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 7,
  },
  {
    name: "Game8",
    image: "https://images.crazygames.com/helix-jump/20220519091317/helix-jump-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 8,
  },
  {
    name: "Game9",
    image: "https://images.crazygames.com/my-crystal-underwater/20230814084625/my-crystal-underwater-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 9,
  },
  {
    name: "Game10",
    image: "https://images.crazygames.com/games/slash-royal/cover-1655221266157.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 10,
  },
  {
    name: "Game11",
    image: "https://images.crazygames.com/sniper-mission-blj/20230811170517/sniper-mission-blj-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 11,
  },
  {
    name: "Game12",
    image: "https://images.crazygames.com/bubble-fall/20230823180143/bubble-fall-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 12,
  },
  {
    name: "Game13",
    image: "https://images.crazygames.com/escape-underground-demo/20230818153631/escape-underground-demo-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 13,
  },
  {
    name: "Game14",
    image: "https://images.crazygames.com/skibidi-toilets-infection/20230807101836/skibidi-toilets-infection-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 14,
  },
  {
    name: "Game15",
    image: "https://images.crazygames.com/blaster-rush/20230821092739/blaster-rush-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id:15,
  },
  {
    name: "Game16",
    image: "https://images.crazygames.com/cubie-jump/20230822080049/cubie-jump-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id:16
  },
]
