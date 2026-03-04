// This file is for creating server. It's a industry standard pattern
const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server has been started on port 3000");
});
