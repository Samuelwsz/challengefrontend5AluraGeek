import styled from "@emotion/styled"
import { Col } from "react-grid-system"

const CardEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  font-size: 18px;
`

const ImgEstilizado = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`
const ParagrafoEstilizado = styled.p`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`

const LinkEstilizado = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
interface CardProps {
  imagem: string
  produto: string
  preco: string
  onClick?: () => void
}

export default function Card({ imagem, produto, preco, onClick }: CardProps) {
  return (
    <>
      <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={2}>
        <CardEstilizado>
          <ImgEstilizado src={imagem} alt="" />
          <ParagrafoEstilizado>{produto}</ParagrafoEstilizado>
          <ParagrafoEstilizado style={{ fontWeight: "bold" }}>
            R$: {preco},00
          </ParagrafoEstilizado>
          <LinkEstilizado onClick={onClick}>Ver produto</LinkEstilizado>
        </CardEstilizado>
      </Col>
    </>
  )
}
