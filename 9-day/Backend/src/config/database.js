const mongoose = require("mongoose");

const { MONGO_URI } = require("./config.js");

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Database Connection Error", error.message);
  }
}


module.exports= connectToDB