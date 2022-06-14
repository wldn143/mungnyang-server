import { useEffect, useState } from "react";
import styled from "styled-components";
import comp from "../auth/comp";
import MeatContainer from "./MeatContainer";
import SeafoodContainer from "./SeafoodContainer";
import VegeContainer from "./VegeContainer";
import NutsContainer from "./NutsContainer";
import FruitsContainer from "./FruitsContainer";
//import axios from "axios";
import { axiosInstance } from "../../config";
const OcrNavBtn = styled.button`
  height: 35px;
  color: #ed7567;
  font-size: 15px;
  margin: 0px 15px 0px 5px;
  font-weight: bolder;
  cursor: pointer;
`;
function OcrDatagraph(props) {
  let petId = parseInt(sessionStorage.getItem("pet_id"));

  const [meatOcrResult, setMeatOcrResult] = useState(props.meatOcrResult);
  const [seafoodOcrResult, setSeafoodOcrResult] = useState(
    props.seafoodOcrResult
  );
  const [fruitsOcrResult, setFruitsOcrResult] = useState(props.fruitsOcrResult);
  const [VegeOcrResult, setVegeOcrResult] = useState(props.VegeOcrResult);
  const [NutsOcrResult, setNutsOcrResult] = useState(props.NutsOcrResult);

  const [userMeatResult, setUserMeatResult] = useState();
  const [userSeafoodResult, setUserSeafoodResult] = useState();
  const [userFruitsResult, setUserFruitsResult] = useState();
  const [userVegeResult, setUserVegeResult] = useState();
  const [userNutsResult, setUserNutsResult] = useState();

  const [allergyFood, setAllergyFood] = useState();
  const [postAllergyFood, setPostAllergyFood] = useState();

  useEffect(() => {
    if (
      meatOcrResult !== undefined &&
      seafoodOcrResult !== undefined &&
      fruitsOcrResult !== undefined &&
      VegeOcrResult !== undefined &&
      NutsOcrResult !== undefined
    ) {
      if (meatOcrResult.filter((item) => item.pet_id === petId).length) {
        let MeatResult = meatOcrResult.filter((item) => item.pet_id === petId);
        setUserMeatResult(MeatResult);
      }
      if (seafoodOcrResult.filter((item) => item.pet_id === petId).length) {
        let SeafoodResult = seafoodOcrResult.filter(
          (item) => item.pet_id === petId
        );
        setUserSeafoodResult(SeafoodResult);
      }
      if (fruitsOcrResult.filter((item) => item.pet_id === petId).length) {
        let FruitsResult = fruitsOcrResult.filter(
          (item) => item.pet_id === petId
        );
        setUserFruitsResult(FruitsResult);
      }
      if (VegeOcrResult.filter((item) => item.pet_id === petId).length) {
        let VegeResult = VegeOcrResult.filter((item) => item.pet_id === petId);
        setUserVegeResult(VegeResult);
      }
      if (NutsOcrResult.filter((item) => item.pet_id === petId).length) {
        let NutsResult = NutsOcrResult.filter((item) => item.pet_id === petId);
        setUserNutsResult(NutsResult);
      }
    }
  });

  useEffect(() => {
    setMeatOcrResult(props.meatOcrResult);
    setSeafoodOcrResult(props.seafoodOcrResult);
    setFruitsOcrResult(props.fruitsOcrResult);
    setVegeOcrResult(props.VegeOcrResult);
    setNutsOcrResult(props.NutsOcrResult);
  });

  useEffect(() => {
    let body = {
      pet_id: petId,
    };
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/allergyfood", body)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var allergyFoodArray = new Array();
    if (userMeatResult !== undefined) {
      const values = Object.values(userMeatResult[0]);
      for (let i = 2; i < values.length - 2; i++) {
        if (values[i] >= 5000) {
          allergyFoodArray.push(i - 1);
        }
      }
    }
    if (userSeafoodResult !== undefined) {
      const values = Object.values(userSeafoodResult[0]);
      for (let i = 2; i < values.length - 2; i++) {
        if (values[i] >= 5000) {
          allergyFoodArray.push(i + 2);
        }
      }
    }
    if (userFruitsResult !== undefined) {
      const values = Object.values(userFruitsResult[0]);
      for (let i = 2; i < values.length - 2; i++) {
        if (values[i] >= 5000) {
          allergyFoodArray.push(i + 13);
        }
      }
    }
    if (userVegeResult !== undefined) {
      const values = Object.values(userVegeResult[0]);
      for (let i = 2; i < values.length - 2; i++) {
        if (values[i] >= 5000) {
          allergyFoodArray.push(i + 21);
        }
      }
    }
    if (userNutsResult !== undefined) {
      const values = Object.values(userNutsResult[0]);
      for (let i = 2; i < values.length - 2; i++) {
        if (values[i] >= 5000) {
          allergyFoodArray.push(i + 31);
        }
      }
    }
    setAllergyFood(allergyFoodArray);
    setPostAllergyFood({
      allergy_food_id: allergyFood,
    });
  });

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
    육류: (
      <MeatContainer
        userMeatResult={userMeatResult}
        postAllergyFood={postAllergyFood}
      />
    ),
    해산물: <SeafoodContainer userSeafoodResult={userSeafoodResult} />,
    과일: <FruitsContainer userFruitsResult={userFruitsResult} />,
    야채: <VegeContainer userVegeResult={userVegeResult} />,
    견과류: <NutsContainer userNutsResult={userNutsResult} />,
  };
  return (
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
  );
}
export default OcrDatagraph;
