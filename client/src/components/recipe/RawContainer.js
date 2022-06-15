import { useEffect, useState } from "react";
import styled from "styled-components";
import WhiteButton from "../auth/WhiteButton";
import PinkButton from "../auth/PinkButton";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import axios from "axios";
import { axiosInstance } from "../../configuring";

const SelectedElem = styled.div`
  font-size: 13px;
  width: 340px;
  height: 65px;
`;
function RawContainer() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const location = useLocation();
  const history = useHistory();
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [meatIngredient, setMeatIngredient] = useState([]);
  const [vegeIngredient, setVegeIngredient] = useState([]);
  const [fruitsIngredient, setFruitsIngredient] = useState([]);
  const [elseIngredient, setElseIngredient] = useState([]);
  const [indexNOArr, setIndexNOArr] = useState([]);
  const [infoArr, setInfoArr] = useState([]);
  useEffect(() => {
    var arr = [];
    var arr2 = [];
    if (location.state !== undefined) {
      setSelectedIngredient(location.state.data);
    }
    selectedIngredient.filter((item) => {
      arr.push(item.id);
      arr2.push({ name: item.ingredient, category: item.category });
    });
    setIndexNOArr(arr);
    setInfoArr(arr2);
  });

  useEffect(() => {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    if (selectedIngredient.length) {
      selectedIngredient.filter((item) => {
        if (item.category === "육류") {
          arr1.push(item.ingredient);
        } else if (item.category === "채소") {
          arr2.push(item.ingredient);
        } else if (item.category === "과일") {
          arr3.push(item.ingredient);
        } else {
          arr4.push(item.ingredient);
        }
      });
      setMeatIngredient(arr1);
      setVegeIngredient(arr2);
      setFruitsIngredient(arr3);
      setElseIngredient(arr4);
    }
  }, [selectedIngredient]);

  useEffect(() => {
    if (location.state !== undefined) {
      setSelectedIngredient(location.state.data);
    }
    if (selectedIngredient.length) {
      selectedIngredient.filter((item) => {
        const more = document.createElement("div");
        more.id = "more";
        more.innerHTML = "...";
        if (item.category === "육류") {
          const meatBtn = document.getElementById("meat");
          const btn = document.createElement("button");
          btn.id = "foodBtn";
          if (meatBtn.childElementCount < meatIngredient.length) {
            if (meatBtn.childElementCount <= 3) {
              if (item.ingredient.length > 14) {
                btn.innerHTML = item.ingredient.substr(0, 14) + "...";
              } else {
                btn.innerHTML = item.ingredient;
              }
              meatBtn.appendChild(btn);
            } else if (meatBtn.childElementCount === 4) {
              meatBtn.appendChild(more);
            }
          }
        } else if (item.category === "채소") {
          const vegeBtn = document.getElementById("vege");
          const btn = document.createElement("button");
          btn.id = "foodBtn";
          if (vegeBtn.childElementCount < vegeIngredient.length) {
            if (vegeBtn.childElementCount <= 3) {
              if (item.ingredient.length > 14) {
                btn.innerHTML = item.ingredient.substr(0, 14) + "...";
              } else {
                btn.innerHTML = item.ingredient;
              }
              vegeBtn.appendChild(btn);
            } else if (vegeBtn.childElementCount === 4) {
              vegeBtn.appendChild(more);
            }
          }
        } else if (item.category === "과일") {
          const fruitsBtn = document.getElementById("fruits");
          const btn = document.createElement("button");
          btn.id = "foodBtn";
          if (fruitsBtn.childElementCount < fruitsIngredient.length) {
            if (fruitsBtn.childElementCount <= 3) {
              if (item.ingredient.length > 14) {
                btn.innerHTML = item.ingredient.substr(0, 14) + "...";
              } else {
                btn.innerHTML = item.ingredient;
              }
              fruitsBtn.appendChild(btn);
            } else if (fruitsBtn.childElementCount === 4) {
              fruitsBtn.appendChild(more);
            }
          }
        } else if (item.category === "기타") {
          const elseBtn = document.getElementById("else");
          const btn = document.createElement("button");
          btn.id = "foodBtn";
          if (elseBtn.childElementCount < elseIngredient.length) {
            if (elseBtn.childElementCount <= 3) {
              if (item.ingredient.length > 14) {
                btn.innerHTML = item.ingredient.substr(0, 14) + "...";
              } else {
                btn.innerHTML = item.ingredient;
              }
              elseBtn.appendChild(btn);
            } else if (elseBtn.childElementCount === 4) {
              elseBtn.appendChild(more);
            }
          }
        }
      });
    }
  });

  function submitRaw() {
    let body = {
      pet_id: petId,
      indexNOArr: indexNOArr,
    };
    let info = {
      infoArr: infoArr,
    };
    history.push({
      pathname: "/rawFoodRecipe",
      state: {
        data: body,
        info: info,
      },
    });
  }
  return (
    <div>
      <div style={{ height: "60px", marginTop: "10px" }}>
        <div>재료선택</div>
        <div style={{ fontSize: "12px", marginTop: "10px" }}>
          선택한 재료를 바탕으로 하루 권장 섭취 영양 성분
          <br />
          적합도를 계산합니다.
        </div>
      </div>
      <div
        style={{
          height: "340px",
          marginTop: "15px",
          color: "#ed7567",
          fontWeight: "bold",
        }}
      >
        육류
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <SelectedElem id="meat"></SelectedElem>
        </div>
        채소
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <SelectedElem id="vege"></SelectedElem>
        </div>
        과일
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <SelectedElem id="fruits"></SelectedElem>
        </div>
        기타
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <SelectedElem id="else"></SelectedElem>
        </div>
      </div>
      <div style={{ width: "339px" }}>
        <WhiteButton
          onClick={function () {
            history.push({
              pathname: "/select-raw",
              state: {
                data: selectedIngredient,
              },
            });
          }}
        >
          재료 선택하기
        </WhiteButton>
        <PinkButton onClick={submitRaw}>결과보기</PinkButton>
      </div>
    </div>
  );
}
export default RawContainer;
