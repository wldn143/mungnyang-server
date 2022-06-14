import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import BackButton from "../components/feed/BackButton";
import OcrYes from "../components/ocr/OcrYes";
import OcrNo from "../components/ocr/OcrNo";
import RoundBoxF from "../components/auth/RoundBoxF";
function PetPage() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [isOcr, setIsOcr] = useState([]); //패치나 axios쓸때 얘를 써야 데이터를 꺼낼수가이쎄
  const [content, setContent] = useState();
  useEffect(() => {
    fetch("https://iwipwq-nest.herokuapp.com/OCR_result_meat")
      .then((response) => response.json())
      .then((data) => {
        setIsOcr(data.OCR_result_meat);
      });
  }, []); //IsOcr는 ocrurl들이 담겨있는 배열이당 최초로 1회 실행

  //만약에 ocrurl 테이블에 현재 로그인된 pet_id의 ocrurl정보가 있다면
  useEffect(() => {
    if (isOcr.filter((item) => item.pet_id === petId).length) {
      setContent("ocr완");
    } else {
      setContent("ocr미완");
    }
  });

  const selectComponent = {
    ocr완: <OcrYes />,
    ocr미완: <OcrNo />,
  };

  const history = useHistory();
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>반려동물 정보</div>
          <div> </div>
        </Header>
        <RoundBoxF>
          {/* <RoundBoxL>
          <AuthBox> */}
          {content ? (
            <div>{selectComponent[content]}</div>
          ) : (
            <div style={{ width: "90%", height: "425px" }}></div>
          )}
          {/* </AuthBox>
        </RoundBoxL> */}
        </RoundBoxF>
      </AuthLayout>
    </StartLayout>
  );
}
export default PetPage;
