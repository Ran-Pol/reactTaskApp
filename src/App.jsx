import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";

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
