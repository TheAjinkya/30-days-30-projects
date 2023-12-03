import React from 'react'
import FirstCounter from './FirstCounter'
import SecondCounter from './SecondCounter'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { login } from './redux/countSlice'

function MainCounter() {
    const count = useSelector(state => state.count.value);
    const auth = useSelector(state => state.auth.authenticated);

    const dispatch = useDispatch()

    console.log("auth", auth);
    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MainCounter: {count}
                </h5>
                <br />
                <button className='bg-blue-700 text-white m-2 p-2' onClick={() => dispatch(login())}>{auth ? <>Sign Out</> : <>Sign In</>}</button>
                <br />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    User LoggedIn: {auth ? <>True</> : <>false</>}
                </h5>
                <hr />
                <FirstCounter />
                <hr />
                <SecondCounter />
            </div>
            <hr />


            {/* <Outlet /> */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <NavLink className="bg-cyan-300 m-4 p-2 border border-solid" to="redux-counter">Redux Basic Counter</NavLink></h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is created by the plain redux library</p>
                <Outlet />
            </div>
        </div>)
}

export default MainCounter