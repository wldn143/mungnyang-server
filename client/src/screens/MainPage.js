import React from "react";
import StartLayout from "../components/auth/StartLayout";
import AuthLayout from "../components/auth/AuthLayout";
import RecipeList from "../components/recipe/RecipeList";
import MyPageBtn from "../image/mypage.png";
function MainPage(props) {
  //sessionStorage.setItem("pet_id", 14);
  const isLogin = props.isLogin;
  //console.log(isLogin);
  //console.log(sessionStorage.getItem("user"));

  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    sessionStorage.removeItem("user");
    // App 으로 이동(새로고침)
    document.location.href = "/log-in";
  };
  const clickMyPage = (e) => {
    e.preventDefault();
    document.location.href = "/petpage";
  };
  return (
    <StartLayout>
      <AuthLayout>
        {/* <RoundBox> */}

        <div
          style={{
            width: "85%",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#ED7567",
                fontSize: "22px",
                marginBottom: "10px",
                fontFamily: "suitB",
              }}
            >
              멍냥식탁
            </div>
            <div>
              <button
                style={{
                  cursor: "pointer",
                }}
                onClick={clickMyPage}
              >
                <img src={MyPageBtn} alt=''></img>
              </button>
            </div>
          </div>

          <div>반려동물 맞춤 자연식 레시피 찾아보기</div>
        </div>
        {/* <RoundBoxL> */}
        <div
          style={
            {
              //height: "650px",
            }
          }
        >
          <RecipeList></RecipeList>
        </div>
        {/* </RoundBoxL> */}
      </AuthLayout>
    </StartLayout>
  );
}
export default MainPage;
