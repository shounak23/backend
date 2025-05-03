require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Mistysouras!!!<h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h3>How are you!!!<h3>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
