const express = require("express");
const noteModel = require("./models/note.Model");

const cors = require ("cors")

const path = require("path");



const app = express();
app.use(cors())

app.use(express.json());

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Note created Suceesfully",
    title,
    description,
  });
});

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "aLL NOTES FETCHED SUCCESSFULLY",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;

  const deletedNote = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note Deleted Sucessfully",
    note: deletedNote.title,
  });
});

// app.patch("/api/notes/:id", async(req,res)=>{
//     const {id}= req.params

//     const updatedNotes = await noteModel.findByIdAndUpdate( {id,title, description }, { new: true })

// })

app.patch("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedNotes = await noteModel.findByIdAndUpdate(
    id,

    { title, description },
    { new: true },
  );

  res.status(200).json({
    message: "Note Updated Successfully",

    note: updatedNotes,
  });
});

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
module.exports = app;
