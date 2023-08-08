import styled from "@emotion/styled"
import Botao from "../../components/Botao"

const AreaInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 85px 0;
  text-align: center;
  margin: auto;
  width: 50%;
`

const InputEstilizado = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border: none;
  font-size: 16px;
  color: #464646;
  outline: none;
`

export default function Login() {
  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <AreaInputs>
          <h2 style={{ marginBottom: "30px" }}>Iniciar Sessão</h2>
          <InputEstilizado type="email" placeholder="Escreva seu email" />
          <InputEstilizado type="password" placeholder="Escreva sua senha" />
          <Botao variante="secundaria" titulo="Entrar" />
        </AreaInputs>
      </div>
    </>
  )
}
