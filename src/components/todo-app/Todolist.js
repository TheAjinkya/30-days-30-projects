import React, { useCallback, useState } from 'react'

function Todolist() {

    const initialList = []
    const [todolist, setTodolist] = useState(initialList)
    const [task, setTask] = useState()

    const addTask = useCallback(() => {
        if (task !== "") {
            setTodolist(prevData => [...prevData, task])
        }
    }, [task])

    const deleteTask = useCallback(
        (param) => {
            const modTodoList = todolist.filter(elm => elm !== param)
            setTodolist(modTodoList)
        },
        [todolist]
    )


    return (<>
        <div className='m-2'>
            <div className=''>
                <label className="inline-block text-sm font-medium leading-6 text-gray-900">
                    Enter the Task
                </label>
                <input type="text" onChange={(e) => setTask(e.target.value)} class="w-1/4 m-2  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <br />
            <button onClick={() => addTask()} className='bg-green-400 text-white p-2 m-2'>Add Task</button>
            <hr />
            <div className='flex justify-center'>
                <ul>
                    {todolist.map(element => <div className='flex justify-between'><div className='bg-yellow-500 text-white border border-solid p-2 m-2'>{element}</div>
                        <button onClick={() => deleteTask(element)} className='bg-red-600 p-2 m-2 text-white'>Delete</button></div>)}
                </ul>
            </div>
            <hr />
        </div>
    </>)
}

export default Todolist