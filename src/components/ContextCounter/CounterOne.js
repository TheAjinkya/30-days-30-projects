import React from 'react'
import { useCounterConext } from './CountContext'

function CounterOne() {

    const { value } = useCounterConext()
    const { countState, countDispatch } = value

    return (
        <div>
           ComponentOne: <button className='bg-red-600 text-white m-2 p-2' onClick={() => countDispatch({ type: "ADD", payload: 1 })}>increment by 1</button>
            <button className='bg-red-600 text-white m-2 p-2' onClick={() => countDispatch({ type: "SUBSTRACT", payload: 1 })}>Decrement by 1</button>
            <button className='bg-red-600 text-white m-2 p-2' onClick={() => countDispatch({ type: "CLEAR", payload: 0 })}>Reset</button>
        </div>
    )
}

export default CounterOne