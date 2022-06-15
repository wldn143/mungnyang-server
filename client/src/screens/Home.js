import styled from "styled-components";
import React from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBox from "../components/auth/RoundBox";
import PinkButton from "../components/auth/PinkButton";
import WhiteButton from "../components/auth/WhiteButton";
import StartText from "../components/auth/StartText";
import { useHistory } from "react-router-dom";

const StartText1 = styled.p`
  font-weight: bold;
  font-size: 25px;
`;
const StartText2 = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;
const StartText3 = styled.p`
  font-weight: lighter;
  font-size: 15px;
  color: #777777;
`;
function Home() {
  const history = useHistory();

  return (
    <StartLayout>
      <RoundBox>
        <StartText>
          <StartText1>시작하기</StartText1>
          <StartText2>
            멍냥식탁이 여러분의 반려동물 상태에 최적화된
            <br />
            자연식 및 간식 정보를 제공해드려요!
          </StartText2>
          <StartText3>
            반려동물의 알레르기 검사지를 업로드 하고
            <br />
            맞춤형 상품 정보를 받아보세요.
          </StartText3>
        </StartText>
        <WhiteButton
          onClick={function () {
            history.push("./log-in");
          }}
        >
          로그인
        </WhiteButton>
        <PinkButton
          onClick={function () {
            history.push("/sign-up");
          }}
        >
          회원가입
        </PinkButton>
      </RoundBox>
    </StartLayout>
  );
}
export default Home;
