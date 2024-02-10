import Carousel from "~/components/templates/carousel"
import {Games} from "~/data/games"

export default function MainMenu2() {

    return (
            <>
            <div className="bg-pink-800 p-2 w-full h-full flex-col relative top-52">
            <div className="w-1/2 grid grid-cols-4 grid-row-4 p-8 gap-4 bg-red-900">
                {Games.map((Game, index) => (
                    <div
                        key={Game.id}
                        // onFocus={play}
                        tabIndex={index + 0}
                        className="focus:shadow-2xl shadow-lg focus:scale-105 transition-transform duration-100 border
                        ease-in-out transform focus:border-collapse  focus:shadow-amber-701 focus:border-amber-700
                        rounded-3xl relative shadow-gray-500 shadow-border-gray-500 min-h-[200px] "
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
            <div className="font-bold text-lg ">
                Sanjay Main Menu MainMenu2
            </div>
            </div>
            </>
           )
}
