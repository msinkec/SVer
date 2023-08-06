const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

//REGISTER USER
router.route("/register").post(authController.registerUser);
router.route("/login").post(authController.loginUser);

module.exports = router;
