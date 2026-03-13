const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { userName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExists) {
    res.status(409).json({
      message: "User already exists",
    });
  }

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "User register successfully",
    user,
  });
}

module.exports = { register };
