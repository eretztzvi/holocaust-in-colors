import { Navigate } from 'react-router-dom';

// layouts
import GuestLayout from '../../layouts/Guest/index'

// pages
import About from '../../pages/guest/About';
import Donations from '../../pages/guest/Donations';
import Landing from '../../pages/guest/Landing';

export const guestRouting = {
    path: '/',
    element: <GuestLayout />,
    children: [
        { path: 'landing', element: <Landing /> },
        { path: 'about', element: <About /> },
        { path: 'donations', element: <Donations /> },
        { path: '/', element: <Navigate to="landing" replace /> },
    ]
}