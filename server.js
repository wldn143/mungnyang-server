const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const multer = require("multer");
const { json } = require("express/lib/response");
const spawn = require("child_process").spawn;
const xlsx = require("xlsx");

//엑셀파일 가져오기
const recipes = xlsx.readFile("./excels/recipes_dp.xlsx");
const ingredients = xlsx.readFile("./excels/ingredient_DB.xlsx");
const matching = xlsx.readFile("./excels/matching.xlsx");

var duck, lamb, beef, chicken, turckey, pork;
var w_melon, melon, pear, mandarine, orange, apple, banana, guava;
var bean, peanut, rice, flour;
var crab, shrimp, mackerel, sardine, anchovy, cod, salmon, tuna;
var carrot,
  corn,
  potato,
  s_potato,
  pumpkin,
  broccoli,
  cabbage,
  pea,
  tomato,
  seaweed;

//upload파일에 file.originalname으로 이미지를 저장할 예정
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
const port = 8080;
app.use(express.json());
app.use(cors());

//이미지를 입력했던 경로로 보여주는 세팅
app.use("/uploads", express.static("uploads"));

//각 pet_id 별 주의해야할 알러지 유발 음식 담는 table
app.get("/allergyfood", (req, res) => {
  models.allergy_food
    .findAll()
    .then((result) => {
      console.log("allergy_food:", result);
      res.send({
        allergy_food: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/allergyfood", (req, res) => {
  const body = req.body;
  const { pet_id, allergy_food_id } = body;

  models.allergy_food
    .create({
      pet_id,
      allergy_food_id,
    })
    .then((result) => {
      console.log("알레르기 유발 음식정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("알레르기 음식 업로드에 문제가 발생했습니다");
    });
});

app.get("/food", (req, res) => {
  models.Food.findAll()
    .then((result) => {
      console.log("Food:", result);
      res.send({
        foods: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/food", (req, res) => {
  const body = req.body;
  const { foodInKor, foodInEng } = body;

  models.Food.create({
    foodInKor,
    foodInEng,
  })
    .then((result) => {
      console.log("음식이름정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("음식이름정보 업로드에 문제가 발생했습니다");
    });
});

app.post("/OCR_result_vege", (req, res) => {
  const body = req.body;
  const {
    pet_id,
    carrot,
    corn,
    potato,
    s_potato,
    pumpkin,
    broccoli,
    cabbage,
    pea,
    tomato,
    seaweed,
  } = body;

  models.OCR_result_vege.create({
    pet_id,
    carrot,
    corn,
    potato,
    s_potato,
    pumpkin,
    broccoli,
    cabbage,
    pea,
    tomato,
    seaweed,
  })
    .then((result) => {
      console.log("vegeOcrResult 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("vegeOcrResult 업로드에 문제가 발생했습니다");
    });
});

app.post("/OCR_result_nuts", (req, res) => {
  const body = req.body;
  const { pet_id, bean, peanut, rice, flour } = body;

  models.OCR_result_nuts.create({
    pet_id,
    bean,
    peanut,
    rice,
    flour,
  })
    .then((result) => {
      console.log("nutsOcrResult 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("nutsOcrResult 업로드에 문제가 발생했습니다");
    });
});

app.post("/OCR_result_seafood", (req, res) => {
  const body = req.body;
  const {
    pet_id,
    crab,
    shrimp,
    mackerel,
    sardine,
    anchovy,
    cod,
    salmon,
    tuna,
  } = body;

  models.OCR_result_seafood.create({
    pet_id,
    crab,
    shrimp,
    mackerel,
    sardine,
    anchovy,
    cod,
    salmon,
    tuna,
  })
    .then((result) => {
      console.log("seafoodOcrResult 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("seafoodOcrResult 업로드에 문제가 발생했습니다");
    });
});

app.post("/OCR_result_fruit", (req, res) => {
  const body = req.body;
  const {
    pet_id,
    w_melon,
    melon,
    pear,
    mandarine,
    orange,
    apple,
    banana,
    guava,
  } = body;

  models.OCR_result_fruit.create({
    pet_id,
    w_melon,
    melon,
    pear,
    mandarine,
    orange,
    apple,
    banana,
    guava,
  })
    .then((result) => {
      console.log("fruitsOcrResult 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("fruitsOcrResult 업로드에 문제가 발생했습니다");
    });
});

app.post("/OCR_result_meat", (req, res) => {
  const body = req.body;
  const { pet_id, duck, lamb, beef, chicken, turckey, pork } = body;

  models.OCR_result_meat.create({
    pet_id,
    duck,
    lamb,
    beef,
    chicken,
    turckey,
    pork,
  })
    .then((result) => {
      console.log("meatOcrResult : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("meatOcrResult 업로드에 문제가 발생했습니다");
    });
});
//ocrimg 업로드하면 이 주소로 저장된 imageUrl 보여줌
app.get("/ocrimg", (req, res) => {
  models.Ocr.findAll()
    .then((result) => {
      console.log("ocrurl:", result);
      res.send({
        ocrurl: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});
app.get("/OCR_result_meat", (req, res) => {
  models.OCR_result_meat.findAll()
    .then((result) => {
      console.log("OCR_result_meat:", result);
      res.send({
        OCR_result_meat: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.get("/OCR_result_fruit", (req, res) => {
  models.OCR_result_fruit.findAll()
    .then((result) => {
      console.log("OCR_result_fruit:", result);
      res.send({
        OCR_result_fruit: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.get("/OCR_result_seafood", (req, res) => {
  models.OCR_result_seafood.findAll()
    .then((result) => {
      console.log("OCR_result_seafood:", result);
      res.send({
        OCR_result_seafood: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.get("/OCR_result_nuts", (req, res) => {
  models.OCR_result_nuts.findAll()
    .then((result) => {
      console.log("OCR_result_nuts:", result);
      res.send({
        OCR_result_nuts: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.get("/OCR_result_vege", (req, res) => {
  models.OCR_result_vege.findAll()
    .then((result) => {
      console.log("OCR_result_vege:", result);
      res.send({
        OCR_result_vege: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});
//ocrimg 업로드하면 이 주소로 imageUrl 저장
app.post("/ocrimg", (req, res) => {
  const body = req.body;
  const {
    pet_id,
    meatImageUrl,
    fruitImageUrl,
    fishImageUrl,
    vegeImageUrl,
    nutImageUrl,
  } = body;
  const result_meat = spawn("python", ["ocr/ocr.py", meatImageUrl]);
  result_meat.toString().replace(/\r\n/gi, "\\r\\n");
  const result_fruit = spawn("python", ["ocr/ocr.py", fruitImageUrl]);
  result_fruit.toString().replace(/\r\n/gi, "\\r\\n");
  const result_seafood = spawn("python", ["ocr/ocr.py", fishImageUrl]);
  result_seafood.toString().replace(/\r\n/gi, "\\r\\n");
  const result_vege = spawn("python", ["ocr/ocr.py", vegeImageUrl]);
  result_vege.toString().replace(/\r\n/gi, "\\r\\n");
  const result_nuts = spawn("python", ["ocr/ocr.py", nutImageUrl]);
  result_nuts.toString().replace(/\r\n/gi, "\\r\\n");

  result_meat.stdout.on("data", function (data) {
    obj = data.toString();
    jsondata = JSON.parse(obj);
    console.log(jsondata[1]);
    duck = jsondata[0];
    lamb = jsondata[1];
    beef = jsondata[2];
    chicken = jsondata[3];
    turckey = jsondata[4];
    pork = jsondata[5];
    models.OCR_result_meat.create({
      pet_id,
      duck,
      lamb,
      beef,
      chicken,
      turckey,
      pork,
    });
  });
  result_meat.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  result_fruit.stdout.on("data", function (data) {
    obj = data.toString();
    jsondata = JSON.parse(obj);
    console.log(jsondata[1]);
    w_melon = jsondata[0];
    melon = jsondata[1];
    pear = jsondata[2];
    mandarine = jsondata[3];
    orange = jsondata[4];
    apple = jsondata[5];
    banana = jsondata[6];
    guava = jsondata[7];
    models.OCR_result_fruit.create({
      pet_id,
      w_melon,
      melon,
      pear,
      mandarine,
      orange,
      apple,
      banana,
      guava,
    });
  });
  result_fruit.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  result_seafood.stdout.on("data", function (data) {
    obj = data.toString();
    jsondata = JSON.parse(obj);
    console.log(jsondata[1]);
    crab = jsondata[0];
    shrimp = jsondata[1];
    mackerel = jsondata[2];
    sardine = jsondata[3];
    anchovy = jsondata[4];
    cod = jsondata[5];
    salmon = jsondata[6];
    tuna = jsondata[7];
    models.OCR_result_seafood.create({
      pet_id,
      crab,
      shrimp,
      mackerel,
      sardine,
      anchovy,
      cod,
      salmon,
      tuna,
    });
  });
  result_seafood.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  result_nuts.stdout.on("data", function (data) {
    obj = data.toString();
    jsondata = JSON.parse(obj);
    console.log(jsondata[1]);
    bean = jsondata[0];
    peanut = jsondata[1];
    rice = jsondata[2];
    flour = jsondata[3];
    models.OCR_result_nuts.create({
      pet_id,
      bean,
      peanut,
      rice,
      flour,
    });
  });
  result_nuts.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  result_vege.stdout.on("data", function (data) {
    obj = data.toString();
    jsondata = JSON.parse(obj);
    carrot = jsondata[0];
    corn = jsondata[1];
    potato = jsondata[2];
    s_potato = jsondata[3];
    pumpkin = jsondata[4];
    broccoli = jsondata[5];
    cabbage = jsondata[6];
    pea = jsondata[7];
    tomato = jsondata[8];
    seaweed = jsondata[9];
    models.OCR_result_vege.create({
      pet_id,
      carrot,
      corn,
      potato,
      s_potato,
      pumpkin,
      broccoli,
      cabbage,
      pea,
      tomato,
      seaweed,
    });
  });
  result_vege.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  models.Ocr.create({
    pet_id,
    meatImageUrl,
    fruitImageUrl,
    fishImageUrl,
    vegeImageUrl,
    nutImageUrl,
  })
    .then((result) => {
      console.log("상품 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send("상품 업로드에 문제가 발생했습니다");
    });
});

//image라는 이름의 파일이 들어왔을때 처리해주는 로직
//multer를 사용하게되었을 때 file정보 중 path를 post
app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  res.send({
    imageUrl: file.path,
  });
});

app.get("/pet_health", (req, res) => {
  models.Pet_health.findAll()
    .then((result) => {
      console.log("Pet_Health:", result);
      res.send({
        pet_health: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("에러 발생");
    });
});

app.post("/pet_health", (req, res) => {
  const body = req.body;
  const { pet_id, health_id } = body;
  if (!pet_id || !health_id) {
    res.send("모든 필드를 입력해주세요");
  }

  models.Pet_health.create({
    pet_id,
    health_id,
  })
    .then((result) => {
      console.log("반려동물 건강정보 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("반려동물 건강정보 업로드에 문제가 발생했습니다");
    });
});

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
app.get("/allergyfood/:pet_id", (req, res) => {
  const params = req.params;
  const { pet_id } = params;
  models.allergy_food
    .findOne({
      where: {
        pet_id: pet_id,
      },
    })
    .then((result) => {
      console.log("allergy_food: ", result);
      res.send({
        allergy_food: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("유저 조회에 에러가 발생했습니다");
    });
});
app.put("/allergyfood/:pet_id", (req, res) => {
  const pet_id = parseInt(req.params.pet_id);
  const { allergy_food_id } = req.body;

  return models.allergy_food
    .findOne({
      where: {
        pet_id: pet_id,
      },
    })
    .then((result) => {
      const { allergy_food_id } = req.body;
      return result
        .update({ allergy_food_id })
        .then(() => res.send(result))
        .catch((err) => {
          console.log(
            "알러지 유발 음식 정보 수정에 에러가 발생했습니다.",
            JSON.stringify(err)
          );
          res.status(400).send(err);
        });
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
