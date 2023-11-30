import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { decrement, increment, reset } from './redux/countSlice'

function FirstCounter() {

    const dispatch = useDispatch()

   

    return (
        <div>FirstCounter<br />
            <button className='bg-red-600 text-white m-2 p-2' onClick={() => dispatch(increment(10))}>increment</button>
            <button className='bg-red-600 text-white m-2 p-2' onClick={() => dispatch(decrement(5))}>Decrement</button>
            <button className='bg-red-600 text-white m-2 p-2' onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default FirstCounter