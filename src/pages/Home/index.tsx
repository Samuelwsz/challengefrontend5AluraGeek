import { Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { AiOutlineArrowRight } from "react-icons/ai"

import produtos from "../../json/produtos.json"
import { useSearch } from "../../context/InputFuncional"
import { Link } from "react-router-dom"

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  font-size: 20px;
`
const H2Estilizado = styled.h2`
  font-size: 18px;
  color: #2a7ae4;
  margin-top: 8px;
`
const ParagrafoInputError = styled.p`
  padding: 30px;
  font-size: 30px;
`

export default function Home() {
  const starWarsProdutos = produtos.filter(
    (produto) => produto.categoria === "StarWars"
  )

  const consoleProdutos = produtos.filter(
    (produto) => produto.categoria === "Consoles"
  )

  const diversosProdutos = produtos.filter(
    (produto) => produto.categoria === "Diversos"
  )

  const { searchTerm } = useSearch()

  const starwarsInput = starWarsProdutos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.preco.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const consoleInput = consoleProdutos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.preco.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const diversosInput = diversosProdutos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.preco.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Banner />
      <Container>
        <DivEstilizada>
          <h2>Star wars</h2>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <H2Estilizado>
              Ver tudo
              <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </H2Estilizado>
          </Link>
        </DivEstilizada>
        <Row>
          {starwarsInput.length === 0 ? (
            <ParagrafoInputError>Produto não encontrado.</ParagrafoInputError>
          ) : (
            starwarsInput.map((produto) => (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                produto={produto.nome}
                preco={produto.preco}
              />
            ))
          )}
        </Row>
        <DivEstilizada>
          <h2>Consoles</h2>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <H2Estilizado>
              Ver tudo
              <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </H2Estilizado>
          </Link>
        </DivEstilizada>
        <Row>
          {consoleInput.length === 0 ? (
            <ParagrafoInputError>Produto não encontrado.</ParagrafoInputError>
          ) : (
            consoleInput.map((produto) => (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                produto={produto.nome}
                preco={produto.preco}
              />
            ))
          )}
        </Row>
        <DivEstilizada>
          <h2>Diversos</h2>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <H2Estilizado>
              Ver tudo
              <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </H2Estilizado>
          </Link>
        </DivEstilizada>
        <Row>
          {diversosInput.length === 0 ? (
            <ParagrafoInputError>Produto não encontrado.</ParagrafoInputError>
          ) : (
            diversosInput.map((produto) => (
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
