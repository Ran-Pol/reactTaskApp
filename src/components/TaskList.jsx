import TaskCard from "./TaskCard";

const TaskList = ({ data, updateArray }) => {
  if (data.length === 0) {
    return <h1>List Pending</h1>;
  }

  return (
    <div>
      {data.map((task) => (
        <TaskCard key={task.id} task={task} deleteItem={()=>updateArray(task.id)}/>
      ))}
    </div>
  );
};

export default TaskList;
