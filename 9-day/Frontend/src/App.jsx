import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDescription, setEditDescription] = useState("");

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();

   
  }, []);

  function handleSubmit(e){
    e.preventDefault()

    const {title,description}= e.target.elements
    console.log(title.value,description.value)

    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then((res)=>{
      console.log(res.data)
      fetchNotes()

    })


  }

  function handleDelete(noteId){

    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then((res)=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  function handleUpdate(id){

    // console.log(id)
    axios.patch("http://localhost:3000/api/notes/"+id,{title:editTitle,description:editDescription})
    .then((res)=>{
      console.log(res.data)
      setEditingId(null);
      fetchNotes()
    })
  }




 return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter title"
        />

        <input
          name="description"
          type="text"
          placeholder="Enter Description"
        />

        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note._id}>
              {editingId === note._id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />

                  <input
                    type="text"
                    value={editDescription}
                    onChange={(e) =>
                      setEditDescription(e.target.value)
                    }
                  />

                  <button onClick={() => handleUpdate(note._id)}>
                    Save
                  </button>

                  <button onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2>{note.title}</h2>

                  <p>{note.description}</p>

                  <button
                    onClick={() => {
                      handleDelete(note._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(note._id);
                      setEditTitle(note.title);
                      setEditDescription(note.description);
                    }}
                  >
                    Update Note
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );

}

export default App;
