const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getA = (req, res) => {
  res.send("Hello World 2!");
};
const getB = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  console.log(">>> email: ", email, "name =", name, "city = ", city);
  //let {email , name , city} = req.body
  /*connection.query(
    `INSERT INTO Users (email, name, city) VALUES (? , ? , ?)`,
    [email, name, city],
    function (err, results) {
      res.send("create user successfully!");
    }
  );*/
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (? , ? , ?)`,
    [email, name, city]
  );
  console.log(">>> check results", results);
  res.send("create user successfully!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getA,
  getB,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
