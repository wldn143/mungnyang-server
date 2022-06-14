import styled from "styled-components";
import React, { useState } from "react";
import StartLayout from "../components/auth/StartLayout";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import "./btn.css";
//import axios from "axios";
import { axiosInstance } from "../config";
import { useHistory } from "react-router-dom";
import comp from "../components/auth/comp";
import MeatHw from "../components/ocr/MeatHw";
import SeafoodHw from "../components/ocr/SeafoodHw";
import FruitsHw from "../components/ocr/FruitsHw";
import VegeHw from "../components/ocr/VegeHw";
import NutsHw from "../components/ocr/NutsHw";
import PinkButton from "../components/auth/PinkButton";

const OcrNavBtn = styled.button`
  height: 35px;
  color: #ed7567;
  font-size: 15px;
  margin: 0px 15px 0px 5px;
  font-weight: bolder;
  cursor: pointer;
`;
function OcrHw() {
  const history = useHistory();
  let petId = sessionStorage.getItem("pet_id");
  const [content, setContent] = useState();
  const buttonValueSetting = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setContent(name);
    if (name === "육류") {
      document.getElementById("육류").style.color = "#ed7567";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "해산물") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "#ed7567";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "과일") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "#ed7567";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "야채") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "#ed7567";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "견과류") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "#ed7567";
    }
  };
  const selectComponent = {
    육류: <MeatHw />,
    해산물: <SeafoodHw />,
    과일: <FruitsHw />,
    야채: <VegeHw />,
    견과류: <NutsHw />,
  };

  function ocrUpload() {
    let meat_body = {
      pet_id: petId,
      duck: parseInt(sessionStorage.getItem("duck")),
      lamb: parseInt(sessionStorage.getItem("lamb")),
      beef: parseInt(sessionStorage.getItem("beef")),
      chicken: parseInt(sessionStorage.getItem("chicken")),
      turckey: parseInt(sessionStorage.getItem("turckey")),
      pork: parseInt(sessionStorage.getItem("pork")),
    };

    let seafood_body = {
      pet_id: petId,
      crab: parseInt(sessionStorage.getItem("crab")),
      shrimp: parseInt(sessionStorage.getItem("shrimp")),
      mackerel: parseInt(sessionStorage.getItem("mackerel")),
      sardine: parseInt(sessionStorage.getItem("sardine")),
      anchovy: parseInt(sessionStorage.getItem("anchovy")),
      cod: parseInt(sessionStorage.getItem("cod")),
      salmon: parseInt(sessionStorage.getItem("salmon")),
      tuna: parseInt(sessionStorage.getItem("tuna")),
    };
    let fruits_body = {
      pet_id: petId,
      w_melon: parseInt(sessionStorage.getItem("w_melon")),
      melon: parseInt(sessionStorage.getItem("melon")),
      pear: parseInt(sessionStorage.getItem("pear")),
      mandarine: parseInt(sessionStorage.getItem("mandarine")),
      orange: parseInt(sessionStorage.getItem("orange")),
      apple: parseInt(sessionStorage.getItem("apple")),
      banana: parseInt(sessionStorage.getItem("banana")),
      guava: parseInt(sessionStorage.getItem("guava")),
    };
    let vege_body = {
      pet_id: petId,
      carrot: parseInt(sessionStorage.getItem("carrot")),
      corn: parseInt(sessionStorage.getItem("corn")),
      potato: parseInt(sessionStorage.getItem("potato")),
      s_potato: parseInt(sessionStorage.getItem("s_potato")),
      pumpkin: parseInt(sessionStorage.getItem("pumpkin")),
      broccoli: parseInt(sessionStorage.getItem("broccoli")),
      cabbage: parseInt(sessionStorage.getItem("cabbage")),
      pea: parseInt(sessionStorage.getItem("pea")),
      tomato: parseInt(sessionStorage.getItem("tomato")),
      seaweed: parseInt(sessionStorage.getItem("seaweed")),
    };
    let nuts_body = {
      pet_id: petId,
      bean: parseInt(sessionStorage.getItem("bean")),
      peanut: parseInt(sessionStorage.getItem("peanut")),
      rice: parseInt(sessionStorage.getItem("rice")),
      flour: parseInt(sessionStorage.getItem("flour")),
    };

    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/OCR_result_meat", meat_body)
      .then((res) => {});
    axiosInstance
      .post(
        "https://mungnyangapp.herokuapp.com/OCR_result_seafood",
        seafood_body
      )
      .then((res) => {});
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/OCR_result_fruit", fruits_body)
      .then((res) => {});
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/OCR_result_vege", vege_body)
      .then((res) => {});
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/OCR_result_nuts", nuts_body)
      .then((res) => {});
    //sessionStorage.clear();
    history.push("/ocr-result");
  }

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div style={{ fontWeight: "bold" }}>알레르기 검사 결과 입력</div>
          <div> </div>
        </Header>
        <div style={{ height: "80px", width: "85%" }}>
          반려동물 알레르기 검사지 인식 결과를
          <br /> 입력해주세요.
        </div>
        <div>
          <div>
            <div
              style={{
                width: "330px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                borderColor: "#E0E0E0",
                borderWidth: "2px",
                borderStyle: "none none solid none",
              }}
            >
              {comp.map((data) => {
                return (
                  <OcrNavBtn
                    onClick={buttonValueSetting}
                    name={data}
                    id={data}
                    key={data}
                  >
                    {data}
                  </OcrNavBtn>
                );
              })}
            </div>
            {content ? (
              <div>{selectComponent[content]}</div>
            ) : (
              <div style={{ width: "90%", height: "425px" }}></div>
            )}
          </div>
        </div>
        <PinkButton onClick={ocrUpload}>제출하기</PinkButton>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrHw;
