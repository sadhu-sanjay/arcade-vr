import { useState } from "react";
import reactLogo from "./assets/react.svg";
import header from "./assets/header5.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello Vite + React!</h1>
        {/* add background image */}
          <img src={header} className="App-logo" alt="logo" />
        {/* <div className="heading">
    Article Heading
        </div> */}
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          laboriosam, quo numquam inventore nihil sunt minus ullam aut qui
          molestias, reiciendis dolorem saepe, explicabo earum esse distinctio
          magni officiis perferendis!
        </h1>
      </div>
    </>
  );
}

export default App;
