import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Portfolio from "../components/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Portfolio />,
      },
    ]
  },
]);

export default router;
