const express = require("express");
const {
  getHomePage,
  getA,
  getB,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();
// router.Method("/route , handler")

router.get("/", getHomePage);
router.get("/a", getA);
router.get("/b", getB);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
