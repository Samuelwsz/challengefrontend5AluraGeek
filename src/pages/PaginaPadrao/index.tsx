import Cabecalho from "../../components/Cabecalho"
import { Outlet } from "react-router-dom"
import Rodape from "../../components/Rodape"
import FaleConosco from "../../components/FaleConosco"

export default function PagePadrao() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <FaleConosco />
      <Rodape />
    </>
  )
}
