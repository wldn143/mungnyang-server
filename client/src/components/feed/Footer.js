import styled from "styled-components";

const SFooter = styled.div`
  width: 100%;
  height: 150px;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Footer({ children }) {
  return <SFooter>{children}</SFooter>;
}

export default Footer;
