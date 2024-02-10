import { Games } from "~/data/games";

import Carousel from "~/components/organisms/carousel";

export default function MainMenu() {

  return (
  <div className="w-full h-full ">
    <Carousel
      images={Games}
      isFullScreen={false}
      setIsFullScreen={() => {}}
    />
    </div>

    // {Games.map((Game, index) => (
    //             <div
    //             key={Game.id}
    //             onFocus={play}
    //             tabIndex={index + 0}
    //             className="focus:shadow-2xl shadow-lg focus:scale-105 transition-transform duration-100 border
    //             ease-in-out transform focus:border-collapse  focus:shadow-amber-701 focus:border-amber-700
    //             rounded-3xl relative shadow-gray-500 shadow-border-gray-500"
    //             style={{ outline: "none" }}
    //             >
    //             <img
    //             className="h-auto max-w-full object-contain rounded-3xl"
    //             // src="https://flowbite.s2.amazonaws.com/docs/gallery/square/image.jpg"
    //             src={Game.image}
    //             alt={Game.name}
    //             />
    //             </div>
    //             ))}
    // <div className="flex flex-col items-center justify-center w-full h-full">
    //     <h1 className="text-4xl font-bold">Main Menu</h1>
    //     <div className="flex flex-col items-center justify-center w-full h-full">
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Start Game</button>
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Options</button>
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">About</button>
    //     </div>
    //     </div>
  );
}
