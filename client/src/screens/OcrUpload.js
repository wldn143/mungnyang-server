import React, { useState } from "react";
import StartLayout from "../components/auth/StartLayout";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import BackButton from "../components/feed/BackButton";
import MeatOcrImg from "../image/meatOcr.png";
import FruitsOcrImg from "../image/fruitsOcr.png";
import FishOcrImg from "../image/fishOcr.png";
import VegeOcrImg from "../image/vegeOcr.png";
import nutOcrImg from "../image/nutOcr.png";
import { Upload } from "antd";
import OcrContainer from "../components/auth/OcrContainer";
//import axios from "axios";
import { axiosInstance } from "../config";

function OcrUpload() {
  const [meatImageUrl, setMeatImageUrl] = useState(null);
  const [fishImageUrl, setFishImageUrl] = useState(null);
  const [fruitImageUrl, setFruitImageUrl] = useState(null);
  const [vegeImageUrl, setVegeImageUrl] = useState(null);
  const [nutImageUrl, setNutImageUrl] = useState(null);
  let petId = sessionStorage.getItem("pet_id");
  const history = useHistory();
  const onChangeImage1 = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response1 = info.file.response;
      const meatImageUrl = response1.imageUrl;
      setMeatImageUrl(meatImageUrl);
    }
  };
  const onChangeImage2 = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response2 = info.file.response;
      const fruitImageUrl = response2.imageUrl;
      setFruitImageUrl(fruitImageUrl);
    }
  };
  const onChangeImage3 = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response3 = info.file.response;
      const fishImageUrl = response3.imageUrl;
      setFishImageUrl(fishImageUrl);
    }
  };
  const onChangeImage4 = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response4 = info.file.response;
      const vegeImageUrl = response4.imageUrl;
      setVegeImageUrl(vegeImageUrl);
    }
  };
  const onChangeImage5 = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response5 = info.file.response;
      const nutImageUrl = response5.imageUrl;
      setNutImageUrl(nutImageUrl);
    }
  };
  const onSubmit = (values) => {
    values.preventDefault();

    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/ocrimg", {
        pet_id: petId,
        meatImageUrl: meatImageUrl,
        fishImageUrl: fishImageUrl,
        fruitImageUrl: fruitImageUrl,
        vegeImageUrl: vegeImageUrl,
        nutImageUrl: nutImageUrl,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    history.push("./ocr-result");
    //window.location.reload();
  }; //;

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>알레르기 검사 OCR</div>
          <div> </div>
        </Header>

        <form onSubmit={onSubmit}>
          <OcrContainer>
            <Upload
              name="image"
              action={"https://mungnyangapp.herokuapp.com/image"}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage1}
            >
              {meatImageUrl ? (
                <img
                  id="upload-img"
                  src={`https://mungnyangapp.herokuapp.com/${meatImageUrl}`}
                  style={{ margin: "auto" }}
                  width="163"
                  height="197"
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src={MeatOcrImg} />
                </div>
              )}
            </Upload>

            <Upload
              name="image"
              action={"https://mungnyangapp.herokuapp.com/image"}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage2}
            >
              {fruitImageUrl ? (
                <img
                  id="upload-img"
                  src={`https://mungnyangapp.herokuapp.com/${fruitImageUrl}`}
                  style={{ margin: "auto" }}
                  width="163"
                  height="197"
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src={FruitsOcrImg} />
                </div>
              )}
            </Upload>
          </OcrContainer>
          <OcrContainer>
            <Upload
              name="image"
              action={"https://mungnyangapp.herokuapp.com/image"}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage3}
            >
              {fishImageUrl ? (
                <img
                  id="upload-img"
                  src={`https://mungnyangapp.herokuapp.com/${fishImageUrl}`}
                  style={{ margin: "auto" }}
                  width="163"
                  height="197"
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src={FishOcrImg} />
                </div>
              )}
            </Upload>
            <Upload
              name="image"
              action={"https://mungnyangapp.herokuapp.com/image"}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage4}
            >
              {vegeImageUrl ? (
                <img
                  id="upload-img"
                  src={`https://mungnyangapp.herokuapp.com/${vegeImageUrl}`}
                  style={{ margin: "auto" }}
                  width="163"
                  height="197"
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src={VegeOcrImg} />
                </div>
              )}
            </Upload>
          </OcrContainer>
          <OcrContainer>
            <Upload
              name="image"
              action={"https://mungnyangapp.herokuapp.com/image"}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage5}
            >
              {nutImageUrl ? (
                <img
                  id="upload-img"
                  src={`https://mungnyangapp.herokuapp.com/${nutImageUrl}`}
                  style={{ margin: "auto" }}
                  width="163"
                  height="197"
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src={nutOcrImg} />
                </div>
              )}
            </Upload>
          </OcrContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SubmitButton type="submit">제출하기</SubmitButton>
          </div>
        </form>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrUpload;
