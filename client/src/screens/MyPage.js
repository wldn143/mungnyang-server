import React from "react";
import StartLayout from "../components/auth/StartLayout";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import BackButton from "../components/feed/BackButton";
import RoundBox from "../components/auth/RoundBox";
import AddBox from "../components/auth/AddBox";
import PetInfoBox from "../components/auth/PetInfoBox";
function MyPage() {
  const history = useHistory();
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>마이페이지</div>
          <div> </div>
        </Header>
        <div
          className='WhiteSpace'
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "17px",
          }}
        >
          <PetInfoBox></PetInfoBox>
          <button
            id='allergy_input_write'
            onClick={function () {
              history.push("/sign-up2");
            }}
          >
            <AddBox>
              <p>반려동물 정보 추가</p>
            </AddBox>
          </button>
        </div>

        <RoundBox>
          <AuthBox></AuthBox>
        </RoundBox>
      </AuthLayout>
    </StartLayout>
  );
}
export default MyPage;
