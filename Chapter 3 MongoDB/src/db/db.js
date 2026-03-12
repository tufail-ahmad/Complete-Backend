const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://TufailAdmin:CEIJKlgrE8njjQ2v@complete-backend.289hkrr.mongodb.net/completeBackend",
  );

  console.log("MongoDb connected");
}

module.exports = connectDb;
