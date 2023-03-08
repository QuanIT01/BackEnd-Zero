const express = require("express"); // commonjs
const path = require("path");
const app = express(); // app express
const port = 8081; //port

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/a", (req, res) => {
  res.send("Hello World!");
});

app.get("/b", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
