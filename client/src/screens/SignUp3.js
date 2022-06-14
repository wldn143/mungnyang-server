import React, { useState } from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBoxL from "../components/auth/RoundBoxL";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Radio from "../components/auth/Radio";
import CheckBox from "../components/auth/CheckBox";
import BackButton from "../components/feed/BackButton";

function SignUp3(props) {
  const history = useHistory();
  const isLogin = props.isLogin;
  const [health_problem, set_health] = useState("");
  const [pet_id, set_Pet_id] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    var health = new Array();
    document.querySelectorAll('input[name="health"]:checked').forEach((el) => {
      health.push(el.value);
      set_health(health);
    });

    sessionStorage.setItem("health", health);
    history.push("/sign-up-complete");
  };

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>반려동물 정보 입력</div>
          <div> </div>
        </Header>
        <div
          className='WhiteSpace'
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <RoundBoxL>
          <AuthBox>
            <form onSubmit={submitHandler}>
              <p>산책을 매일 하나요?</p>

              <Radio id='walk1' name='walk' value='yes' />
              <label htmlFor='walk1'>YES</label>
              <Radio id='walk2' name='walk' value='no' />
              <label htmlFor='walk2'>NO</label>
              <div
                className='margin'
                style={{
                  marginBottom: "25px",
                }}
              ></div>
              <p>건강고민이 있나요?</p>
              <div
                className='heathContainer'
                style={{
                  width: "105%",
                  height: "100px",
                }}
              >
                <div
                  className='select'
                  style={{
                    marginTop: "18px",
                    marginBottom: "20px",
                  }}
                >
                  <CheckBox id='health1' name='health' value='1' />
                  <label htmlFor='health1'>알레르기</label>
                  <CheckBox id='health2' name='health' value='2' />
                  <label htmlFor='health2'>장</label>
                  <CheckBox id='health3' name='health' value='3' />
                  <label htmlFor='health3'>이빨/구강</label>
                  <CheckBox id='health4' name='health' value='4' />
                  <label htmlFor='health4'>뼈/관절</label>
                </div>
                <div
                  className='select'
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <CheckBox id='health5' name='health' value='5' />
                  <label htmlFor='health5'>비만</label>
                  <CheckBox id='health6' name='health' value='6' />
                  <label htmlFor='health6'>피부/모질</label>
                  <CheckBox id='health7' name='health' value='7' />

                  <label htmlFor='health7'>노령</label>
                  <CheckBox id='health8' name='health' value='8' />
                  <label htmlFor='health8'>신장/요로</label>
                </div>
                <div
                  className='select'
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <CheckBox id='health9' name='health' value='9' />
                  <label htmlFor='health9'>호흡기</label>
                  <CheckBox id='health10' name='health' value='10' />
                  <label htmlFor='health10'>당뇨</label>

                  <CheckBox id='health11' name='health' value='11' />
                  <label htmlFor='health11'>심장</label>
                  <CheckBox id='health12' name='health' value='12' />
                  <label htmlFor='health12'>눈/귀</label>
                </div>
              </div>
              <div
                className='margin'
                style={{
                  marginBottom: "25px",
                }}
              ></div>
              <p>알레르기가 있나요?</p>

              <Radio id='allergy1' name='allergy' value='no' />
              <label htmlFor='allergy1'>YES</label>
              <Radio id='allergy2' name='allergy' value='yes' />
              <label htmlFor='allergy2'>NO</label>
              <div
                id='WhiteSpace'
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "30px",
                }}
              ></div>
              <SubmitButton type='submit'>다음</SubmitButton>
            </form>
          </AuthBox>
        </RoundBoxL>
      </AuthLayout>
    </StartLayout>
  );
}
export default SignUp3;
