import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home/Home";

import Main from "../Layout/Main"
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret/Secret";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
          path:'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order',
          element: <Navigate to="/order/salad" replace />
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '*',
          element: <div>404 page not found</div>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>

        }


    ]
  },
]);