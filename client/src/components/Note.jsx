import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const content = props.content;

  return (
    <div className="note">
      <h1>{props.title}</h1>

      <p>{content.length > 130 ? content.slice(0, 130) + "..." : content}</p>

      <IconButton
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
