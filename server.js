const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;
app.use(express.json());
app.use(cors());
app.use("/ocr-upload", express.static("ocr-upload"));

app.get("/health_problem", (req, res) => {
  models.Health_problem.findAll()
    .then((result) => {
      console.log("HEALTH_PROBLEMS:", result);
      res.send({
        health_problems: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/health_problem", (req, res) => {
  const body = req.body;
  const { health } = body;
  if (!health) {
    res.send("모든 필드를 입력해주세요");
  }

  models.Health_problem.create({
    health,
  })
    .then((result) => {
      console.log("건강고민정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("건강고민정보 업로드에 문제가 발생했습니다");
    });
});

app.get("/user", (req, res) => {
  models.User.findAll()
    .then((result) => {
      console.log("USERS:", result);
      res.send({
        users: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/user", (req, res) => {
  const body = req.body;
  const { name, email, password, pet_id } = body;
  if (!name || !email || !password) {
    res.send("모든 필드를 입력해주세요");
  }

  models.User.create({
    name,
    email,
    password,
    pet_id,
  })
    .then((result) => {
      console.log("유저정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("유저정보 업로드에 문제가 발생했습니다");
    });
});

app.get("/pet", (req, res) => {
  models.Pet.findAll()
    .then((result) => {
      console.log("PETS:", result);
      res.send({
        pets: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/pet", (req, res) => {
  const body = req.body;
  const {
    cat_or_dog,
    pet_name,
    pet_age,
    pet_sex,
    pet_neuter,
    pet_size,
    pet_weight,
  } = body;
  if (
    !cat_or_dog ||
    !pet_name ||
    !pet_age ||
    !pet_sex ||
    !pet_neuter ||
    !pet_size ||
    !pet_weight
  ) {
    res.send("모든 필드를 입력해주세요");
  }
  models.Pet.create({
    cat_or_dog,
    pet_name,
    pet_age,
    pet_sex,
    pet_neuter,
    pet_size,
    pet_weight,
  })
    .then((result) => {
      console.log("반려동물정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("반려동물정보 업로드에 문제가 발생했습니다");
    });
});

app.get("/user/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.User.findOne({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log("User: ", result);
      res.send({
        user: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("유저 조회에 에러가 발생했습니다");
    });
});

app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, password, pet_id } = req.body;

  return models.User.findOne({
    where: {
      id: id,
    },
  }).then((result) => {
    const { name, email, password, pet_id } = req.body;
    return result
      .update({ name, email, password, pet_id })
      .then(() => res.send(result))
      .catch((err) => {
        console.log(
          "유저 정보 수정에 에러가 발생했습니다.",
          JSON.stringify(err)
        );
        res.status(400).send(err);
      });
  });
});

app.listen(port, () => {
  console.log("멍냥식탁 서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB 연결 성공!");
    })
    .catch((err) => {
      console.log("DB 연결 에러");
      process.exit();
    });
});
