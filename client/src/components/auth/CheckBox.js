import styled from "styled-components";

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  display: none;
  & + label {
    color: #9e9e9e;
    background-color: #ffffff;
    border: 1px solid #b1b1b1;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 3px 15px 3px 15px;
    text-align: center;
    margin-right: 15px;
  }

  &:checked + label {
    color: white;
    border: solid 1px #ed7567;
    background-color: #ed7567;
  }
`;

export default CheckBox;
