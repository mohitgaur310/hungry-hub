import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import About from './Component/About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './Component/Error';
import Contact from './Component/Contact';
import Body from './Component/Body';
import RestaurantMenu from './Component/RestaurantMenu';

const appRouter=createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu  />
      },
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
