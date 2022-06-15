import styled from "styled-components";
import { icon } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const Box = styled.div`
  width: 122px;
  height: 131px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-size: 12px;
  color: #ed7567;
  padding-bottom: 5px;
  font-weight: border;
`;

const PlusIcon = styled.div`
  font-size: 50px;
  color: #ed7567;
  font-weight: lighter;
  margin-bottom: 5px;
`;

function AddBox({ children }) {
  return (
    <Box>
      <PlusIcon>
        <PlusCircleOutlined />
      </PlusIcon>
      {children}
    </Box>
  );
}
export default AddBox;
