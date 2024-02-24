import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Home';
import CollectorHome from './pages/CollectorHome';
import DisposerHome from './pages/DisposerHome';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/pages/collectorHome",
      element: <CollectorHome/>
    },
    {
      path:"/pages/disposerHome",
      element:<DisposerHome />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


