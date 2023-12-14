import React, { useContext, useState } from 'react'
import { MainContext } from '../QuizApp';

const quizData = [{
    'question': 'What is the capital of England',
    'options': ['London', 'Paris', 'Zurich', 'Delhi'],
    'answer': 1
},
{
    'question': 'What is the capital of France',
    'options': ['London', 'Paris', 'Zurich', 'Delhi'],
    'answer': 2
},
{
    'question': 'What is the capital of Switzerland',
    'options': ['London', 'Paris', 'Zurich', 'Delhi'],
    'answer': 3
}
]

function QuizCard() {
    const { currentState, setCurrentState } = useContext(MainContext);
    const [questioNum, setQuestioNum] = useState(0);
    const options = quizData[questioNum].options

    const nextQuestion = () => {
        const totalNum = quizData.length-1;
        setQuestioNum(prevValue => {
            if (prevValue < totalNum) {
                return prevValue + 1
            } else {
                setCurrentState("finish")
                return 0
            }
        })
    }

    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {quizData[questioNum].question} </h5>
                <br />
                {options && options.map(elm => {
                    return (<>
                        <button className='bg-blue-700 hover:bg-blue-200 hover:text-black  text-white p-2 m-2 w-24'>{elm}</button> <br />
                    </>)
                })}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { setCurrentState("menu") }} className='bg-purple-600 text-white p-2 m-2 w-24'>Prev</button> <br />
                <button onClick={() => { nextQuestion() }} className='bg-purple-600 text-white p-2 m-2 w-24'>Next</button> <br />
            </div>
        </div>)
}

export default QuizCard