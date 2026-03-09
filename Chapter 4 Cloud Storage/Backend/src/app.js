const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadImage = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const body = req.body;
  const buffer = req.file.buffer;
  const result = await uploadImage(buffer);
  const post = await postModel.create({
    image: result.url,
    caption: body.caption,
  });
  res.status(201).json({
    message: "Post create successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "Post fetch successfully",
    posts,
  });
});

module.exports = app;
