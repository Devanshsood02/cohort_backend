/*
 app.js ke kam 


 -- server ko create krna 
 --server ko config krna

*/





    const express = require("express")
    const app = express()


    app.use(express.json()) // it is a kind of middleware which is used so the server can read the data from the body



    const notes =[]


    app.post("/notes",(req,res)=>{
        console.log(req.body)

        notes.push(req.body)
        console.log("notes = ", notes)
        
        res.send("note created")
    })

    // fetching the data 
    


    app.get("/notes",(req,res)=>{
        
        res.send(notes)
        console.log(notes)
    })

    // Imp Revelation = As notes is not saved anywhere so everytime there is change in the js file in the server side the array becomes empty so we have to again create notes then use the get method 


    app.delete(`/notes/:index`,(req,res)=>{
        
// console.log(req.params.index)

delete notes[req.params.index]

        res.send("note deleted")
        // console.log("note which is delted ",notes)
    })


// very  very imp revelation = jb bhi hmare pass kafi bda data ho kind of description we use req.body to extract and  when the data is in single value we use req.params for it ..   that's the main difference where we use them


// bina colon ke params kaam hi nhi krta hai 

app.patch("/notes/:index",(req,res)=>{

   

    notes [req.params.index].title = req.body.title,
    notes[req.params.index].description = req.body.description

    res.send("notes updated succesfully")
    
})

    module.exports= app