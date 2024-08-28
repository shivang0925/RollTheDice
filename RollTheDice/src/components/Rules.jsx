import styled from "styled-components";

function Rules() {
  return (
    <Rules_Container>
      <h2>How to play dice game</h2>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice, if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 points will be dedcuted </p>
      </div>
    </Rules_Container>
  );
}

export default Rules;

const Rules_Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-right: 290px;
    font-size: 15px;
  }
  div {
    margin-top: 10px;
    font-size: 10px;
  }
`;
