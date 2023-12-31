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
import Todolist from "./components/todo-app/Todolist";
import MainCounter from "./components/ReduxCounter/MainCounter";
import ReduxBasicCounter from "./components/ReduxBasicCounter/MainCounter";
import { Provider } from "react-redux";
import { store } from "./components/ReduxCounter/redux/store";
import MainPhotoPage from "./components/PhotoApp/MainPhotoPage";
import CounterOne from "./components/CounterApp/CounterOne";
import MusicPlayer from "./components/MusicPlayerApp/MusicPlayer";
import CalenderApp from "./components/CalenderApp/CalenderApp";
import ImageSliderComp from "./components/ImageSlider/ImageSliderComp";
import ReduxCart from "./components/ReduxCart/ReduxCart";
import GitHubUsers from "./components/GithubProfiles/GitHubUsers";
import QuizApp from "./components/QuizApp/QuizApp";
import News from "./components/SpaceNews/News";
import MainContextCounter from "./components/ContextCounter/MainCounter"
import { CountProvider } from "./components/ContextCounter/CountContext"


const LazyProducts = React.lazy(() => import("./components/Products"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CountProvider>
          <Provider store={store}>
            <div className="flex flex-row">
              <div className="flex-auto w-6">
                <Navbar />
              </div>
              <div className="flex-auto w-2/4">
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
                  <Route path="/reduxcart" element={<ReduxCart />}></Route>
                  <Route path="/todoapp" element={<Todolist />}></Route>
                  <Route path="counter" element={<MainCounter />}>
                    <Route path="redux-counter" element={<ReduxBasicCounter />}></Route>
                  </Route>
                  <Route path="/unsplash" element={<MainPhotoPage />}></Route>
                  <Route path="/quiz" element={<QuizApp />}></Route>
                  <Route path="/audioplayer" element={<MusicPlayer />}></Route>
                  <Route path="/calender" element={<CalenderApp />}></Route>
                  <Route path="/imageslider" element={<ImageSliderComp />}></Route>
                  <Route path="/git" element={<GitHubUsers />}></Route>
                  <Route path="/quizapp" element={<QuizApp />}></Route>
                  <Route path="/news" element={<News />}></Route>
                  <Route path="/context" element={<MainContextCounter />}></Route>
                  <Route path="/*" element={<MainPhotoPage />}></Route>
                </Routes>
              </div>
            </div>
          </Provider>
        </CountProvider>
      </AuthProvider>
    </div>
  );
}

export default App;





