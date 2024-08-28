import { useState } from "react";
import styled from "styled-components";

function NumberSelection({ NumberSelected, setNumberSelected, error }) {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Box_Container>
      <p className="error">{error}</p>
      <div className="boxes">
        {arr.map((value, i) => (
          <Box
            key={i}
            isNumberSelected={value == NumberSelected}
            onClick={() => setNumberSelected(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Box_Container>
  );
}

export default NumberSelection;

const Box_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 50px;
  gap: 10px;
  margin-top: 20px;

  .boxes {
    display: flex;
    gap: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }

  .error {
    color: red;
    font-weight: 300;
    font-size: 16px;
  }
`;

const Box = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid black;
  text-align: center;
  align-content: center;
  font-size: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.isNumberSelected ? "black" : "white")};
  color: ${(props) => (!props.isNumberSelected ? "black" : "white")};
`;
