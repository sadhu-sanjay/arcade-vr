import { useEffect, useRef, useState } from "react";
import "./App.css";

//@ts-expect-error i can't find the types for this
import rainbow from "/rainbow.png";
import { Games } from "../src/data/games";
import MainMenu from "./app/main-menu";
import Carousel from "~/components/organisms/carousel";

function App() {

  return (
      <>
      <Credits />
      <MainMenu />
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
