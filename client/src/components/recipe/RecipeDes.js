import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../auth/AuthLayout";
import StartLayout from "../auth/StartLayout";
import BackButton from "../feed/BackButton";
import Header from "../feed/Header";
import RecipeImg from "../../image/recipeImg.png";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const NumDiv = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f23e41;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const DesDiv = styled.div`
  width: 280px;
  height: 95px;
  font-size: 16px;
`;
function RecipeDes() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [recipeDes, setRecipeDes] = useState();
  const [recipeName, setRecipeName] = useState("");
  const receivedId = document.location.href.split("?")[1];
  const [PET_DER, setDER] = useState();
  const [ingredientArray, setIngredientArray] = useState();
  const currentScroll = useRef({ scrollTop: 0, scrollBottom: 300 });
  const containerRef = useRef();
  const onScroll = (e) => {
    currentScroll.current = {
      scrollTop: e.target.scrollTop,
      scrollBottom: e.target.scrollTop + 300,
    };
  };
  useEffect(() => {
    fetch(`https://iwipwq-nest.herokuapp.com/recipe_description/${receivedId}`)
      .then((response) => response.json())
      .then((json) => {
        setRecipeDes(json.recipe_description);
      });
  }, []);

  function recipeDesPage() {
    document.location.href = `/recipe_des?${receivedId}`;
  }

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div> </div>
          <div> </div>
          <div> </div>
        </Header>
        <div
          style={{
            color: "#f23e41",
            fontSize: "22px",
            marginTop: "10px",
          }}
        >
          조리순서
        </div>
        <div style={{ width: "100%", marginTop: "20px" }}>
          <div
            className="list-container"
            onScroll={onScroll}
            ref={containerRef}
            style={{
              height: "550px",
              width: "390px",
              marginBottom: "-50px",
            }}
          >
            {recipeDes !== undefined ? (
              <div>
                {recipeDes.cooking_method1 !== null ? (
                  <Container>
                    <NumDiv>1</NumDiv>
                    <DesDiv>{recipeDes.cooking_method1}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method2 !== null ? (
                  <Container>
                    <NumDiv>2</NumDiv>
                    <DesDiv>{recipeDes.cooking_method2}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method3 !== null ? (
                  <Container>
                    <NumDiv>3</NumDiv>
                    <DesDiv>{recipeDes.cooking_method3}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method4 !== null ? (
                  <Container>
                    <NumDiv>4</NumDiv>
                    <DesDiv>{recipeDes.cooking_method4}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method5 !== null ? (
                  <Container>
                    <NumDiv>5</NumDiv>
                    <DesDiv>{recipeDes.cooking_method5}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method6 !== null ? (
                  <Container>
                    <NumDiv>6</NumDiv>
                    <DesDiv>{recipeDes.cooking_method6}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method7 !== null ? (
                  <Container>
                    <NumDiv>7</NumDiv>
                    <DesDiv>{recipeDes.cooking_method7}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method8 !== null ? (
                  <Container>
                    <NumDiv>8</NumDiv>
                    <DesDiv>{recipeDes.cooking_method8}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method9 !== null ? (
                  <Container>
                    <NumDiv>9</NumDiv>
                    <DesDiv>{recipeDes.cooking_method9}</DesDiv>
                  </Container>
                ) : (
                  <div></div>
                )}
                {recipeDes.cooking_method10 !== null ? (
                  <Container>
                    <NumDiv>10</NumDiv>
                    <div>{recipeDes.cooking_method10}</div>
                  </Container>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div></div>
      </AuthLayout>
    </StartLayout>
  );
}
export default RecipeDes;
