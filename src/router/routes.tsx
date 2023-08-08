import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import PagePadrao from "../pages/PaginaPadrao"
import Login from "../pages/Login"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagePadrao />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
])
