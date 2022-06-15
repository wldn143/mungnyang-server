import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import PinkButton from "../components/auth/PinkButton";
import OcrDatagraph from "../components/ocr/OcrDatagraph";
import axios from "axios";

function OcrResult() {
  const history = useHistory();
  const [meatOcrResult, setMeatOcrResult] = useState([]);
  const [seafoodOcrResult, setSeafoodOcrResult] = useState([]);
  const [fruitsOcrResult, setFruitsOcrResult] = useState([]);
  const [VegeOcrResult, setVegeOcrResult] = useState([]);
  const [NutsOcrResult, setNutsOcrResult] = useState([]);

  useEffect(() => {
    fetch("https://mungnyangapp.herokuapp.com/OCR_result_meat")
      .then((response) => response.json())
      .then((data) => {
        setMeatOcrResult(data.OCR_result_meat);
      });
    fetch("https://mungnyangapp.herokuapp.com/OCR_result_seafood")
      .then((response) => response.json())
      .then((data) => {
        setSeafoodOcrResult(data.OCR_result_seafood);
      });
    fetch("https://mungnyangapp.herokuapp.com/OCR_result_fruit")
      .then((response) => response.json())
      .then((data) => {
        setFruitsOcrResult(data.OCR_result_fruit);
      });
    fetch("https://mungnyangapp.herokuapp.com/OCR_result_vege")
      .then((response) => response.json())
      .then((data) => {
        setVegeOcrResult(data.OCR_result_vege);
      });
    fetch("https://mungnyangapp.herokuapp.com/OCR_result_nuts")
      .then((response) => response.json())
      .then((data) => {
        setNutsOcrResult(data.OCR_result_nuts);
      });
  }, []);

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div style={{ fontWeight: "bold" }}>인식 결과 확인</div>
          <div> </div>
        </Header>
        <div style={{ height: "80px", width: "85%" }}>
          반려동물 알레르기 검사지 인식 결과를
          <br /> 확인해주세요.
        </div>
        <OcrDatagraph
          meatOcrResult={meatOcrResult}
          seafoodOcrResult={seafoodOcrResult}
          fruitsOcrResult={fruitsOcrResult}
          VegeOcrResult={VegeOcrResult}
          NutsOcrResult={NutsOcrResult}
        />
        <PinkButton
          onClick={function () {
            history.push("./log-in");
          }}
        >
          맞춤 레시피 구경하러가기
        </PinkButton>
      </AuthLayout>
    </StartLayout>
  );
}

export default OcrResult;
