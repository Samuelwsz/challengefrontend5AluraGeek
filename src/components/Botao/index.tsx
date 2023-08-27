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

const BotaoEstilizadoSecundario = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border: 1px solid #2a7ae4;
  color: white;
  background: #2a7ae4;
  font-size: 16px;
  font-weight: bold;
`

interface BotaoProps {
  titulo: string
  variante?: string
  tipo?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function Botao({
  titulo,
  tipo = "button",
  variante = "primaria",
  onClick,
}: BotaoProps) {
  if (variante === "primaria") {
    return (
      <>
        <BotaoEstilizado type={tipo} onClick={onClick}>
          {titulo}
        </BotaoEstilizado>
      </>
    )
  }
  return (
    <BotaoEstilizadoSecundario type={tipo} onClick={onClick}>
      {titulo}
    </BotaoEstilizadoSecundario>
  )
}
