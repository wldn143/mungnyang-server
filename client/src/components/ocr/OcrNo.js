import PetInfo from "../feed/PetInfo";
import ocrinfo from "../../image/ocrinfo.png";
import SubmitButton from "../auth/SubmitButton";
function OcrNo() {
  return (
    <div>
      <PetInfo />
      <div>
        <div
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#888888",
          }}
        >
          <img src={ocrinfo} />

          <p>
            알레르기 검사 결과 정보가
            <br /> 업로드되지 않았습니다!
          </p>
        </div>
        <SubmitButton>검사데이터 업로드하기</SubmitButton>
      </div>
    </div>
  );
}
export default OcrNo;
