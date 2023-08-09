import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import PagePadrao from "../pages/PaginaPadrao"
import Login from "../pages/Login"
import Produtos from "../pages/Produtos"
import AddProduto from "../pages/AdicionarProduto"
import { SearchProvider } from "../context/InputFuncional"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <PagePadrao />
      </SearchProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <SearchProvider>
            <Home />
          </SearchProvider>
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/produtos",
        element: (
          <SearchProvider>
            <Produtos />
          </SearchProvider>
        ),
      },
      { path: "/addproduto", element: <AddProduto /> },
    ],
  },
])
