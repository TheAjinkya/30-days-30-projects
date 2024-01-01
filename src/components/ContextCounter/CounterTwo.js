import React from 'react'
import { useCounterConext } from './CountContext'

function CounterTwo() {
    const { value } = useCounterConext()
    const { countState, countDispatch } = value

    return (
        <div>
          ComponentTwo:  <button className='bg-blue-700 text-white m-2 p-2' onClick={() => countDispatch({ type: "ADD", payload: 10 })}>increment by 10</button>
            <button className='bg-blue-700 text-white m-2 p-2' onClick={() => countDispatch({ type: "SUBSTRACT", payload: 10 })}>Decrement by 10</button>
            <button className='bg-blue-700 text-white m-2 p-2' onClick={() => countDispatch({ type: "CLEAR", payload: 0 })}>Reset</button>
        </div>
    )
}

export default CounterTwo