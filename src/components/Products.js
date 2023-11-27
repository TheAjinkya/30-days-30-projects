import React from 'react'
import Featured from './Featured'
import NewProducts from './NewProducts'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'

function Products() {
    return (
        <div>
            Products <br></br>
            <nav className='bg-purple-950'>
            <NavLink className="m-2 text-white" to="featured">Featured</NavLink>
            <NavLink className="m-2 text-white" to="new">New</NavLink>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default Products