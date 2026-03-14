const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controller");

router.post("/register", authControllers.registerUser);
router.get("/login", authControllers.loginUser);

module.exports = router;
