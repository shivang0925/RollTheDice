import { useState } from "react";
import styled from "styled-components";
import NumberSelection from "./NumberSelection";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { Button } from "./Styled/Button";
import { Button_upper } from "./Styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [diceRolled, setDiceRolled] = useState("1");
  const [NumberSelected, setNumberSelected] = useState();
  const [score, setScore] = useState("0");
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!NumberSelected) {
      setError("You have not selected any number");
      return;
    } else if (NumberSelected) {
      setError("");
      const randomNumber = getRandomNumber(1, 7);
      setDiceRolled((prev) => randomNumber);

      if (NumberSelected === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }
      setNumberSelected(undefined);
    }
  };

  const score_reset = () => {
    setScore("0");
  };

  const handleShowRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <>
      <Div className="gameplay_page">
        <TotalScore score={score} />
        <NumberSelection
          error={error}
          setNumberSelected={setNumberSelected}
          NumberSelected={NumberSelected}
        />
      </Div>
      <RollDice
        rollDice={rollDice}
        diceRolled={diceRolled}
        setDiceRolled={setDiceRolled}
      />
      <Button_down>
        <Button_upper onClick={score_reset}>Reset Score</Button_upper>
        <Button onClick={handleShowRules}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </Button_down>

      {showRules && <Rules />}
    </>
  );
}

export default GamePlay;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

const Button_down = styled.div`
  margin-inline-end: 573px;
  margin-top: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
