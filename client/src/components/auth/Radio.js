import styled from "styled-components";

const Radio = styled.input.attrs({ type: "radio" })`
  & + label {
    color: #9e9e9e;
    background-color: white;
    border: 1px solid #b1b1b1;
    box-sizing: border-box;
    border-radius: 6px;

    text-align: center;
    margin-right: 15px;
    margin-bottom: 25px;
    padding: 3px 15px 3px 15px;
  }

  &:checked + label {
    color: white;
    border: solid 1px #ed7567;
    background-color: #ed7567;
  }
  display: none;
`;

export default Radio;
