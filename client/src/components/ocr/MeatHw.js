import { useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
} from "./OcrContainer";
import { InputBox } from "./InputBox";

function MeatHw() {
  let duckData = sessionStorage.getItem("duck");
  let lambData = sessionStorage.getItem("lamb");
  let beefData = sessionStorage.getItem("beef");
  let chickenData = sessionStorage.getItem("chicken");
  let turckeyData = sessionStorage.getItem("turckey");
  let porkData = sessionStorage.getItem("pork");
  const [duck, setDuck] = useState(duckData === null ? 0 : duckData);
  const [lamb, setLamb] = useState(lambData === null ? 0 : lambData);
  const [beef, setBeef] = useState(beefData === null ? 0 : beefData);
  const [chicken, setChicken] = useState(
    chickenData === null ? 0 : chickenData
  );
  const [turckey, setTurckey] = useState(
    turckeyData === null ? 0 : turckeyData
  );
  const [pork, setPork] = useState(porkData === null ? 0 : porkData);

  const meat = [
    ["duck", duck, setDuck],
    ["lamb", lamb, setLamb],
    ["beef", beef, setBeef],
    ["chicken", chicken, setChicken],
    ["turckey", turckey, setTurckey],
    ["pork", pork, setPork],
  ];
  meat.map((data) => {
    return sessionStorage.setItem(data[0], data[1]);
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
          <InputBox
            name='name'
            type='text'
            value={duck}
            onChange={(e) => {
              setDuck(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={lamb}
            onChange={(e) => {
              setLamb(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={beef}
            onChange={(e) => {
              setBeef(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={chicken}
            onChange={(e) => {
              setChicken(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={turckey}
            onChange={(e) => {
              setTurckey(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={pork}
            onChange={(e) => {
              setPork(e.target.value);
            }}
          />
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default MeatHw;
