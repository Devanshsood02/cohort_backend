import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "test title",
      description: "test description",
    },
    {
      title: "test title",
      description: "test description",
    },
    {
      title: "test title",
      description: "test description",
    },
  ]);
  return (
    <>
      <div className="notes">
        <div className="note">
          <h2>title</h2>
          <p>description</p>
        </div>
      </div>
    </>
  );
}

export default App;
