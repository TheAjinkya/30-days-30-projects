import React from 'react'
import { useDispatch } from 'react-redux'

function FirstCounter() {
    const dispatchEvt = useDispatch();
    const clickHandler = () => {
        console.log("Hello")
        dispatchEvt({ type: 'increment' })
    }
    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First Component </h5>
                <button onClick={clickHandler} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800"> increment</button>
            </div>
        </div>
    )
}

export default FirstCounter