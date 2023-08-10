import { Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { Link } from "react-router-dom"
import Card from "../../components/Card"

import produtos from "../../json/produtos.json"
import { useSearch } from "../../context/InputFuncional"

const DivEstilizada = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
const ParagrafoInputError = styled.p`
  padding: 30px;
  font-size: 30px;
`

export default function Produtos() {
  const { searchTerm } = useSearch()

  const filteredProdutos = produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.preco.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          {filteredProdutos.length === 0 ? (
            <ParagrafoInputError>Produto não encontrado.</ParagrafoInputError>
          ) : (
            filteredProdutos.map((produto) => (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                produto={produto.nome}
                preco={produto.preco}
              />
            ))
          )}
        </Row>
      </Container>
    </>
  )
}
