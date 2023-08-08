import styled from "@emotion/styled"
import Botao from "../../components/Botao"

const AreaInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 85px 0;
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

export default function AddProduto() {
  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <AreaInputs>
          <TituloEstilizado>Adicionar novo produto</TituloEstilizado>
          <InputEstilizado type="text" placeholder="URL da imagem" />
          <InputEstilizado type="text" placeholder="Categoria" />
          <InputEstilizado type="text" placeholder="Nome do produto" />
          <InputEstilizado type="text" placeholder="Preço do produto" />
          <TextAreaEstilizado placeholder="Descrição do produto" />
          <Botao variante="secundaria" titulo="Adicionar produto" />
        </AreaInputs>
      </div>
    </>
  )
}
