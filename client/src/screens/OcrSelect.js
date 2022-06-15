import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import StartLayout from "../components/auth/StartLayout";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import BackButton from "../components/feed/BackButton";
import "./btn.css";
import SubmitButton from "../components/auth/SubmitButton";
//import axios from "axios";
import { axiosInstance } from "../configuring";
import { useHistory } from "react-router-dom";
const FoodListBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1.5px solid #ed7567;
  border-radius: 4px;
  color: #ed7567;
  font-weight: bolder;
`;
function OcrSelect() {
  const history = useHistory();
  const [foods, setFoods] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    fetch("https://mungnyangapp.herokuapp.com/food")
      .then((response) => response.json())
      .then((foods) => {
        setFoods(foods.foods);
      });
  }, []);
  useEffect(() => {
    setFilteredFoods(() =>
      foods.filter((item) => item.foodInKor.includes(searchField))
    );
  }, [searchField, foods]);
  let [foodsArray, setFoodsArray] = useState([]);

  const ClickBtn = (a) => {
    setFoodsArray([...foodsArray, a]);
  };
  let deDup = [...new Set(foodsArray)];
  if (foodsArray.length !== deDup.length) {
    //console.log("중복!");
  } else if (foodsArray.length !== 0 && deDup.length !== 13) {
    const allergyFoodBtn = document.getElementById("allergyFoodBtn");
    const btn = document.createElement("button");
    btn.innerHTML = foodsArray[foodsArray.length - 1];
    btn.id = "allergyfoodbtn";
    if (allergyFoodBtn.childElementCount + 1 === foodsArray.length) {
      allergyFoodBtn.appendChild(btn);
    }
  }
  foodsArray = deDup;

  const currentScroll = useRef({ scrollTop: 0, scrollBottom: 300 });
  const containerRef = useRef();
  const onScroll = (e) => {
    currentScroll.current = {
      scrollTop: e.target.scrollTop,
      scrollBottom: e.target.scrollTop + 300,
    };
  };
  function submitAllergyFood() {
    var resultArray = new Array();
    let petId = sessionStorage.getItem("pet_id");
    let body = {
      pet_id: petId,
    };
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/allergyfood", body)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });

    for (let i = 0; i < foodsArray.length; i++) {
      fetch("https://mungnyangapp.herokuapp.com/food")
        .then((response) => response.json())
        .then((data) => {
          resultArray.push(
            data.foods.filter((item) => item.foodInKor === foodsArray[i])[0].id
          );

          axiosInstance
            .put(`https://mungnyangapp.herokuapp.com/allergyfood/${petId}`, {
              allergy_food_id: resultArray,
            })
            .then(function (response) {
              console.log(resultArray);
            });
        });
    }
    history.push("/ocr-complete");
  }
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>알레르기 유발 식재료 선택</div>
          <div> </div>
        </Header>
        <div
          id="allergyFoodContainer"
          style={{
            height: "160px",
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <div style={{ height: "30px", fontSize: "15px" }}>
            주의해야 할 음식
          </div>
          <div
            id="allergyFood"
            style={{
              width: "100%",
              display: "flex",
              height: "100px",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <div id="allergyFoodBtn"></div>
          </div>
        </div>
        <div
          style={{
            height: "450px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="app">
            <input
              id="searchbar"
              type="search"
              placeholder="주의해야 할 음식 정보를 입력하세요."
              onChange={(e) => setSearchField(e.target.value)}
              style={{
                marginLeft: "18px",
              }}
            ></input>
            <div
              className="list-container"
              onScroll={onScroll}
              ref={containerRef}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100px" }}>
                {filteredFoods.map((food) => (
                  <FoodListBtn
                    key={food.id}
                    food={food}
                    onClick={() => {
                      ClickBtn(food.foodInKor);
                    }}
                  >
                    {food.foodInKor}
                  </FoodListBtn>
                ))}
              </div>
            </div>
            <div style={{ height: "20px" }}></div>
            <SubmitButton onClick={submitAllergyFood}>제출하기</SubmitButton>
          </div>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrSelect;
