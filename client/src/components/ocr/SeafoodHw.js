import { useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
} from "./OcrContainer";
import { InputBox } from "./InputBox";

function SeafoodHw() {
  let crabData = sessionStorage.getItem("crab");
  let shrimpData = sessionStorage.getItem("shrimp");
  let mackerelData = sessionStorage.getItem("mackerel");
  let sardineData = sessionStorage.getItem("sardine");
  let anchovyData = sessionStorage.getItem("anchovy");
  let codData = sessionStorage.getItem("cod");
  let salmonData = sessionStorage.getItem("salmon");
  let tunaData = sessionStorage.getItem("tuna");

  const [crab, setCrab] = useState(crabData === null ? 0 : crabData);
  const [shrimp, setShrimp] = useState(shrimpData === null ? 0 : shrimpData);
  const [mackerel, setMackerel] = useState(
    mackerelData === null ? 0 : mackerelData
  );
  const [sardine, setSardine] = useState(
    sardineData === null ? 0 : sardineData
  );
  const [anchovy, setAnchovy] = useState(
    anchovyData === null ? 0 : anchovyData
  );
  const [cod, setCod] = useState(codData === null ? 0 : codData);
  const [salmon, setSalmon] = useState(salmonData === null ? 0 : salmonData);
  const [tuna, setTuna] = useState(tunaData === null ? 0 : tunaData);
  sessionStorage.setItem("crab", crab);
  sessionStorage.setItem("shrimp", shrimp);
  sessionStorage.setItem("mackerel", mackerel);
  sessionStorage.setItem("sardine", sardine);
  sessionStorage.setItem("anchovy", anchovy);
  sessionStorage.setItem("cod", cod);
  sessionStorage.setItem("salmon", salmon);
  sessionStorage.setItem("tuna", tuna);

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>게</Name>
          <Name>새우</Name>
          <Name>고등어</Name>
          <Name>정어리</Name>
          <Name>멸치</Name>
          <Name>대구</Name>
          <Name>연어</Name>
          <Name>참치</Name>
        </NameBox>
        <ResBox>
          <InputBox
            name='name'
            type='text'
            value={crab}
            onChange={(e) => {
              setCrab(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={shrimp}
            onChange={(e) => {
              setShrimp(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={mackerel}
            onChange={(e) => {
              setMackerel(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={sardine}
            onChange={(e) => {
              setSardine(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={anchovy}
            onChange={(e) => {
              setAnchovy(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={cod}
            onChange={(e) => {
              setCod(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={salmon}
            onChange={(e) => {
              setSalmon(e.target.value);
            }}
          />
          <InputBox
            name='name'
            type='text'
            value={tuna}
            onChange={(e) => {
              setTuna(e.target.value);
            }}
          />
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default SeafoodHw;
