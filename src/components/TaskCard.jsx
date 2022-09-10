import Button from "./Button";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const TaskCard = ({ task }) => {
  const { deleteItem } = useContext(ApiContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bol capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <Button deleteItem={() => deleteItem(task.id)} />
    </div>
  );
};

export default TaskCard;
