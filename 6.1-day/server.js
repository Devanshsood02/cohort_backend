const app = require("./src/app.js")

const mongoose = require("mongoose")


function connectToDb (){
   mongoose.connect("uri")

   .then(()=>{
    console.log("connected to database")
   })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})