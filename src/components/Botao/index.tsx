import styled from "@emotion/styled"

const BotaoEstilizado = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border: 1px solid #2a7ae4;
  color: #2a7ae4;
  background: white;
  font-size: 16px;
  font-weight: bold;
`

interface BotaoProps {
  titulo: string
  tipo?: "button" | "submit" | "reset"
}

export default function Botao({ titulo, tipo = "button" }: BotaoProps) {
  return (
    <>
      <BotaoEstilizado type={tipo}>{titulo}</BotaoEstilizado>
    </>
  )
}
