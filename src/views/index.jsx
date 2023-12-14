import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { Process } from "./process";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/process",
    element: <Process />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
