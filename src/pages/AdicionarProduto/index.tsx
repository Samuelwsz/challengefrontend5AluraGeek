import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

const AreaForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  text-align: center;
  margin: auto;
  width: 50%;
`
const InputEstilizado = styled.input`
  margin-bottom: 20px;
  padding: 16px;
  border: none;
  font-size: 16px;
  color: #464646;
  outline: none;
`
const TextAreaEstilizado = styled.textarea`
  margin-bottom: 10px;

  width: 100%;
  padding: 10px;
  border: none;
  font-size: 16px;
  color: #464646;
  outline: none;
  ::placeholder {
    color: #aaa;
  }
`
const TituloEstilizado = styled.h2`
  margin-bottom: 30px;
  text-align: left;
  font-size: 30px;
`
const LinkEstilizado = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-top: 30px;
  font-size: 23px;
`

export default function AddProduto() {
  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <LinkEstilizado to="/login">
          <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
          Area administrativa
        </LinkEstilizado>
        <AreaForm>
          <TituloEstilizado>Adicionar novo produto</TituloEstilizado>
          <InputEstilizado type="text" placeholder="URL da imagem" />
          <InputEstilizado type="text" placeholder="Categoria" />
          <InputEstilizado type="text" placeholder="Nome do produto" />
          <InputEstilizado type="text" placeholder="Preço do produto" />
          <TextAreaEstilizado placeholder="Descrição do produto" />
          <Botao variante="secundaria" titulo="Adicionar produto" />
        </AreaForm>
      </div>
    </>
  )
}
