import { useEffect, useRef, useState } from "react";
import "./App.css";

//@ts-expect-error i can't find the types for this
import rainbow from "/rainbow.png";
import { Games } from "../src/data/games";
import MainMenu from "./app/main-menu";

function App() {
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
    <div>
      <Credits />
      <MainMenu />
    </div>
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
