import React from 'react'
import Cart from './Cart'
import CartMenu from './CartMenu'
import AddProducts from './AddProducts'
import { useSelector } from 'react-redux'

function ReduxCart() {
    const cartStore = useSelector(store => store.cart);
    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redux Cart </h5>
                <CartMenu /> <br />
                {cartStore.value > 0 && <Cart />}
                <AddProducts />
            </div>
        </div>
    )
}

export default ReduxCart