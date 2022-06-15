import { useEffect, useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function NutsContainer(props) {
  const [userNutsResult, setUserNutsResult] = useState(props.userNutsResult);
  const [bean, setBean] = useState([]);
  const [peanut, setPeanut] = useState([]);
  const [rice, setRice] = useState([]);
  const [flour, setFlour] = useState([]);

  useEffect(() => {
    setUserNutsResult(userNutsResult);
  }, []);

  useEffect(() => {
    if (userNutsResult !== undefined) {
      setBean(userNutsResult[0].bean);
      setPeanut(userNutsResult[0].peanut);
      setRice(userNutsResult[0].rice);
      setFlour(userNutsResult[0].flour);
    }
  });

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
          <Res>{bean}</Res>
          <Res>{peanut}</Res>
          <Res>{rice}</Res>
          <Res>{flour}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default NutsContainer;
