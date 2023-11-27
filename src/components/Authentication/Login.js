import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [user, setUser] = useState('');

  const auth = useAuth();
  const navigate = useNavigate()

  const signin = useCallback(() => {
    if (user !== ""){
      auth.login(user)
      navigate("/profile", {require: true})
    }
  }, [user])


  return (
    <div>
      <label>Username: <br/>
        <input placeholder='guest' className='border border-b-gray-900' type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
      <button className='bg-green-400 text-white p-2 m-2' onClick={() => signin()}>Login</button>
    </div>
  )
}

export default Login