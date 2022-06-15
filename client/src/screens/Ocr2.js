import React from "react";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import BackButton from "../components/feed/BackButton";
import OcrType from "../image/Ocr_result_type.png";
import OcrUploadPageButton from "../image/Ocr_upload_btn.png";
import OcrHWButton from "../image/OCR_hw_btn.png";
import "./index.css";

function Ocr2() {
  const history = useHistory();
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>
            알레르기 검사결과 입력 방식 선택
          </div>
          <div> </div>
        </Header>
        <div>
          <img src={OcrType} alt='' />
        </div>
        <div id='allergy_input'>
          <button
            id='allergy_input_upload'
            onClick={function () {
              history.push("/ocr-upload");
            }}
          >
            <img src={OcrUploadPageButton} alt='' />
          </button>
          <button
            id='allergy_input_write'
            onClick={function () {
              history.push("/ocr-handwrite");
            }}
          >
            <img src={OcrHWButton} alt='' />
          </button>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}

export default Ocr2;
