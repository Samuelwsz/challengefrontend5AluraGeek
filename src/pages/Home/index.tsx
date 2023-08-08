import { Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { AiOutlineArrowRight } from "react-icons/ai"

import produtos from "../../json/produtos.json"

import img from "../../assets/StarWars/SWp1.png"

const DivEstilizada = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

export default function Home() {
  const starWarsProdutos = produtos.filter(
    (produto) => produto.categoria === "StarWars"
  )

  return (
    <>
      <Banner />
      <Container>
        <DivEstilizada>
          <h2>Star wars</h2>
          <h2>
            Ver tudo <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
          </h2>
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
      </Container>
    </>
  )
}
