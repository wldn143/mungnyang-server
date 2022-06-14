//import axios from "axios";
import { axiosInstance } from "../../configuring";
import { useEffect, useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function MeatContainer(props) {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [userMeatResult, setUserMeatResult] = useState(props.userMeatResult);
  const [postAllergyFood, setPostAllergyFood] = useState(props.postAllergyFood);

  const [duck, setDuck] = useState([]);
  const [lamb, setLamb] = useState([]);
  const [beef, setBeef] = useState([]);
  const [chicken, setChicken] = useState([]);
  const [turckey, setTurckey] = useState([]);
  const [pork, setPork] = useState([]);

  useEffect(() => {
    setUserMeatResult(props.userMeatResult);
    setPostAllergyFood(props.postAllergyFood);
    axiosInstance.put(`https://mungnyangapp.herokuapp.com/${petId}`, {
      allergy_food_id: postAllergyFood.allergy_food_id,
    });
  }, []);

  useEffect(() => {
    if (userMeatResult !== undefined) {
      setDuck(userMeatResult[0].duck);
      setLamb(userMeatResult[0].lamb);
      setBeef(userMeatResult[0].beef);
      setChicken(userMeatResult[0].chicken);
      setTurckey(userMeatResult[0].turckey);
      setPork(userMeatResult[0].pork);
    }
  });

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>오리고기</Name>
          <Name>양고기</Name>
          <Name>소고기</Name>
          <Name>닭고기</Name>
          <Name>칠면조고기</Name>
          <Name>돼지고기</Name>
        </NameBox>
        <ResBox>
          <Res>{duck}</Res>
          <Res>{lamb}</Res>
          <Res>{beef}</Res>
          <Res>{chicken}</Res>
          <Res>{turckey}</Res>
          <Res>{pork}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default MeatContainer;
