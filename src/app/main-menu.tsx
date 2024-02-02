import MainMenuLayout from "../components/layouts/main-menu-layout";
import { Games } from "../data/games";

//@ts-expect-error i can't find the types for this
import useSound from "use-sound";
import hoverSound from "/hover.wav";

export default function MainMenu() {

    const play = useSound(hoverSound);

    return (
        <MainMenuLayout>
           <div
        className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 overflow-scroll"
      >
        {Games.map((Game, index) => (
          <div
            key={Game.id}
            onFocus={play}
            tabIndex={index + 0}
            className="focus:shadow-2xl shadow-lg focus:scale-105 transition-transform duration-100 border
                ease-in-out transform focus:border-collapse  focus:shadow-amber-701 focus:border-amber-700
                rounded-3xl relative shadow-gray-500 shadow-border-gray-500"
            style={{ outline: "none" }}
          >
            <img
              className="h-auto max-w-full object-contain rounded-3xl"
              // src="https://flowbite.s2.amazonaws.com/docs/gallery/square/image.jpg"
              src={Game.image}
              alt={Game.name}
            />
          </div>
        ))}
      </div>  
            {/* <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold">Main Menu</h1>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Start Game</button>
                    <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Options</button>
                    <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">About</button>
                </div>
            </div> */}
        </MainMenuLayout>
    )
}
