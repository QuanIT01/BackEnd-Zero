const express = require("express");
const { getHomePage, getA, getB } = require("../controllers/homeController");
const router = express.Router();
// router.Method("/route , handler")

router.get("/", getHomePage);
router.get("/a", getA);
router.get("/b", getB);

module.exports = router; //export default
