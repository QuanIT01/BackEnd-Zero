const connection = require("./config/database");

const getHomePage = (req, res) => {
  //process data
  //call models
  let users = [];
  connection.query("select * from Users u ", function (err, results, fields) {
    users = results;
    console.log(">>> results=", results); // results contains rows returned by server
    console.log(">>> check users: ", users);
    res.send(JSON.stringify(users));
  });
};

const getA = (req, res) => {
  res.send("Hello World 2!");
};
const getB = (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getA,
  getB,
};
