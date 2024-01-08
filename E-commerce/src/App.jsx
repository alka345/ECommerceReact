import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Product-list/Components/ProductList'
import ProductDetailPage from './Pages/ProductDetailPage'
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
import ProductDetail from './Product-list/Components/ProductDetail'

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
  },
  {
    path:'/product-detail',
    element:<ProductDetailPage></ProductDetailPage>
  },
  // {
  //   path:'/'
  // }
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
