import Button from "./Button";
const TaskCard = ({ task, deleteItem }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Button deleteItem={deleteItem} />
    </div>
  );
};

export default TaskCard;
