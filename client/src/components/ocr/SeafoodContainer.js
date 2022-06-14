import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function SeafoodContainer(props) {
  const [userSeafoodResult, setUserSeafoodResult] = useState(
    props.userSeafoodResult
  );
  const [crab, setCrab] = useState([]);
  const [shrimp, setShrimp] = useState([]);
  const [mackerel, setMackerel] = useState([]);
  const [sardine, setSardine] = useState([]);
  const [anchovy, setAnchovy] = useState([]);
  const [cod, setCod] = useState([]);
  const [salmon, setSalmon] = useState([]);
  const [tuna, setTuna] = useState([]);

  useEffect(() => {
    setUserSeafoodResult(props.userSeafoodResult);
  }, []);

  useEffect(() => {
    if (userSeafoodResult !== undefined) {
      setCrab(userSeafoodResult[0].crab);
      setShrimp(userSeafoodResult[0].shrimp);
      setMackerel(userSeafoodResult[0].mackerel);
      setSardine(userSeafoodResult[0].sardine);
      setAnchovy(userSeafoodResult[0].anchovy);
      setCod(userSeafoodResult[0].cod);
      setSalmon(userSeafoodResult[0].salmon);
      setTuna(userSeafoodResult[0].tuna);
    }
  });

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
          <Res>{crab}</Res>
          <Res>{shrimp}</Res>
          <Res>{mackerel}</Res>
          <Res>{sardine}</Res>
          <Res>{anchovy}</Res>
          <Res>{cod}</Res>
          <Res>{salmon}</Res>
          <Res>{tuna}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default SeafoodContainer;
