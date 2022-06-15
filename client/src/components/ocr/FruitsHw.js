import { useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
} from "./OcrContainer";
import { InputBox } from "./InputBox";

function FruitsHw() {
  let w_melonData = sessionStorage.getItem("w_melon");
  let melonData = sessionStorage.getItem("melon");
  let pearData = sessionStorage.getItem("pear");
  let mandarineData = sessionStorage.getItem("mandarine");
  let orangeData = sessionStorage.getItem("orange");
  let appleData = sessionStorage.getItem("apple");
  let bananaData = sessionStorage.getItem("banana");
  let guavaData = sessionStorage.getItem("guava");

  const [w_melon, setWmelon] = useState(w_melonData === null ? 0 : w_melonData);
  const [melon, setMelon] = useState(melonData === null ? 0 : melonData);
  const [pear, setPear] = useState(pearData === null ? 0 : pearData);
  const [mandarine, setMandarine] = useState(
    mandarineData === null ? 0 : mandarineData
  );
  const [orange, setOrange] = useState(orangeData === null ? 0 : orangeData);
  const [apple, setApple] = useState(appleData === null ? 0 : appleData);
  const [banana, setBanana] = useState(bananaData === null ? 0 : bananaData);
  const [guava, setGuava] = useState(guavaData === null ? 0 : guavaData);
  const fruits = [
    ["w_melon", w_melon],
    ["melon", melon],
    ["pear", pear],
    ["mandarine", mandarine],
    ["orange", orange],
    ["apple", apple],
    ["banana", banana],
    ["guava", guava],
  ];
  fruits.map((data) => {
    return sessionStorage.setItem(data[0], data[1]);
  });
  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>수박</Name>
          <Name>멜론</Name>
          <Name>배</Name>
          <Name>귤</Name>
          <Name>오렌지</Name>
          <Name>사과</Name>
          <Name>바나나</Name>
          <Name>구아바</Name>
        </NameBox>
        <ResBox>
          <InputBox
            name='name'
            type='text'
            value={w_melon}
            onChange={(e) => {
              setWmelon(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={melon}
            onChange={(e) => {
              setMelon(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={pear}
            onChange={(e) => {
              setPear(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={mandarine}
            onChange={(e) => {
              setMandarine(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={orange}
            onChange={(e) => {
              setOrange(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={apple}
            onChange={(e) => {
              setApple(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={banana}
            onChange={(e) => {
              setBanana(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={guava}
            onChange={(e) => {
              setGuava(e.target.value);
            }}
          />
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default FruitsHw;
