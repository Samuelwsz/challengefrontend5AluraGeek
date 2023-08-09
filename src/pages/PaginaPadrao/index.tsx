import Cabecalho from "../../components/Cabecalho"
import { Outlet } from "react-router-dom"
import Rodape from "../../components/Rodape"
import FaleConosco from "../../components/FaleConosco"
import { SearchProvider } from "../../context/InputFuncional"

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
