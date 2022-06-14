import React, { useState } from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBoxL from "../components/auth/RoundBoxL";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Radio from "../components/auth/Radio";
import BackButton from "../components/feed/BackButton";

function SignUp2() {
  //const isSigningUp = props.isSigningUp;
  const history = useHistory();
  const [animal, setAnimal] = useState("");
  const [pet_name, set_pet_name] = useState("");
  const [pet_age, set_pet_age] = useState("");
  const [pet_sex, set_pet_sex] = useState("");
  const [pet_neuter, set_pet_neuter] = useState("");
  const [pet_weight, set_pet_weight] = useState("");
  const [pet_size, set_pet_size] = useState("");
  const pet_name_Handler = (e) => {
    e.preventDefault();
    set_pet_name(e.target.value);
  };
  const pet_age_Handler = (e) => {
    e.preventDefault();
    set_pet_age(e.target.value);
  };
  const pet_weight_Handler = (e) => {
    e.preventDefault();
    set_pet_weight(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let animal = "";
    document.querySelectorAll('input[name="animal"]:checked').forEach((e) => {
      animal = e.value;
      setAnimal(animal);
    });

    let neut = "";
    document.querySelectorAll('input[name="neut"]:checked').forEach((el) => {
      neut = el.value;
      set_pet_neuter(neut);
    });
    let gender = "";
    document.querySelectorAll('input[name="gender"]:checked').forEach((el) => {
      gender = el.value;
      set_pet_sex(gender);
    });
    let size = "";
    document.querySelectorAll('input[name="size"]:checked').forEach((el) => {
      size = el.value;
      set_pet_size(size);
    });

    sessionStorage.setItem("cat_or_dog", animal);
    sessionStorage.setItem("pet_name", pet_name);
    sessionStorage.setItem("pet_age", pet_age);
    sessionStorage.setItem("pet_sex", gender);
    sessionStorage.setItem("pet_neuter", neut);
    sessionStorage.setItem("pet_size", size);
    sessionStorage.setItem("pet_weight", pet_weight);

    fetch("https://mungnyangapp.herokuapp.com/pet")
      .then((response) => response.json())
      .then((json) => {
        let petId;
        let firstPetData = json.pets[0];
        if (firstPetData === undefined) {
          petId = 1;
          sessionStorage.setItem("pet_id", petId);
        } else {
          petId = json.pets[json.pets.length - 1].pet_id + 1;
          sessionStorage.setItem("pet_id", petId);
        }
      });

    history.push("/sign-up3");
  };

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div style={{ fontWeight: "bold" }}>반려동물 정보 입력</div>
          <div> </div>
        </Header>
        <div
          className="WhiteSpace"
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <RoundBoxL>
          <AuthBox>
            <form onSubmit={submitHandler}>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="animal1" name="animal" value="dog" />
                <label htmlFor="animal1">강아지</label>
                <Radio type="radio" id="animal2" name="animal" value="cat" />
                <label htmlFor="animal2">고양이</label>
              </div>
              <Input
                className="form"
                type="text"
                name="pet_name"
                placeholder="이름"
                value={pet_name}
                onChange={pet_name_Handler}
                required
              />
              <Input
                className="form"
                type="number"
                name="age"
                placeholder="나이"
                value={pet_age}
                onChange={pet_age_Handler}
                required
              />

              <p>성별</p>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="gender1" name="gender" value="male" />
                <label htmlFor="gender1">남</label>
                <Radio id="gender2" name="gender" value="female" />
                <label htmlFor="gender2">여</label>
              </div>
              <p>중성화 유무</p>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="neut1" name="neut" value="yes" />
                <label htmlFor="neut1">YES</label>
                <Radio id="neut2" name="neut" value="no" />
                <label htmlFor="neut2">NO</label>
              </div>
              <p>크기</p>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="size1" name="size" value="small" />
                <label htmlFor="size1">소</label>
                <Radio id="size2" type="radio" name="size" value="medium" />
                <label htmlFor="size2">중</label>
                <Radio id="size3" name="size" value="large" />
                <label htmlFor="size3">대</label>
              </div>
              <Input
                className="form"
                type="number"
                name="weight"
                placeholder="체중"
                value={pet_weight}
                onChange={pet_weight_Handler}
                required
              />
              <SubmitButton type="submit">다음</SubmitButton>
            </form>
          </AuthBox>
        </RoundBoxL>
      </AuthLayout>
    </StartLayout>
  );
}
export default SignUp2;
