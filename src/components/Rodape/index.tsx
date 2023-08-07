import styled from "@emotion/styled"

const Footer = styled.footer`
  padding: 20px;
  overflow-x: hidden;
  text-align: center;
`

export default function Rodape() {
  return (
    <>
      <Footer>
        <p>Desenvolvido por Alura / Samuel.</p>
        <br />
        <p>Projeto fictício sem fins comerciais.</p>
      </Footer>
    </>
  )
}
