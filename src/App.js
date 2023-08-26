import "./App.css";
import { useState, useRef } from "react";
import DiceRoll from "./components/DiceRoll";
import UserInput from "./components/UserInput";

function App() {
  const diceInputRef = useRef(0);
  const [diceArr, setDiceArr] = useState([]);

  const handleRoll = () => {
    const numOfDice = parseInt(diceInputRef.current.value);
    setDiceArr(new Array(numOfDice).fill(""));
  };

  return (
    <div className="wrapper">
      <UserInput handleRoll={handleRoll} diceInputRef={diceInputRef} />
      <div className="dice-grid">
        {diceArr.map((dice, index) => (
          <DiceRoll key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
