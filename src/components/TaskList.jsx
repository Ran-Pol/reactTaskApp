import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const TaskList = () => {
  const { tasks } = useContext(ApiContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        List Pending
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
