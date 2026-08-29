// const dotenv = require("dotenv")

// const path = require("path");
// dotenv.config({ path: path.resolve(__dirname, "../../.env") })


//  const config = {

//         MONGO_URI : process.env.MONGO_URI
// }


// module.exports = config


const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const config = {
  MONGO_URI: process.env.MONGO_URI
};

module.exports = config;