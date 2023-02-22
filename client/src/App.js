import React, { useState } from "react";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import "./App.css";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [array, addArray] = useState([]);
  const [selected, setSelected] = useState(null);

  function deleteItem(id) {
    addArray((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <main className="container">
        <CreateArea
          selected={selected}
          onClick={(note) => {
            addArray((prev) => {
              return [...prev, note];
            });
          }}
        />

        <div className="notes">
          {array
            .slice(0)
            .reverse()
            .map((note) => (
              <motion.div style={{ position: "relative" }}>
                <motion.div
                  className="note"
                  key={note.id}
                  layoutId={note.id}
                  onClick={() => setSelected(note)}
                >
                  <motion.h1>{note.title}</motion.h1>
                  <motion.p>
                    {note.content.length > 150
                      ? note.content.slice(0, 150)
                      : note.content}
                  </motion.p>
                </motion.div>
                <IconButton
                  onClick={() => {
                    deleteItem(note.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </motion.div>
            ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div className="animate-container">
              <motion.div layoutId={selected.id} className="animate">
                <motion.button
                  className="close"
                  onClick={() => setSelected(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.input
                  type="text"
                  readOnly
                  className="title"
                  value={selected.title}
                />
                <motion.div className="textarea-container">
                  <motion.textarea readOnly value={selected.content} />
                </motion.div>
                <motion.div className="buttons">
                  <motion.button>Edit</motion.button>
                  <motion.button>Save</motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
