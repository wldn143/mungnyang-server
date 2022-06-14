import { useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
} from "./OcrContainer";
import { InputBox } from "./InputBox";

function VegeHw() {
  let carrotData = sessionStorage.getItem("carrot");
  let cornData = sessionStorage.getItem("corn");
  let potatoData = sessionStorage.getItem("potato");
  let s_potatoData = sessionStorage.getItem("s_potato");
  let pumpkinData = sessionStorage.getItem("pumpkin");
  let broccoliData = sessionStorage.getItem("broccoli");
  let cabbageData = sessionStorage.getItem("cabbage");
  let peaData = sessionStorage.getItem("pea");
  let tomatoData = sessionStorage.getItem("tomato");
  let seaweedData = sessionStorage.getItem("seaweed");

  const [carrot, setCarrot] = useState(carrotData === null ? 0 : carrotData);
  const [corn, setcorn] = useState(cornData === null ? 0 : cornData);
  const [potato, setPotato] = useState(potatoData === null ? 0 : potatoData);
  const [s_potato, setSpotato] = useState(
    s_potatoData === null ? 0 : s_potatoData
  );
  const [pumpkin, setPumpkin] = useState(
    pumpkinData === null ? 0 : pumpkinData
  );
  const [broccoli, setBroccoli] = useState(
    broccoliData === null ? 0 : broccoliData
  );
  const [cabbage, setCabbage] = useState(
    cabbageData === null ? 0 : cabbageData
  );
  const [pea, setPea] = useState(peaData === null ? 0 : peaData);
  const [tomato, setTomato] = useState(tomatoData === null ? 0 : tomatoData);
  const [seaweed, setSeaweed] = useState(
    seaweedData === null ? 0 : seaweedData
  );
  const vege = [
    ["carrot", carrot, setCarrot],
    ["corn", corn, setcorn],
    ["potato", potato, setPotato],
    ["s_potato", s_potato, setSpotato],
    ["pumpkin", pumpkin, setPumpkin],
    ["broccoli", broccoli, setBroccoli],
    ["cabbage", cabbage, setCabbage],
    ["pea", pea, setPea],
    ["tomato", tomato, setTomato],
    ["seaweed", seaweed, setSeaweed],
  ];
  vege.map((data) => {
    return sessionStorage.setItem(data[0], data[1]);
  });
  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>당근</Name>
          <Name>옥수수</Name>
          <Name>감자</Name>
          <Name>고구마</Name>
          <Name>호박</Name>
          <Name>브로콜리</Name>
          <Name>양배추</Name>
          <Name>완두콩</Name>
          <Name>토마토</Name>
          <Name>김/미역</Name>
        </NameBox>
        <ResBox>
          <InputBox
            name='name'
            type='text'
            value={carrot}
            onChange={(e) => {
              setCarrot(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={corn}
            onChange={(e) => {
              setcorn(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={potato}
            onChange={(e) => {
              setPotato(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={s_potato}
            onChange={(e) => {
              setSpotato(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={pumpkin}
            onChange={(e) => {
              setPumpkin(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={broccoli}
            onChange={(e) => {
              setBroccoli(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={cabbage}
            onChange={(e) => {
              setCabbage(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={pea}
            onChange={(e) => {
              setPea(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={tomato}
            onChange={(e) => {
              setTomato(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={seaweed}
            onChange={(e) => {
              setSeaweed(e.target.value);
            }}
          />
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default VegeHw;
