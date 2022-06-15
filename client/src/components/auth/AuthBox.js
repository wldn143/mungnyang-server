import styled from "styled-components";

const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 420px;
`;

function AuthBox({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default AuthBox;
