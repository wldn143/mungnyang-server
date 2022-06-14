import styled from "styled-components";

const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 390px;
  height: 550px;
  box-shadow: 0px -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  border: none;
`;

function RoundBoxL({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default RoundBoxL;
