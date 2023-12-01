import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderConfirmed from "./components/OrderConfirmed";
import PageNotFound from "./components/PageNotFound";
// import Products from "./components/Products";


import Featured from "./components/Featured";
import NewProducts from "./components/NewProducts";
import User from "./components/Users/User";
import UserDetails from "./components/Users/UserDetails";
import Admin from "./components/Admin";
import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Authentication/Login";
import { AuthProvider } from "./components/Authentication/Auth";
import Logout from "./components/Authentication/Logout";
import RequireAuth from "./components/Authentication/RequireAuth";
import CounterOne from "./components/HOComp/CounterOne";
import Todolist from "./components/todo-app/Todolist";
import MainCounter from "./components/ReduxCounter/MainCounter";
import { Provider } from "react-redux";
import { store } from "./components/ReduxCounter/redux/store";
import MainPhotoPage from "./components/PhotoApp/MainPhotoPage";

const LazyProducts = React.lazy(() => import("./components/Products"));

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Provider store={store}>
          <div className="flex flex-col">
            <div className="">
              <Navbar />
            </div>
            <div className="">
            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/order-placed" element={<OrderConfirmed />}></Route>
              <Route path="products" element={<React.Suspense fallback="Loading..."><RequireAuth><LazyProducts /></RequireAuth></React.Suspense>}>
                <Route index element={<Featured />}></Route>
                <Route path="featured" element={<Featured />}></Route>
                <Route path="new" element={<NewProducts />}></Route>
              </Route>
              <Route path="users" element={<User />}>
                <Route path="users/:id" element={<UserDetails />}></Route>
                <Route path="users/admin" element={<Admin />}></Route>
              </Route>
              <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/HOC" element={<CounterOne />}></Route>
              <Route path="/todoapp" element={<Todolist />}></Route>
              <Route path="/counter" element={<MainCounter />}></Route>
              <Route path="/unsplash" element={<MainPhotoPage />}></Route>
              <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
            </div>
          </div>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
