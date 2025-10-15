import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Courses from './components/courses.jsx';
import CourseDetails from './components/coursedetails.jsx';
import Dashboard from './components/dashboard.jsx';

import Home from './components/home.jsx';
import Loadpage from './components/loadpage.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Brand from './components/loadpage.jsx';

import { CourseProvider } from './components/course-context.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'loadpage', element: <Loadpage /> },
      {index:true, element: <Home /> },
      {path:"home",element:<Brand></Brand>},
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'courses', element: <Courses /> },
      { path: 'courses/:id', element: <CourseDetails /> },
      { path: 'dashboard', element: <Dashboard /> },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CourseProvider>
      <RouterProvider router={router} />
    </CourseProvider>
  </React.StrictMode>
);
