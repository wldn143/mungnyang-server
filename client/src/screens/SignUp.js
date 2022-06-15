import React, { useState } from "react";
import StartLayout from "../components/auth/StartLayout";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import BackButton from "../components/feed/BackButton";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    //console.log(name);
    //console.log(email);
    //console.log(password);

    let body = {
      name: name,
      email: email,
      password: password,
    };
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    //axios.post("http://localhost:8080/user", body).then((res) => {
    //  console.log(res.data.result);
    ///  history.replace("/sign-up2");
    //sessionStorage.setItem("signingup", "o");
    //document.location.href = "/sign-up";
    //});
    history.push("/sign-up2");
  };

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>사용자 정보 입력</div>
          <div> </div>
        </Header>
        <div
          className='WhiteSpace'
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <AuthBox>
          <form onSubmit={submitHandler}>
            <Input
              name='name'
              type='text'
              placeholder='이름'
              value={name}
              onChange={nameHandler}
              required
            />
            <div>
              <Input
                name='email'
                type='email'
                placeholder='이메일'
                value={email}
                onChange={emailHandler}
                required
              />
              <div id='emailvaild'></div>
            </div>
            <Input type='text' placeholder='전화번호' />
            <Input
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={passwordHandler}
              required
            />
            <Input
              type='password'
              name='confirmPassword'
              placeholder='비밀번호 확인'
              //value={confirmPassword}
              required
            />
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
      </AuthLayout>
    </StartLayout>
  );
}
export default SignUp;
