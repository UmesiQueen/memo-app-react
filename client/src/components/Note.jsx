import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { motion } from "framer-motion";

function Note(props) {
  return (
    <motion.div style={{ position: "relative" }}>
      <motion.div
        className="note"
        
        layoutId={props.id}
       onClick={() => props.setSelectedId(props.id)}
      >
        <motion.h1>{props.title}</motion.h1>
        <motion.p>
          {props.content.length > 150
            ? props.content.slice(0, 150)
            : props.content}
        </motion.p>
      </motion.div>
      <IconButton
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </motion.div>
  );
}

export default Note;
