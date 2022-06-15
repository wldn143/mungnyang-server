import styled from "styled-components";

const SubmitButton = styled.button`
  background-color: #ed7567;
  color: white;
  text-align: center;
  opacity: ${(props) => (props.disabled ? "0.2" : "")};
  border: solid 0.5px #ed7567;
  border-radius: 7px;
  width: 352px;
  height: 49px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default SubmitButton;
