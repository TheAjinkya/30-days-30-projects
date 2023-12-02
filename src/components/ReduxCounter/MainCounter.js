import React from 'react'
import FirstCounter from './FirstCounter'
import SecondCounter from './SecondCounter'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

function MainCounter() {
    const count = useSelector(state => state.value)
    return (
        <div>MainCounter: {count} <br />

            <hr />
            <FirstCounter />
            <hr />
            <SecondCounter />
            <hr />


            {/* <Outlet /> */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <NavLink className="bg-cyan-300 m-4 p-2 border border-solid" to="redux-counter">Redux Basic Counter</NavLink></h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is created by the plain redux library</p>
                <Outlet/>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a> */}
            </div>
        </div>)
}

export default MainCounter