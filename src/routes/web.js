const express = require("express");
const {
  getHomePage,
  getA,
  getB,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();
// router.Method("/route , handler")

router.get("/", getHomePage);
router.get("/a", getA);
router.get("/b", getB);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router; //export default
