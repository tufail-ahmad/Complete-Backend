const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (err) {
    console.log("error while connected MongoDb");
  }
}

module.exports = connectDb;
