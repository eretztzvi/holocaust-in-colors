import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import BodekLayout from '../../layouts/Bodek';

// pages
import Home from '../../pages/Bodek/Home';
import Taskirim from '../../pages/Bodek/Taskirim';
import Clients from '../../pages/Bodek/Clients';
import WorkPlaning from '../../pages/Bodek/WorkPlaning';
import Money from '../../pages/Bodek/Money';
import Tools from '../../pages/Bodek/Tools';
import Settings from '../../pages/Bodek/Settings';
import Help from '../../pages/Bodek/Help';
import NewTaskir from '../../pages/Bodek/NewTaskir';

export const userRouting = {
  path: '/',
  element: <BodekLayout />,
  children: [
    { path: 'home', element: <Home /> },
    { path: 'taskirim', element: <Taskirim /> },
    { path: 'clients', element: <Clients /> },
    { path: 'work-planing', element: <WorkPlaning /> },
    { path: 'money', element: <Money /> },
    { path: 'tools', element: <Tools /> },
    { path: 'settings', element: <Settings /> },
    { path: 'help', element: <Help /> },
    { path: '/new-taskir', element: <NewTaskir /> },
    { path: '/', element: <Navigate to="/home" replace /> },
  ]
}