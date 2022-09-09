const TaskList = ({data})=>  {

  if(data.length === 0){
    return <h1>List Pending</h1>
  }

  return (
    <div>
      {data.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList