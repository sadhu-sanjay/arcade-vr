import { useState } from "react";
import reactLogo from "./assets/react.svg";
import header from "./assets/header5.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-100/10 absolute bottom-0 w-full h-[65%]">
        <div className="w-full h-full p-4">
          <div className="grid grid-cols-4 grid-rows-4 rounded-lg bg-red-700 w-full h-full">
            {Games.map((Game: any) => (
              <div className="rounded-lg relative bg-white m-4 z-20 bg-gradient-to-t ">
                <div className="absolute bottom-1 left-2 text-white">{Game.name}</div>
                <img
                  className="rounded-lg h-full w-full object-cover "
                  src={Game.image}
                  alt={Game.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// 16 random Games from some api
const Games = [
  {
    name: "Game1",
    image: "https://wallpaperaccess.com/full/221341.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
    id: 1,
  },
  {
    name: "Game2",
    image: "https://wallpaperaccess.com/full/221342.jpg",
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
  },
  {
    name: "Game12",
    image: "https://wallpaperaccess.com/full/2213412.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
  },
  {
    name: "Game13",
    image: "https://wallpaperaccess.com/full/2213413.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
  },
  {
    name: "Game14",
    image: "https://wallpaperaccess.com/full/2213414.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
  },
  {
    name: "Game15",
    image: "https://wallpaperaccess.com/full/2213415.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
  },
  {
    name: "Game16",
    image: "https://wallpaperaccess.com/full/2213416.jpg",
    description: "this is a Game",
    price: 10,
    rating: 4.5,
  },
];
