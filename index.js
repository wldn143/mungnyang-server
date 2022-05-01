const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
app.use(cors());
// const server = http.createServer(function (req, res) {
//   const path = req.url;
//   const method = req.method;
//   if (path === "/sign-up") {
//     if (method === "GET") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       const products = JSON.stringify([
//         {
//           name: "채지우",
//           email: "wldn143@naver.com",
//         },
//       ]);
//       res.end(products);
//     } else if (method === "POST") {
//       res.end("생성되었습니다!");
//     }
//   }
//   res.end("Good Bye");
// });

server.listen(port, hostname);

console.log("mungnyang server on!");
