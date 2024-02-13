import { useState } from "react";
import "./App.css";
import design3d from "/header.png"
import {Games} from "~/data/games"

import MainMenu from "~/app/main-menu"

function App() {
    
    const [isFullScreen, setIsFullScreen] = useState(false);
    
    return (<>
    <h1 className="text=4xl text-white">{isFullScreen}</h1>
                <Logo/>
                <Credits onClick={() => setIsFullScreen(!isFullScreen)}/>
                <MainMenu 
                   images={Games} 
                   isFullScreen={isFullScreen}
                   setIsFullScreen={() => console.log("hello")}
                   className=""
                />
            </>);

  function Credits({onClick: _onClick}: {onClick: () => void})  {

    return (
      <div className="cursor-pointer absolute z-50 right-16 top-2" onClick={_onClick}>
        <div className="font-semibold inversion-effects text-white text-xl">
          Credits
        </div>
        <div className=" font-bold animate-blink text-8xl text-amber-700">
          0
        </div>
      </div>
    );
  }

  function Logo() {

      return (
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-2  z-50 flex flex-col items-center justify-center h-[22dvh] ">
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
