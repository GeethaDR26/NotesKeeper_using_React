import React, { useState } from "react";

export default function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() && note.content.trim()) {
      props.onAdd(note);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <div className="create-note">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
      />
      <button onClick={submitNote}>Add</button>
    </div>
  );
}
