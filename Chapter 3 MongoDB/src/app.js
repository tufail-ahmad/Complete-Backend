const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const body = req.body;
  await noteModel.create({
    title: body.title,
    description: body.description,
  });

  res.status(201).json({
    message: "Note create successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetch successfully",
    notes,
  });

  // jab hum find ka use karte hai to ye hume objects ka ek array deta hai. aur agar hum find ka use karke dataBase mai se ek particular objects ko chahte hai to ye us object ko array me data hai aur agar wo object nahi hai to empty array [] deta hai.
  //jab hum findOne ka use karte hai database mai se kisi ek specific data ki lene ke liye to ye hume us data ko ek object me data hai aur agar koi esa data hai jo dataBase mai exist nahi krata to findOne hume "null" deta hai.
  //note: - find ka findOne ka hab hum use karte hai ek unique object ki find karne ke liye to hume {} ocject ek andar kuch unique cheez deni hoti hai jisse ye methods usko find kar sake.
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: "Note delete successfully",
  });
});

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
