const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("I am MERN Stack Developer");
});

app.listen(3000);

// to create a server
// step 1 npm init -y
// step 2 npm i install
