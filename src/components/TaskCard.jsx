import Button from "./Button";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const TaskCard = ({ task }) => {
  const { deleteItem } = useContext(ApiContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Button deleteItem={() => deleteItem(task.id)} />
    </div>
  );
};

export default TaskCard;
