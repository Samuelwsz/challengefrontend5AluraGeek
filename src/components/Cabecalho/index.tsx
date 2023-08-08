import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import { FiSearch } from "react-icons/fi"
import logo from "../../assets/LogoAluraGeek.svg"
import Botao from "../Botao"
import { Link } from "react-router-dom"

const Header = styled.header`
  color: white;
  overflow-x: hidden;
  padding: 10px;
`

const SearchContainer = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 16px;
  color: #a2a2a2;
  outline: none;
  border-radius: 30px;
  background: #f5f5f5;
`

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: #aaa;
`

const AreaBotao = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Cabecalho() {
  return (
    <>
      <Header>
        <Container>
          <Row align="center">
            <Col xs={12} sm={12} md={4} lg={4}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="O que deseja encontrar?"
                />
                <SearchIcon>
                  <FiSearch />
                </SearchIcon>
              </SearchContainer>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <AreaBotao>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Botao titulo="Login" />
                </Link>
              </AreaBotao>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Header>
    </>
  )
}
