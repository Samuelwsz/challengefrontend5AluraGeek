import { Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useSearchContext } from "../../context/InputFuncional"

import produtos from "../../json/produtos.json"

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


  return (
    <>
      <Banner />
      <Container>
        <DivEstilizada>
          <h2>Star wars</h2>
          <H2Estilizado>
            Ver tudo <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
          </H2Estilizado>
        </DivEstilizada>
        <Row>
          {starWarsProdutos.map((produto) => {
            return (
              <Card
                key={produto.id}
                produto={produto.nome}
                imagem={produto.imagem}
                preco={produto.preco}
              />
            )
          })}
        </Row>
        <DivEstilizada>
          <h2>Consoles</h2>
          <H2Estilizado>
            Ver tudo <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
          </H2Estilizado>
        </DivEstilizada>
        <Row>
          {consoleProdutos.map((produto) => {
            return (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                preco={produto.preco}
                produto={produto.nome}
              />
            )
          })}
        </Row>
        <DivEstilizada>
          <h2>Diversos</h2>
          <H2Estilizado>
            Ver tudo <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
          </H2Estilizado>
        </DivEstilizada>
        <Row>
          {diversosProdutos.map((produto) => {
            return (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                preco={produto.preco}
                produto={produto.nome}
              />
            )
          })}
        </Row>
      </Container>
    </>
  )
}
