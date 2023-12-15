import React, { useContext, useState } from 'react'
import { MainContext } from '../QuizApp';

function Menu() {

    const { currentState, setCurrentState, userName, setUsername } = useContext(MainContext);
   

    return (<div>
        <div className="p-6 bg-teal-500 h-96 border border-gray-200 rounded-lg shadow
         dark:bg-gray-800 dark:border-gray-700">
            <div className='grid grid-cols-2 gap-4 content-center'>
                <input type='text' onChange={(e) => { setUsername(e.target.value) }}
                    placeholder='ex. John Smith' />
                <button className='bg-blue-700 text-white'
                    onClick={() => { setCurrentState("quiz") }}>Start Quiz</button>
            </div>
        </div>
    </div>)
}

export default Menu