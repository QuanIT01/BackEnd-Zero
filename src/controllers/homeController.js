const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = [];
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

  // let [results, fields] = await connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (? , ? , ?)`,
  //   [email, name, city]
  // );
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.send("create user successd");
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

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
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
  postDeleteUser,
  postHandleRemoveUser,
};
