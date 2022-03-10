import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import AdminLayout from '../../layouts/Admin'

// pages
import Home from '../../pages/Admin/Home';

export const adminRouting = {
    path: '/',
    element: <AdminLayout />,
    children: [
        { path: 'home', element: <Home /> },
        { path: '/', element: <Navigate to="home" replace /> },
    ]
}