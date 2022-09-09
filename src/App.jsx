import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setarrayTasks] = useState([]);

  const updateTasksArray = (newArray) => {
    setarrayTasks(newArray);
  };

  useEffect(() => {
    setarrayTasks(data);
  }, []);

  return (
    <>
      <h1>My Homework Task</h1>
      <TaskForm data={tasks} updateArray={updateTasksArray}/>
      <TaskList data={tasks} />
    </>
  );
}

export default App;
