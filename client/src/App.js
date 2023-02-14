import React, { useState } from "react";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [array, addArray] = useState([]);
  return (
    <div>
      <Header />
      <main className="container">
        <CreateArea
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
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onClick={(id) => {
                  addArray((prev) => prev.filter((item) => item.id !== id));
                }}
              />
            ))}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
