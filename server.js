const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/a", (req, res) => {
  res.send("Hello World!");
});

app.get("/b", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
