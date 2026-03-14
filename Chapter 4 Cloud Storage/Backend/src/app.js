const express = require("express");
const multer = require("multer");
const uploadImage = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const body = req.body;
  const file = req.file;
  const result = await uploadImage(file);
  await postModel.create({
    image: result.url,
    caption: body.caption,
  });

  res.status(201).json({
    message: "Post create successfully",
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "Posts fetch successfully",
    posts,
  });
});

module.exports = app;
