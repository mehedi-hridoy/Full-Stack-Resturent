import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";

import Main from "../Layout/Main"
import Menu from "../pages/Menu/Menu/Menu";



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
        }
    ]
  },
]);