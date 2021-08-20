import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  let [zoomcontrol, changeZoom] = useState(false);
  let [rowControl, changeRow] = useState(1);
  let [titleControl, changetitle] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    changeRow(1);
    changeZoom(false);
    changetitle(false);
  }

  function increaseRow() {
    changeRow(3);
    changetitle(true);
    changeZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        {titleControl && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rowControl}
          onClick={increaseRow}
        />
        <Zoom in={zoomcontrol}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
