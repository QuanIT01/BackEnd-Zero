const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getA = (req, res) => {
  res.send("Hello World 2!");
};
const getB = (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  console.log(">>> email: ", email, "name =", name, "city = ", city);
  //let {email , name , city} = req.body
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (? , ? , ?)`,
    [email, name, city],
    function (err, results) {
      res.send("create user successfully!");
    }
  );
};

module.exports = {
  getHomePage,
  getA,
  getB,
  postCreateUser,
};
