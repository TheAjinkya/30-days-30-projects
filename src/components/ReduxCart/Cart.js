import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Cart() {

    const cartStore = useSelector(store => store.cart);

    useEffect(() => {
        fetch("https://reduxcart-62b7a-default-rtdb.firebaseio.com/abc.json", {
            method: "POST",
            mode: 'no-cors',
            body: JSON.stringify(cartStore)
        })
        console.log("Data updated with ", cartStore)
    }, [cartStore])

    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cart Details </h5>
                Cart: {cartStore.value}
            </div>

        </div>
    )
}

export default Cart