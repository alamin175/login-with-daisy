import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Orders from './Components/Orders.jsx'
import Profile from './Components/Profile.jsx'
import Register from './Components/Register.jsx'
import './index.css'
import Main from './Layout/Main.jsx'
import PrivateRouter from './Private Router/PrivateRouter.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/profile',
        element:<PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: '/orders',
        element: <PrivateRouter><Orders></Orders></PrivateRouter>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
