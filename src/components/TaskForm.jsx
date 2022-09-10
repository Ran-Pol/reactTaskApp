import { useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";

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
    setTitle("");
    setDescrib("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 text-center"
      >
        <h1 className="tx-2xl text-white font-bold mb-2">
          What's your homework?
        </h1>
        <input
          placeholder="Type your homework"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Enter the description"
          onChange={(e) => setDescrib(e.target.value)}
          value={describ}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
