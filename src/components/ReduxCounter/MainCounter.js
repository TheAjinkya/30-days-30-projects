import React from 'react'
import FirstCounter from './FirstCounter'
import SecondCounter from './SecondCounter'
import { useSelector } from 'react-redux'

function MainCounter() {
    const count = useSelector(state => state.value)
    return (
        <div>MainCounter: {count} <br />
            <hr />
            <FirstCounter />
            <hr />
            <SecondCounter />
        </div>)
}

export default MainCounter