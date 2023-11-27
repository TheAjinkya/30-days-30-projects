import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>User Name:  <br />
        <Link to="users/1">User Details</Link>
        <br />
            <Outlet />

    </div>
  )
}

export default User