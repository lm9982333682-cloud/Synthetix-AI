
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Tasks from './pages/Tasks'
import Settings from './pages/Settings'
import Chat from './pages/Chat'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />

    }, {
      path: '/register',
      element: <Register />
    }, {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        }, {
          path: 'team',
          element: <Team />
        },{
          path:'tasks',
          element:<Tasks/>
        },{
          path:'settings',
          element:<Settings/>
        },{
          path:'chat',
          element:<Chat/>
        }
      ]

    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
