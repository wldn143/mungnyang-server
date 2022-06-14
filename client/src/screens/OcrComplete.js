import React from "react";
import { useHistory } from "react-router-dom";
import AuthBox from "../components/auth/AuthBox";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import Check from "../image/check.png";
import SubmitButton from "../components/auth/SubmitButton";

function OcrComplete() {
  const history = useHistory();
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div style={{ fontWeight: "bold" }}>알레르기 정보 입력 완료</div>
          <div> </div>
        </Header>

        <AuthBox>
          <div>
            <img src={Check} style={{ height: "200px" }} />
          </div>
        </AuthBox>
        <SubmitButton
          onClick={function () {
            history.push("./log-in");
          }}
        >
          메인으로 이동하기
        </SubmitButton>
      </AuthLayout>
    </StartLayout>
  );
}

export default OcrComplete;
