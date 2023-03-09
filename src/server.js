const express = require("express"); // commonjs
const path = require("path");
require("dotenv").config();
const app = express(); // app express

//console.log(">>> check env: ", process.env);
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static files
app.use(express.static(path.join(__dirname, "public")));

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

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
