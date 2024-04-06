
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/home/Home";
import Career from "./pages/career/Career";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Details from "./pages/details/Details";
import Order from "./pages/order/Order";
import PrivateRoute from "./components/shared/private/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`../data/news.json`)
        },
        {
            path:'/career',
            element:<Career></Career>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/order',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        }

      ]
    },
    {
      path:'/details/:id',
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader:()=>fetch(`../data/news.json`)
    }

  ]);