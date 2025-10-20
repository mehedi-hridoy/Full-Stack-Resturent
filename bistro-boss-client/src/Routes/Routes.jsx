import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home/Home/Home";

import Main from "../Layout/Main"
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";



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
        }
    ]
  },
]);