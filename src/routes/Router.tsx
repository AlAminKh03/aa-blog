import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SingleBLog from "../Pages/SingleBLog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs/:blogId",
        element: <SingleBLog />,
      },
    ],
  },
]);

export default router;
