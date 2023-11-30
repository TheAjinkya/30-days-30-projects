import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/countSlice'

function SecondCounter() {

    const dispatch = useDispatch()

    const count = useSelector(state => state.value)

    return (
        <div>Second component<br />
            <button className='bg-yellow-500 text-white m-2 p-2' onClick={() => dispatch(increment(10))}>increment</button>
            <button className='bg-yellow-500 text-white m-2 p-2' onClick={() => dispatch(decrement(5))}>Decrement</button>
            <button className='bg-yellow-500 text-white m-2 p-2' onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )

}

export default SecondCounter