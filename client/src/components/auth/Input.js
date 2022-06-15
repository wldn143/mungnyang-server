import styled from "styled-components";

const Input = styled.input`
  width: 352px;
  height: 50px;
  border: 1px solid #9c9c9c;
  //padding: 7px;
  //background-color: #fafafa;
  margin-bottom: 23px;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 8px;
  &::placeholder {
    //They are the rules, we need to use :: for placeholder, and : for last child.
    font-size: 12px;
  }
  &:focus {
    &::-webkit-input-placeholder {
      color: transparent;
    }

    &::-moz-placeholder {
      color: transparent;
    }

    &:-ms-input-placeholder {
      color: transparent;
    }

    &::-ms-input-placeholder {
      color: transparent;
    }
  }
`;

export default Input;
