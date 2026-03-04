// This file is for creating server. This is a industry standard pattern
const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

// Post Api /notes
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Notes create successfully",
  });
});

// Get Api /notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Note fetch successfully",
    notes,
  });
});

// Delete Api /notes/:index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

// Patch Api /notes/:index
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const newDescription = req.body.description;
  notes[index].description = newDescription;
  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;
