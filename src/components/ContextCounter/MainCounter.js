import React from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import CounterThree from './CounterThree'
import { useCounterConext } from './CountContext'

function MainCounter() {
    const {value} = useCounterConext()
    console.log("value", value.countState.value)
    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MainCounter: {value.countState.value}
                </h5>
                <br />
                
                <hr />
                <CounterOne />
                <hr />
                <CounterTwo />
                <hr />
                <CounterThree />
            </div>
            <hr />
            
        </div>
    )
}

export default MainCounter