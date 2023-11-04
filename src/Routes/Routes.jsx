import { createBrowserRouter } from "react-router-dom";
import Error from "../Layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement:<Error></Error>,
  },
]);

export default router;
