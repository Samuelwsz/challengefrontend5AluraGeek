import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"

import logo from "../../assets/LogoAluraGeek.svg"
import Botao from "../Botao"

const AreaInputs = styled.div`
  display: flex;
  flex-direction: column;
`

const InputEstilizado = styled.input`
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

export default function FaleConosco() {
  return (
    <>
      <div style={{ padding: "30px 0", background: "#EAF2FD" }}>
        <Container>
          <Row justify="center">
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                <p>Quem somos nós</p>
                <p>Política de privacidade</p>
                <p>Programa fidelidade</p>
                <p>Nossas lojas</p>
                <p>Quero ser franqueado</p>
                <p>Anuncie aqui</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <AreaInputs>
                <h2>Fale conosco</h2>
                <InputEstilizado type="text" placeholder="Nome" />
                <TextAreaEstilizado placeholder="Escreva sua mensagem" />
                <Botao variante="secundaria" titulo="Enviar mensagem" />
              </AreaInputs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
