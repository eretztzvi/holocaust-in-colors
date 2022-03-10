import { useState, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

// layouts
import NotFoundLayout from '../layouts/NotFound';


// pages
import NotFound from '../pages/NotFound';


// routings
import { guestRouting } from './routings/guest-routing'
// import { adminRouting } from './routings/admin-routing'
// import { userRouting } from './routings/user-routing'


// ----------------------------------------------------------------------

function Router() {

  // const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const isUser = JSON.parse(localStorage.getItem('user'))
  const userType = isUser ? isUser.user_type : "GUEST"

  useEffect(() => {

    // if (isUser) {
    //   dispatch(login(isUser))
    // }

  }, [])

  let paths = [
    userType === "GUEST" && guestRouting,
    // userType === "ADMIN" && adminRouting,
    // userType === "USER" && userRouting,
    {
      path: '*',
      element: <NotFoundLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ]
    },
  ]

  return useRoutes(paths.filter(p => p));
}

export default Router