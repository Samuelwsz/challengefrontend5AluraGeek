import { Container, Row } from "react-grid-system"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { AiOutlineArrowRight } from "react-icons/ai"

import img from "../../assets/StarWars/SWp1.png"

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Star wars</h2>
          <h2>
            Ver tudo <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
          </h2>
        </div>
        <Row>
          <Card imagem={img} preco="50" produto="p1" />
          <Card imagem={img} preco="50" produto="p1" />
          <Card imagem={img} preco="50" produto="p1" />
          <Card imagem={img} preco="50" produto="p1" />
          <Card imagem={img} preco="50" produto="p1" />
          <Card imagem={img} preco="50" produto="p1" />
        </Row>
      </Container>
    </>
  )
}
