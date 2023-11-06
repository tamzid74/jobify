import { createBrowserRouter } from "react-router-dom";
import Error from "../Layout/Error";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddAJob from "../Pages/AddAJob";
import Blogs from "../Pages/Blogs";
import AllJobs from "../Pages/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import MyJobs from "../Pages/MyJobs";
import PrivateRoutes from "./Private";
import JobDetails from "../Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
        // loader:()=> fetch('http://localhost:5000/jobs')
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/addajob",
        element: (
          <PrivateRoutes>
            <AddAJob></AddAJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoutes>
            <MyJobs></MyJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
