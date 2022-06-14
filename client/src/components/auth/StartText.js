import styled from "styled-components";

const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 88%;
  margin-bottom: 30px;
`;

function StartText({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default StartText;
