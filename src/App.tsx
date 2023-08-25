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
      <div className=" absolute bottom-0 w-full h-[65%] lg:h-[80%]">
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
                <div key={Game.id} className="absolute m-2 max-w-[188px]">
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
    image: "https://wallpaperaccess.com/full/221343.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 3,
  },
  {
    name: "Game4",
    image: "https://wallpaperaccess.com/full/221344.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 4,
  },
  {
    name: "Game5",
    image: "https://wallpaperaccess.com/full/221345.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 5,
  },
  {
    name: "Game6",
    image: "https://wallpaperaccess.com/full/221346.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 6,
  },
  {
    name: "Game7",
    image: "https://wallpaperaccess.com/full/221347.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 7,
  },
  {
    name: "Game8",
    image: "https://wallpaperaccess.com/full/221348.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 8,
  },
  {
    name: "Game9",
    image: "https://wallpaperaccess.com/full/221349.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 9,
  },
  {
    name: "Game10",
    image: "https://wallpaperaccess.com/full/2213410.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 10,
  },
  {
    name: "Game11",
    image: "https://wallpaperaccess.com/full/2213411.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 11,
  },
  {
    name: "Game12",
    image: "https://wallpaperaccess.com/full/2213412.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 12,
  },
  {
    name: "Game13",
    image: "https://wallpaperaccess.com/full/2213413.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 13,
  },
  {
    name: "Game14",
    image: "https://wallpaperaccess.com/full/2213414.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 14,
  },
  {
    name: "Game15",
    image: "https://wallpaperaccess.com/full/2213415.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id:15,
  },
  {
    name: "Game16",
    image: "https://wallpaperaccess.com/full/2213416.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id:16
  },
]
