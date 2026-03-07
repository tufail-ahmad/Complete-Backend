// This is for creating server. It's a industry standard way.
const express = require("express");
const noteModel = require("./models/note.model");
//CEIJKlgrE8njjQ2v
const app = express();
app.use(express.json());

// Post Api /notes
app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note create",
  });
});

// Get Api /notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });

  // if we use find without any data then it give us an array of objects. if we use find with any model field then it give us an array of single object. if we use find method to find such a model of which doesn't exist in array than the find method give us an empty array []

  // if we use findOne method to find any object in model then it give us an object {}. if we use findOne method to find such a object which doesn't exist in array then it give us null.
});

// Delete Api /notes/:id
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete({ _id: id });
  res.status(200).json({
    message: "Note delete",
  });
});

// Patch Api /notes/:id
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await noteModel.findByIdAndUpdate(
    { _id: id },
    {
      title: body.title,
      description: body.description,
    },
  );
  res.status(200).json({
    message: "Note updated",
  });
});

module.exports = app;
