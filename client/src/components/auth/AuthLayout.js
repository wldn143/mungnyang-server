import styled from "styled-components";

const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 390px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: none;
`;

function AuthLayout({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default AuthLayout;
