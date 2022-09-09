import { useState } from "react";

const TaskForm = ({ data, updateArray }) => {
  const [title, setTitle] = useState("");
  const [describ, setDescrib] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateArray([
      ...data,
      {
        id: data.length,
        title: title,
        description: describ,
      },
    ]);
    setTitle('');
    setDescrib('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your homework"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
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
