import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../Layout.jsx';
import './index.css'
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path= "" element={<Home />}/>
        <Route path= "about" element={<About />}/>
        <Route path= "blogs" element={<Blogs />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
);