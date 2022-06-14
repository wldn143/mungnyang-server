import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../auth/AuthLayout";
import StartLayout from "../auth/StartLayout";
import BackButton from "../feed/BackButton";
import Header from "../feed/Header";
import RecipeImg from "../../image/recipeImg.png";
//import axios from "axios";
import { axiosInstance } from "../../config";
import { useLocation } from "react-router-dom";
function RawFoodRecipe() {
  const location = useLocation();
  const [rawInfo, setRawInfo] = useState();
  const [ingreInfo, setIngreInfo] = useState();
  const [waterInfo, setWaterInfo] = useState();
  const [vaInfo, setVaInfo] = useState();
  const [kcal, setKcal] = useState();
  const [allInfo, setAllInfo] = useState();

  useEffect(() => {
    axiosInstance
      .post("https://mungnyangapp.herokuapp.com/rawFood", location.state.data)
      .then((res) => {
        setRawInfo(res.data[3]);
        setWaterInfo(res.data[1]);
        setIngreInfo(res.data[0]);
        setKcal(res.data[4].kcal);
      });
    setVaInfo(location.state.info.infoArr);
  }, []);
  useEffect(() => {
    if (ingreInfo !== undefined) {
      ingreInfo.filter((item) => {
        const meatEle = document.getElementById("meat");
        const elseEle = document.getElementById("else");
        const ele = document.createElement("div");
        if (item.name.length >= 10) {
          ele.innerHTML = `${item.name.substr(0, 10) + "..."}  &nbsp;&nbsp;   ${
            item.분배량
          }g`;
        } else {
          ele.innerHTML = `${item.name}  &nbsp;&nbsp;   ${item.분배량}g`;
        }
        ele.id = "eleAmount";
        if (vaInfo !== undefined) {
          vaInfo.filter((b) => {
            if (b.name === item.name) {
              if (b.category === "육류") {
                meatEle.appendChild(ele);
              } else {
                elseEle.append(ele);
              }
            }
          });
        }
      });
    }
  }, [ingreInfo]);

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>생식 레시피 상세 보기</div>
          <div> </div>
        </Header>
        <div id="body" style={{ width: "85%", height: "600px" }}>
          <div id="amount">
            <div
              style={{
                height: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#ed7567",
                fontSize: "18px",
              }}
            >
              재료별 분배량
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                id="meatContainer"
                style={{
                  width: "163px",
                  height: "160px",
                  border: "#ED7567 0.5px solid",
                  borderRadius: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "28px",
                    color: "#ed7567",
                    fontWeight: "bold",
                  }}
                >
                  <div>육류</div>
                </div>

                <div
                  id="meat"
                  style={{
                    width: "95%",
                    height: "110px",
                  }}
                ></div>
              </div>
              <div
                id="elseContainer"
                style={{
                  width: "163px",
                  height: "160px",
                  border: "#ED7567 0.5px solid",
                  borderRadius: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "28px",
                    color: "#ed7567",
                    fontWeight: "bold",
                  }}
                >
                  <div>채소 & 기타</div>
                </div>
                <div
                  id="else"
                  style={{
                    width: "95%",
                    height: "110px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div id="info">
            <div
              style={{
                height: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#ed7567",
                fontSize: "18px",
                marginTop: "8px",
              }}
            >
              주 영양성분 정보
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "98%",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    color: "#ed7567",
                    fontWeight: "bold",
                    width: "90px",
                  }}
                >
                  총 칼로리
                </div>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {kcal === undefined ? <div></div> : <div> {kcal}kcal</div>}
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  width: "98%",
                }}
              >
                <div
                  style={{
                    color: "#ed7567",
                    fontWeight: "bold",
                    width: "90px",
                  }}
                >
                  수분
                </div>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {waterInfo === undefined ? (
                    <div></div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "250px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {waterInfo.waterSum}ml ({waterInfo.Wpercent}%)
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        하루 필요 음수량 {waterInfo.needWater}ml
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <table
                style={{
                  border: "solid 0.5px #e3e3e3",
                  width: "100%",
                  height: "280px",
                }}
              >
                <thead
                  style={{
                    backgroundColor: "#FFEEB2",
                    height: "40px",
                    color: "#3D3D3D",
                  }}
                >
                  <tr>
                    <th style={{ border: "solid 0.5px #e3e3e3" }}>성분이름</th>
                    <th style={{ border: "solid 0.5px #e3e3e3" }}>함유량</th>
                    <th style={{ border: "solid 0.5px #e3e3e3" }}>
                      최소권장량
                    </th>
                    <th style={{ border: "solid 0.5px #e3e3e3" }}>비례</th>
                    <th style={{ border: "solid 0.5px #e3e3e3" }}>
                      권장가이드
                    </th>
                  </tr>
                </thead>
                {rawInfo !== undefined ? (
                  <tbody
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {rawInfo.map((item) => {
                      return (
                        <tr
                          style={{ border: "solid 0.5px #e3e3e3" }}
                          key={item.name}
                        >
                          <td
                            style={{
                              border: "solid 0.5px #e3e3e3",
                              fontWeight: "bold",
                              color: "#3D3D3D",
                              textAlign: "center",
                            }}
                          >
                            {item.name}
                          </td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "30px",
                            }}
                          >
                            {item.nutriReal === "NaN" ? (
                              <div>0</div>
                            ) : (
                              item.nutriReal
                            )}
                            {item.name === "단백질" || item.name === "지방" ? (
                              <div>g</div>
                            ) : (
                              <div>mg</div>
                            )}
                          </td>
                          <td style={{ border: "solid 0.5px #e3e3e3" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div>{item.nutriRefer}</div>
                              {item.name === "단백질" ||
                              item.name === "지방" ? (
                                <div>g</div>
                              ) : (
                                <div>mg</div>
                              )}
                            </div>
                          </td>
                          <td style={{ border: "solid 0.5px #e3e3e3" }}>
                            {item.nutriGood}
                          </td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              {parseInt(item.nutriGood) <= 0.05 ||
                              parseInt(item.nutriGood) >= 6 ? (
                                <div
                                  style={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#FF3838",
                                    borderRadius: "5px",
                                  }}
                                ></div>
                              ) : (
                                <div>
                                  {item.nutriGood === "NaN" ? (
                                    <div>-</div>
                                  ) : (
                                    <div
                                      style={{
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: "#86DF84",
                                        borderRadius: "5px",
                                      }}
                                    ></div>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <tbody></tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}
export default RawFoodRecipe;
