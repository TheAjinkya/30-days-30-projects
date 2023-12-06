import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartReducer, incrementCart, toggleCart } from '../ReduxCounter/redux/countSlice';

function CartMenu() {

    const cartStore = useSelector(store => store.cart);

    const dispatch = useDispatch()

    console.log("cartStore", cartStore)

    const showCartHandler = () => {
        dispatch(incrementCart(1))
    }
    return (
        <div>
            <button onClick={() => { dispatch(toggleCart()) }} className='bg-blue-700 p-2 m-2 text-white'>Cart Menu ({cartStore.value})</button>
        </div>
    )
}

export default CartMenu