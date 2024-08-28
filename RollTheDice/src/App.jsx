import { useState } from "react";

import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggle = () => {
    setIsGameStarted((val) => !val);
  };
  return <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggle} />}</>;
}

export default App;
