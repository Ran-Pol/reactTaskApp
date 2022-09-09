import {tasks as data} from './tasks'
import { useState, useEffect} from 'react'

const TaskList = ()=>  {
  const [tasks, setarrayTasks] = useState([]);

  useEffect(()=>{
    setarrayTasks(data)
  }, [])


  if(tasks.length === 0){
    return <h1>List Pending</h1>
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList