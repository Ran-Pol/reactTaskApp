import { useState, useContext } from "react";
import {ApiContext} from "../context/ApiContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [describ, setDescrib] = useState("");
  const { createTask } = useContext(ApiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      describ,
    });
    setTitle('');
    setDescrib('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your homework"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        cols="15"
        rows="5"
        placeholder="Enter the description"
        onChange={(e) => setDescrib(e.target.value)}
        value={describ}
      ></textarea>
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
