import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
    return (
        <div>
            UserDetails {params.id} <br />
        </div>
    )
}

export default UserDetails