import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import axios from "axios"

function App() {

  const [notes, setNotes] = useState([
    {
      title: "test title 1",
      description: "test description 1",
    },
    {
      title: "test title 2",
      description: "test description 2",
    },
    {
      title: "test title 3",
      description: "test description 3",
    },
  ]);

axios.get("http://localhost:3000/api/notes")
.then((res)=>{
  setNotes(res.data.notes)
})


  return (
    <>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
