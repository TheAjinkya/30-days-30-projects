import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCart, incrementCart } from '../ReduxCounter/redux/countSlice';

function AddProducts() {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Products </h5>
                <button onClick={() => dispatch(incrementCart(1))} className='bg-green-500 p-2 m-2 text-white'>Add</button>
                <button onClick={() => dispatch(decrementCart(1))} className='bg-red-600 p-2 m-2 text-white'>Remove</button>
            </div>
        </div>
    )
}

export default AddProducts