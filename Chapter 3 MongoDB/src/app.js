const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

//Post Api /notes
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  await noteModel.create({
    title: title,
    description: description,
  });
  res.status(201).json({
    message: "Note create successfully",
  });
});

//Get Api /notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Note fetch successfully",
    notes,
  });

  // when we use find method then it give us an array of objects if the objects exists in array. if the objects don't exist in array then they give empty array.
  // if we use findOne method then it give us a objects. if we call the object, of which doesn't exist in database then findOne give us "null".
});

//Delete Api /notes/:id
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete({ _id: id });
  res.status(200).json({
    message: "Delete note successfully",
  });
});

//Patch Api /notes/:id
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await noteModel.findOneAndUpdate(
    { _id: id },
    {
      title: body.title,
      description: body.description,
    },
  );
  res.status(200).json({
    message: "Note update successfully",
  });
});

module.exports = app;
