import Cabecalho from "../../components/Cabecalho"
import { Outlet } from "react-router-dom"

export default function PagePadrao() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
