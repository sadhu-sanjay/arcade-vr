import { useEffect, useRef, useState } from "react";
import "./App.css";
import hoverSound from "../src/assets/sounds/hover.wav";

import useSound from "use-sound";

import design3d from "../src/assets/rainbow.png";
import { Games } from "../src/data/games";

function App() {
  const soundUrl = hoverSound;
  const [play] = useSound(soundUrl);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      const items = Array.from(gridRef.current?.children || []);
      const index = items.indexOf(document.activeElement as HTMLElement);

      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          const prevRowItem = items[index - 4] as HTMLElement;
          prevRowItem && prevRowItem.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          const nextRowItem = items[index + 4] as HTMLElement;
          nextRowItem && nextRowItem.focus();
          break;
        case "ArrowLeft":
          event.preventDefault();
          const prevItem = items[index - 1] as HTMLElement;
          prevItem && prevItem.focus();
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextItem = items[index + 1] as HTMLElement;
          nextItem && nextItem.focus();
          break;
        case "Enter":
          event.preventDefault();
          // eslint-disable-next-line no-case-declarations
          const game = Games[index];
          if (game.gameLink) {
            window.open(game.gameLink, "_blank");
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Credits />
      <img
        className="absolute bottom-0 right-0"
        src={design3d}
        alt="3dbg Design"
      />
      <div className="bg-blue-500/10 absolute bottom-0 w-full h-[60%] lg:h-[80%]">
        <div className="w-full h-full p-4">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Games.map((Game, index) => (
              <div
                key={Game.id}
                onFocus={play}
                tabIndex={index + 1}
                className="focus:shadow-2xl shadow-lg focus:scale-105 transition-transform duration-100 border
                ease-in-out transform focus:border-collapse  focus:shadow-amber-700 focus:border-amber-700
                rounded-2xl relative shadow-gray-500 shadow-border-gray-500"
                style={{ outline: "none" }}
              >
                <img
                  className="h-auto max-w-full object-contain rounded-2xl"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
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

  function Credits() {
    const [credits, setCredits] = useState(0);

    const fetchRandomNumber = async () => {
      console.log("fetchRandomNumber");
      try {
        const response = await fetch("http://192.168.29.115:5002/credit");

        const data = await response.json();
        console.log("Result:", data.random_number);
        setCredits(data.random_number);
      } catch (error) {
        console.error("Error fetching random number:", error);
      }
    };
    return (
      <div className="frame" onClick={fetchRandomNumber}>
        <div className="font-semibold inversion-effects text-white text-xl">
          Credits
        </div>
        <div className=" font-bold animate-blink text-8xl text-amber-700">
          {credits}
        </div>
      </div>
    );
  }
}

export default App;
