import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import PagePadrao from "../pages/PaginaPadrao"
import Login from "../pages/Login"
import Produtos from "../pages/Produtos"
import AddProduto from "../pages/AdicionarProduto"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagePadrao />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/addproduto", element: <AddProduto /> },
    ],
  },
])
