import React, { useCallback, useState } from 'react'
let globalCount = 0;

function QuizApp() {


  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const submitTask = useCallback(() => {
    setTodos(prevData => [...prevData, { id: globalCount++, name: task }])
    console.log("New Task ", task)
  }, [task])

  const deleteTask = useCallback((id) => {
    console.log("deletetask, todos", id, todos);
    setTodos(todos.filter(elm => elm.id !== id))
  }, [todos])


  return (
    <div>
      <input type='text' onChange={(e) => { setTask(e.target.value) }} />
      <button onClick={() => { submitTask() }} className='bg-blue-700 text-white m-2 p-2'>Add Task</button>
      <hr />

      {todos.map(elm => {
        return (<ul>
          <li>{elm.id} {elm.name} <button onClick={() => { deleteTask(elm.id) }}>Delete</button> </li>
        </ul>
        )
      })}

    </div>
  )
}

export default QuizApp