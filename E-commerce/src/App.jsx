import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Product-list/ProductList'
import NavBar from './Navbar/Navbar'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import Signup from './Auth/Components/Signup'
import SignupPage from './Pages/SignupPage'
import CartPage from './Pages/CartPage'
import Checkout from './Pages/Checkout'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './cart/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
    
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path:'/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    
    path:'/cart',
    element:<CartPage></CartPage>,
  },
  {
    path:'/checkout',
    element:<Checkout></Checkout>
  }
]);





function App() {
  

  return (
    <>
 {/* <Home></Home> */}

 {/* <LoginPage></LoginPage> */}
 {/* <SignupPage></SignupPage> */}

 <div className='App'>
 <RouterProvider router={router} />
 </div>
    </>
  )
}

export default App
