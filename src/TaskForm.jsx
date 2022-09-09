import { useState } from "react";

const TaskForm = ({data, updateArray}) => {
  const [title, setTitle] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();

    updateArray([...data,{
        id: data.length,
        title: title,
        description: `My ${data.length} homework`,
    }]);
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your homework"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
