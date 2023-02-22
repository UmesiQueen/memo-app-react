import React, { useState } from "react";
import { v4 } from "uuid";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({ id: "", title: "", content: "" });
  const [zoom, setZoom] = useState(false);

  const getNote = (e) => {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        id: v4(),
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {zoom && (
          <input
            style={{ fontWeight: 700 }}
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={getNote}
          />
        )}

        <textarea
          name="content"
          placeholder="I've got an idea..."
          rows={zoom ? 3 : 1}
          onChange={getNote}
          value={note.content}
          onClick={() => {
            setZoom(true);
          }}
        />

        <Zoom in={zoom}>
          <Fab
            style={{ display: props.selected ? "none" : "flex" }}
            onClick={(e) => {
              props.onClick(note);
              setNote({ id: "", title: "", content: "" });
              e.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
