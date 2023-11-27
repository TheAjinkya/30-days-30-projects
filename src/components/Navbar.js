import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Authentication/Auth'

function Navbar() {

    const auth = useAuth();
    const styleLinkObject = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }
    return (<div>
        <nav className='bg-indigo-500 flex text-white p-4'>
            <NavLink className="m-2" style={styleLinkObject} to="/home">Home</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/about">About</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/contact">Contact</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/products">Products</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/users">Users</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/profile">Profile</NavLink>
            <NavLink className="m-2" style={styleLinkObject} to="/HOC">HOC</NavLink>

            {!auth.user && <NavLink className="m-2" style={styleLinkObject} to="/login">Login</NavLink>}
            {auth.user && <NavLink className="m-2" style={styleLinkObject} to="/logout">Logout</NavLink>}
        </nav>
    </div>)
}

export default Navbar