import React, { useContext } from 'react'
import { MainContext } from '../QuizApp';

function FinishCard() {
    const { currentState, setCurrentState } = useContext(MainContext);
    return (<div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> You've completed the Quiz </h5>
            <br />
            <div className='flex justify-center'>
                <button onClick={()=>{setCurrentState("menu")}} className='bg-purple-600 text-white p-2 m-2 w-36'>Start New Quiz</button> <br />
            </div>
            
        </div>
    </div>)
}

export default FinishCard