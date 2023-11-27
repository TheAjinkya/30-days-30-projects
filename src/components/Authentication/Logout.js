import React from 'react'
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        auth.logout()
        navigate("/login")
    }

  return (
    <div>
        Logout here: <br/>
        <button onClick={handleLogout()}>Logout</button>
    </div>
  )
}

export default Logout