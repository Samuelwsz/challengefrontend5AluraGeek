import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const AreaInputs = styled.form`
  display: flex;
  flex-direction: column;
  padding: 85px 0;
  text-align: center;
  margin: auto;
  width: 50%;
`
const InputEstilizado = styled.input`
  margin-bottom: 20px;
  padding: 16px;
  border: none;
  font-size: 16px;
  color: #464646;
  outline: none;
`

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === "u" && password === "1") {
      setError(false)
      /* setLoggedIn(true)*/
      navigate("/addproduto")
      console.log("logou")
    } else {
      setError(true)
    }
  }


  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <AreaInputs>
          <h2 style={{ marginBottom: "30px" }}>Iniciar Sessão</h2>
          <InputEstilizado
            type="email"
            placeholder="Escreva seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputEstilizado
            type="password"
            placeholder="Escreva sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>Credenciais incorretas</p>}
          <Botao variante="secundaria" titulo="Entrar" onClick={handleLogin} />
        </AreaInputs>
      </div>
    </>
  )
}
