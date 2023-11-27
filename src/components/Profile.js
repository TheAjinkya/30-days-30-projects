import React from 'react'
import { useAuth } from './Authentication/Auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const auth = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate("/login")
    }
    console.log("Auth", auth)
    return (
        <div>Welcome: {auth.user} <br/>
            <button className='m-2 p-2 bg-green-400 text-white' onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

export default Profile