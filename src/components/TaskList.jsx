import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const TaskList = () => {
  const { tasks } = useContext(ApiContext);

  if (tasks.length === 0) {
    return <h1>List Pending</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id}  task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
