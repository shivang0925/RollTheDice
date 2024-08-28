import styled from "styled-components";

function RollDice({ diceRolled, rollDice }) {
  return (
    <Dice_Container>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/Dices/dice_${diceRolled}.png`} alt="Dice-image" />
        <p>Click on Dice to roll</p>
      </div>
    </Dice_Container>
  );
}

export default RollDice;

const Dice_Container = styled.div`
  display: flex;
  justify-content: center;
  .dice img {
    width: 170px;
    cursor: pointer;
  }
  .dice p {
    text-align: center;
    font-weight: 600;
  }
`;
