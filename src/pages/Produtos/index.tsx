import { Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { Link } from "react-router-dom"
import Card from "../../components/Card"

import produtos from "../../json/produtos.json"

import img from "../../assets/Consoles/Cp1.png"

const DivEstilizada = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

export default function Produtos() {
  return (
    <>
      <Container>
        <DivEstilizada>
          <h2>Todos os produtos</h2>
          <Link to="/addproduto" style={{ textDecoration: "none" }}>
            <Botao variante="secundaria" titulo="Adicionar produto" />
          </Link>
        </DivEstilizada>
        <Row>
          {produtos.map((produto) => {
            return (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                produto={produto.nome}
                preco={produto.preco}
              />
            )
          })}
        </Row>
      </Container>
    </>
  )
}
