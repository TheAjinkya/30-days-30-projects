import React from 'react'
import { useCounterConext } from './CountContext'

function CounterThree() {
  const { value } = useCounterConext()
    const { countState, countDispatch } = value

    return (
        <div>
        ComponentThree: <button className='bg-green-500 text-white m-2 p-2' onClick={() => countDispatch({ type: "ADD", payload: 5 })}>increment by 5</button>
            <button className='bg-green-500 text-white m-2 p-2' onClick={() => countDispatch({ type: "SUBSTRACT", payload: 5 })}>Decrement by 5</button>
            <button className='bg-green-500 text-white m-2 p-2' onClick={() => countDispatch({ type: "CLEAR", payload: 0 })}>Reset</button>
        </div>
    )
}

export default CounterThree