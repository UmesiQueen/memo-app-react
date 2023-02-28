import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import Axios from "axios";
import "./App.css";

function App() {
  const [memos, addMemo] = useState([]);
  const [selected, setSelected] = useState(null);

  const client = Axios.create({
    baseURL: "https://memo-app-q5de.onrender.com/",
  });

  useEffect(() => {
    client
      .get()
      .then((res) => {
        const result = res.data;
        addMemo(result);
      })
      .catch((err) => {
        console.error(`Read Error(DB): ${err}`);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const InsertMemo = (memo) => {
    client
      .post("", memo)
      .then((res) => {
        const result = res.data;
        addMemo([...memos, result]);
      })
      .catch((err) => {
        console.error(`Insert Error(DB): ${err}`);
      });
  };

  // const UpdateMemo = () => {
  // };

  const DeleteMemo = (id) => {
    client
      .delete("", { data: { _id: id } })
      .then(() => {
        addMemo(memos.filter((memo) => memo._id !== id));
      })
      .catch((err) => {
        console.error(`Delete Error(DB): ${err}`);
      });
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <CreateArea
          selected={selected}
          onClick={(note) => {
            InsertMemo(note);
          }}
        />

        <div className="notes">
          {memos
            .slice(0)
            .reverse()
            .map((note) => (
              <motion.div style={{ position: "relative" }} key={note._id}>
                <motion.div
                  className="note"
                  layoutId={note._id}
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
                    DeleteMemo(note._id);
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
              <motion.div layoutId={selected._id} className="animate">
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
