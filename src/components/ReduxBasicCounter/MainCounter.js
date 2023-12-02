import React from 'react'
import FirstCounter from './FirstCounter'
import SecondCounter from './SecondCounter'
import { Provider, useSelector } from 'react-redux'
import  mainStore  from './Redux';

function MainCounter() {

    const count = useSelector(mainStore => mainStore.value);

    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Main Component </h5>
                <br />Count: {count}
            </div>
            <Provider store={mainStore}>
            <FirstCounter /> <br />
            <SecondCounter />
            </Provider>
        </div>
    )
}

export default MainCounter