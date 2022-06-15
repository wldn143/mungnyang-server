import "./App.css";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import { Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp2 from "./screens/SignUp2";
import Ocr from "./screens/Ocr";
import "antd/dist/antd.min.css";
import SignUp3 from "./screens/SignUp3";
import SignUpComplete from "./screens/SignUpComplete";
import OcrUpload from "./screens/OcrUpload";
import OcrSelect from "./screens/OcrSelect";
import MyPage from "./screens/MyPage";
import MainPage from "./screens/MainPage";
import React, { useState, useEffect } from "react";
import OcrResult from "./screens/OcrResult";
import OcrComplete from "./screens/OcrComplete";
import PetPage from "./screens/PetPage";
import OcrHw from "./screens/OcrHw";
import Ocr2 from "./screens/Ocr2";
import RecipeDetail from "./components/recipe/RecipeDetail";
import SelectRaw from "./components/recipe/SelectRaw";
import RawFoodRecipe from "./components/recipe/RawFoodRecipe";
import RecipeDes from "./components/recipe/RecipeDes";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isPetInput, setIsPetInput] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  useEffect(() => {
    //회원가입 진행중인지 아닌지 체크
    if (sessionStorage.getItem("signingup") === null) {
      console.log("isSigningUp ?? :: ", isSigningUp);
    } else {
      console.log("isSigningUp ?? :: ", isSigningUp);
      setIsSigningUp(true);
      console.log("isSigningUp ?? :: ", isSigningUp);
    }
  });
  useEffect(() => {
    //로그인 완료인지 아닌지 체크
    if (sessionStorage.getItem("email") === null) {
      // sessionStorage 에 user 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      console.log("isLogin ?? :: ", isLogin);
      setIsLogin(true);

      console.log("isLogin ?? :: ", isLogin);
    }
  });

  useEffect(() => {
    if (sessionStorage.getItem("pet") === null) {
      console.log("isPetInput ?? :: ", isPetInput);
    } else {
      console.log("isPetInput ?? :: ", isPetInput);
      setIsPetInput(true);
      console.log("isPetInput ?? :: ", isPetInput);
    }
  });

  return (
    <div>
      <Route exact={true} path='/'>
        <Home />
      </Route>
      <Route exact={true} path='/log-in'>
        {isLogin ? <MainPage isLogin={isLogin} /> : <Login />}
      </Route>

      <Route exact={true} path='/sign-up'>
        <SignUp />
      </Route>
      <Route exact={true} path='/sign-up2'>
        <SignUp2 />
      </Route>
      <Route exact={true} path='/mainpage'>
        <MainPage />
      </Route>
      {/* <Route exact={true} path="/sign-up2">
        {isSigningUp ? <SignUp2 isSigningUp={isSigningUp} /> : <SignUp />}
      </Route> */}
      {/* <Route exact={true} path="/sign-up2">
        {isSigningUp ? (
          isPetInput ? (
            <Route exact={true} path="/sign-up3">
              <SignUp3 />
            </Route>
          ) : (
            <Route exact={true} path="/sign-up2">
              <SignUp2 />
            </Route>
          )
        ) : (
          <SignUp />
        )}
      </Route> */}

      {/* <Route exact={true} path="/sign-up">
        {isLogin ? (
          isPetInput ? (
            <SignUp3 isLogin={isLogin} />
          ) : (
            <SignUp2 isLogin={isLogin} />
          )
        ) : (
          <SignUp />
        )}
      </Route> */}

      {/* <Route path={routes.signUp}>
        <SignUp />
      </Route> */}

      <Route exact={true} path='/sign-up3'>
        <SignUp3 />
      </Route>
      <Route exact={true} path='/sign-up-complete'>
        <SignUpComplete />
      </Route>
      <Route exact={true} path='/ocr'>
        <Ocr />
      </Route>
      <Route exact={true} path='/ocr-upload'>
        <OcrUpload />
      </Route>
      <Route exact={true} path='/ocr-select'>
        <OcrSelect />
      </Route>
      <Route exact={true} path='/mypage'>
        <MyPage />
      </Route>
      <Route exact={true} path='/ocr-result'>
        <OcrResult />
      </Route>
      <Route exact={true} path='/ocr-complete'>
        <OcrComplete />
      </Route>
      <Route exact={true} path='/petpage'>
        <PetPage />
      </Route>
      <Route exact={true} path='/ocr-handwrite'>
        <OcrHw />
      </Route>
      <Route exact={true} path='/ocr2'>
        <Ocr2 />
      </Route>
      <Route exact={true} path='/detail'>
        <RecipeDetail />
      </Route>
      <Route exact={true} path='/select-raw'>
        <SelectRaw />
      </Route>
      <Route exact={true} path='/rawFoodRecipe'>
        <RawFoodRecipe />
      </Route>
      <Route exact={true} path='/recipe_des'>
        <RecipeDes />
      </Route>
    </div>
  );
}

export default App;
