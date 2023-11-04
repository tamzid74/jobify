import { createBrowserRouter } from "react-router-dom";
import Error from "../Layout/Error";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddAJob from "../Pages/AddAJob";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //     path:'/',
        //     element:<Home></Home>
        // },
        // {
        //     path:'/',
        //     element:<Home></Home>
        // },
        {
            path:'/addajob',
            element:<AddAJob></AddAJob>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
]);

export default router;
