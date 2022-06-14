import { useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
} from "./OcrContainer";
import { InputBox } from "./InputBox";

function NutsHw() {
  let beanData = sessionStorage.getItem("bean");
  let peanutData = sessionStorage.getItem("peanut");
  let riceData = sessionStorage.getItem("rice");
  let flourData = sessionStorage.getItem("flour");

  const [bean, setBean] = useState(beanData === null ? 0 : beanData);
  const [peanut, setPeanut] = useState(peanutData === null ? 0 : peanutData);
  const [rice, setRice] = useState(riceData === null ? 0 : riceData);
  const [flour, setFlour] = useState(flourData === null ? 0 : flourData);
  sessionStorage.setItem("bean", bean);
  sessionStorage.setItem("peanut", peanut);
  sessionStorage.setItem("rice", rice);
  sessionStorage.setItem("flour", flour);

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>콩</Name>
          <Name>땅콩</Name>
          <Name>쌀</Name>
          <Name>밀가루</Name>
        </NameBox>
        <ResBox>
          <InputBox
            type='text'
            value={bean}
            onChange={(e) => {
              setBean(e.target.value);
            }}
          />
          <InputBox
            type='text'
            value={peanut}
            onChange={(e) => {
              setPeanut(e.target.value);
            }}
          />
          <InputBox
            type='text'
            value={rice}
            onChange={(e) => {
              setRice(e.target.value);
            }}
          />
          <InputBox
            type='text'
            value={flour}
            onChange={(e) => {
              setFlour(e.target.value);
            }}
          />
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default NutsHw;
