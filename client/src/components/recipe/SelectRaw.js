import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StartLayout from "../auth/StartLayout";
import AuthLayout from "../auth/AuthLayout";
import SubmitButton from "../auth/SubmitButton";
import { useHistory } from "react-router-dom";

const FoodListBtn = styled.button`
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1.5px solid #ed7567;
  border-radius: 4px;
  color: #ed7567;
  font-weight: bolder;
  //font-size: 5px;
`;
function SelectRaw() {
  //재료정보 추가하기 페이지
  const history = useHistory();

  const [foods, setFoods] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  useEffect(() => {
    fetch("https://mungnyangapp.herokuapp.com/raw_ingredient")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.raw);
      });
  }, []);
  useEffect(() => {
    setFilteredFoods(() =>
      foods.filter((item) => item.ingredient.includes(searchField))
    );
  }, [searchField, foods]);
  let [foodsArray, setFoodsArray] = useState([]);

  const ClickBtn = (id, category, ingredient) => {
    setFoodsArray([...foodsArray, { id, ingredient, category }]);
  };
  let deDup = [...new Set(foodsArray.map(JSON.stringify))].map(JSON.parse);
  if (foodsArray.length !== deDup.length) {
    //console.log("중복!");
  } else if (foodsArray.length !== 0 && deDup.length !== 13) {
    const allergyFoodBtn = document.getElementById("allergyFoodBtn");
    const btn = document.createElement("button");
    if (foodsArray[foodsArray.length - 1].ingredient.length >= 7) {
      btn.innerHTML =
        foodsArray[foodsArray.length - 1].ingredient.substr(0, 7) + "...";
    } else if (foodsArray[foodsArray.length - 1].ingredient.length < 7) {
      btn.innerHTML = foodsArray[foodsArray.length - 1].ingredient;
    }
    btn.id = "selectedfoodbtn";
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

  function submitRawIngredients() {
    setSelectedIngredient(foodsArray);
    history.push({
      pathname: "/mainpage",
      state: {
        data: foodsArray,
      },
    });
  }
  return (
    <div>
      <StartLayout>
        <AuthLayout>
          <div>생식 재료 선택하기</div>
          <div
            id="allergyFoodContainer"
            style={{
              height: "160px",
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              marginLeft: "33px",
            }}
          >
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
                placeholder="선택할 생식 재료를 입력하세요."
                onChange={(e) => setSearchField(e.target.value)}
                style={{
                  marginLeft: "18px",
                }}
              ></input>
              <div
                className="list-container"
                onScroll={onScroll}
                ref={containerRef}
                style={{
                  textAlign: "center",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {filteredFoods.map((food) => (
                    <FoodListBtn
                      key={food.id}
                      food={food}
                      onClick={() => {
                        ClickBtn(food.id, food.category, food.ingredient);
                      }}
                    >
                      {food.ingredient}
                    </FoodListBtn>
                  ))}
                </div>
              </div>
              <div style={{ height: "20px" }}></div>
              <SubmitButton onClick={submitRawIngredients}>
                제출하기
              </SubmitButton>
            </div>
          </div>
        </AuthLayout>
      </StartLayout>
    </div>
  );
}
export default SelectRaw;
