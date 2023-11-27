import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderConfirmed() {

    const navigate = useNavigate()

    return (
        <div>OrderConfirmed
            <br />
            <button className='m-2 p-2 bg-green-400 text-white border bottom-2' onClick={()=>navigate(-1)} >Go Back</button>
        </div>
    )
}

export default OrderConfirmed