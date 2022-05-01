const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/ocr-upload", express.static("ocr-upload"));

app.get("/sign-up", (req, res) => {
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

app.post("/sign-up", (req, res) => {
  const body = req.body;
  const { name, email, password } = body;
  if (!name || !email || !password) {
    res.send("모든 필드를 입력해주세요");
  }

  models.User.create({
    name,
    email,
    password,
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
