import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  background-color: black;
  color: white;
  font-weight: 900;
  cursor: pointer;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.3s background ease-in;
  align-self: end;
  margin-left: 58%;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.278s background ease-in;
  }
`;

export const Button_upper = styled.button`
  min-width: 220px;
  background-color: white;
  color: black;
  font-weight: 900;
  cursor: pointer;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  transition: 0.3s background ease-in;
  align-self: end;
  margin-left: 58%;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.278s background ease-in;
  }
`;
