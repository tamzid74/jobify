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
import UpdatedJob from "../Pages/UpdatedJob";

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
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
      },
      {
        path: "/addAJob",
        element: (
          <PrivateRoutes>
            <AddAJob></AddAJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myJobs",
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
        path: "/jobDetails/:id",
        element: (
          <PrivateRoutes>
            <JobDetails></JobDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobDetails/${params.id}`),
      },
      {
        path: "/updatedJobs/:id",
        element: (
          <PrivateRoutes>
            <UpdatedJob></UpdatedJob>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
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
