const express = require("express");
const multer = require("multer");
const { uploadImage } = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// Post Api /create-post
app.post("/create-post", upload.single("image"), async (req, res) => {
  const { caption } = req.body;
  const { buffer } = req.file;
  const result = await uploadImage(buffer.toString("base64"));
  const post = await postModel.create({
    image: result.url,
    caption: caption,
  });
  res.status(201).json({
    message: "Post create successfully",
    post,
  });
});

//Get Api /posts
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "Posts fetch successfully",
    posts,
  });
});

module.exports = app;
