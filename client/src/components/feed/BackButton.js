import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

function BackButton() {
  const history = useHistory();
  return (
    <div className='back'>
      <Button
        onClick={() => {
          history.goBack();
        }}
        icon={<LeftOutlined />}
      ></Button>
    </div>
  );
}

export default BackButton;
