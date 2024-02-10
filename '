import { useState } from "react";
import "./App.css";
import design3d from "/header.png"
import {Games} from "~/data/games"

//@ts-expect-error i can't find the types for this
import rainbow from "/rainbow.png";
import MainMenu from "~/app/main-menu"

function App() {

    return (<>
                <Logo/>
                <Credits />
                <MainMenu 
                   images={Games} 
                   isFullScreen={true}
                   setIsFullScreen={() => console.log("hello")}
                   className=""
                />
            </>);

  function Credits() {
    const [credits, setCredits] = useState(0);

    const fetchRandomNumber = async () => {
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
      <div className="absolute z-50 right-16 top-2" onClick={fetchRandomNumber}>
        <div className="font-semibold inversion-effects text-white text-xl">
          Credits
        </div>
        <div className=" font-bold animate-blink text-8xl text-amber-700">
          {credits}
        </div>
      </div>
    );
  }

  function Logo() {

      return (
        <div className="absolute left-1/2 -translate-x-1/2 top-2  z-50 flex flex-col items-center justify-center h-[22dvh] ">
                <img
                  src={design3d}
                  alt="Bamigos Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
            </div>)
    }
}

export default App;
