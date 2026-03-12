const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

// Post Api /notes
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Note create successfully",
  });
});

// Get Api /notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetch successfully",
    notes,
  });
});

// Delete Api /notes/:index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "Note delete successfully",
  });
});

// Patch Api /notes/:index
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title, description } = req.body;
  notes[index].title = title;
  notes[index].description = description;
  res.status(200).json({
    message: "Note update successfully",
  });
});

module.exports = app;
