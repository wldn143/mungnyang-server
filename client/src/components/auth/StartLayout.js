import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  background-color: rgb(245, 230, 230);
  font-family: "suit";
`;

function StartLayout({ children }) {
  return <Container>{children}</Container>;
}
export default StartLayout;
