// This is for starting server. This is a industry standard way.
const app = require("./src/app");
const connectDb = require("./src/db/db");

connectDb();

app.listen(3001, () => {
  console.log("Server started on port 3000");
});
