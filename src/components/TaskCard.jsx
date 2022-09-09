const TaskCard = ({task, deleteItem})=> {
  return (
    <div>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
    <button onClick={deleteItem}>Delete Homework</button>
  </div>
  )
}

export default TaskCard