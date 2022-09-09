import TaskCard from "./TaskCard";

const TaskList = ({ data }) => {
  if (data.length === 0) {
    return <h1>List Pending</h1>;
  }

  return (
    <div>
      {data.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
