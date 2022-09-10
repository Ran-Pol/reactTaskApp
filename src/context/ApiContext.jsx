import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const ApiContext = createContext();

export function ApiContextProvider(props) {
  const [tasks, setarrayTasks] = useState([]);

  //Add Task Function
  const createTask = (newTask) => {
    setarrayTasks([
      ...tasks,
      {
        id: tasks.length,
        title: newTask.title,
        description: newTask.describ,
      },
    ]);
  
  };
  // Delete Task Function
  const deleteItem = (i) => {
    const arrayAfterDelete = tasks.filter((item) => item.id !== i);
    setarrayTasks(arrayAfterDelete);
  };
  // UsEffect function to render once the main component finsh crrating itself
  useEffect(() => {
    setarrayTasks(data);
  }, []);

  return (
    <ApiContext.Provider
      value={{
        tasks,
        createTask,
        deleteItem,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
