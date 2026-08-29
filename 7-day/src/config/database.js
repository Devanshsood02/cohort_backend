// const mongoose =require("mongoose")

// const config = require("./config.js")



// function connectToDB(){

//     try{
//     mongoose.connect(config.MONGO_URI)
  
//     .then(()=>{
//         console.log("Connecte to DB")
//     })
// }

// catch(err){
// console.log(err)
// }

// }

// module.exports = connectToDB







const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
}

module.exports = connectToDB;