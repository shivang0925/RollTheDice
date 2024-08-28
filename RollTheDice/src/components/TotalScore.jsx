import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <Score_container>
      <div className="score">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </Score_container>
  );
}

export default TotalScore;

const Score_container = styled.div`
  max-width: 200px;
  text-align: center;

  .score h1 {
    font-size: 10vh;
    font-weight: 450;
  }

  .score p {
    font-size: 20px;
    font-weight: 700;
  }
`;
