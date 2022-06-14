import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import recipeType from "../auth/recipeComp";
import CookedContainer from "./CookedContainer";
import PureeContainer from "./PureeContainer";
import RawContainer from "./RawContainer";
import SnackContainer from "./SnackContainer";
import RoundBoxM from "../auth/RoundBoxM";
const CategoryBtn = styled.button`
  width: 54px;
  height: 54px;
  border: 2px solid #ed7567;
  border-radius: 27px;
  cursor: pointer;
  font-weight: bold;
  color: #ed7567;
`;

function RecipeList() {
  const [content, setContent] = useState();
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const history = useHistory();
  const [recipe, setRecipe] = useState([]);
  const [petInfo, setPetInfo] = useState([]);
  const [petKind, setPetKind] = useState("");
  const [allergyId, setAllergyId] = useState([]); //해당 반려동물의 알러지id배열
  const [allergyFoodArr, setAllergyFoodArr] = useState([]); //해당 반려동물의 알러지음식 배열
  const [foods, setfoods] = useState([]);

  //로그인된 유저의 반려동물 정보
  useEffect(() => {
    fetch("https://iwipwq-nest.herokuapp.com/pet")
      .then((response) => response.json())
      .then((json) => {
        const foundData = json.pets.find((data) => data.pet_id === petId);
        setPetInfo(foundData);
      });
  }, []);

  //종 확인
  useEffect(() => {
    if (petInfo.cat_or_dog === "dog") {
      setPetKind("강아지");
    } else if (petInfo.cat_or_dog === "cat") {
      setPetKind("고양이");
    }
  }, [petInfo]);

  //음식 전체 리스트
  useEffect(() => {
    if (foods.length === 0) {
      fetch("https://iwipwq-nest.herokuapp.com/food")
        .then((response) => response.json())
        .then((json) => {
          setfoods(json.foods);
        });
    }
  }, []);

  //알러지 음식 확인 ID배열
  useEffect(() => {
    if (allergyId.length === 0) {
      fetch("https://iwipwq-nest.herokuapp.com/allergyfood")
        .then((response) => response.json())
        .then((json) => {
          const foundData = json.allergy_food.find(
            (data) => data.pet_id === petId
          );
          if (foundData !== undefined && foundData.allergy_food_id !== null) {
            var a = foundData.allergy_food_id.split(",").map(Number);
            setAllergyId(a);
          }
        });
    }
  }, [petInfo]);

  //알러지 푸드 아이디를 한글 배열로
  useEffect(() => {
    const arr = [];
    allergyId.map((data) => {
      foods.filter((item) => {
        if (item.id === data) {
          arr.push(item.ingredient);
        }
      });
    });
    setAllergyFoodArr(arr);
  }, [allergyId]);

  //레시피 전체 출력
  useEffect(() => {
    if (recipe.length === 0) {
      fetch("https://iwipwq-nest.herokuapp.com/recipe")
        .then((response) => response.json())
        .then((recipe) => {
          setRecipe(recipe.recipe);
        });
    }
  }, []);

  const buttonValueSetting = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setContent(name);
    if (name === "조리식") {
      document.getElementById("조리식").style.color = "white";
      document.getElementById("조리식").style.backgroundColor = "#ed7567";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "pink";
      document.getElementById("퓨레").style.backgroundColor = "white";
      document.getElementById("간식").style.backgroundColor = "white";
      document.getElementById("생식").style.backgroundColor = "white";
    }
    if (name === "퓨레") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "white";
      document.getElementById("퓨레").style.backgroundColor = "#ed7567";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "pink";
      document.getElementById("조리식").style.backgroundColor = "white";
      document.getElementById("간식").style.backgroundColor = "white";
      document.getElementById("생식").style.backgroundColor = "white";
    }
    if (name === "간식") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "white";
      document.getElementById("간식").style.backgroundColor = "#ed7567";
      document.getElementById("생식").style.color = "pink";
      document.getElementById("퓨레").style.backgroundColor = "white";
      document.getElementById("조리식").style.backgroundColor = "white";
      document.getElementById("생식").style.backgroundColor = "white";
    }
    if (name === "생식") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "white";
      document.getElementById("생식").style.backgroundColor = "#ed7567";
      document.getElementById("퓨레").style.backgroundColor = "white";
      document.getElementById("간식").style.backgroundColor = "white";
      document.getElementById("조리식").style.backgroundColor = "white";
    }
  };
  const selectComponent = {
    조리식: (
      <CookedContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    퓨레: (
      <PureeContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    간식: (
      <SnackContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    생식: <RawContainer />,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "330px",
            borderWidth: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            height: "70px",
          }}
        >
          {recipeType.map((data) => {
            return (
              <CategoryBtn
                onClick={buttonValueSetting}
                name={data}
                id={data}
                key={data}
              >
                {data}
              </CategoryBtn>
            );
          })}
        </div>
        <RoundBoxM>
          {content ? <div>{selectComponent[content]}</div> : <RawContainer />}
        </RoundBoxM>
      </div>
    </div>
  );
}
export default RecipeList;
