import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

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

const schema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-mail inválido"),
  password: z.string().min(4, "A senha precisa ter pelo menos 4 caracteres"),
})

type FormProps = z.infer<typeof schema>

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(schema) })

  const handleLogin = (data: any) => {
    if (email === "user@gmail.com" && password === "1234") {
      setError(false)
      navigate("/addproduto")
    } else {
      setError(true)
    }
    console.log(data)
  }

  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <AreaInputs onSubmit={handleSubmit(handleLogin)}>
          <h2 style={{ marginBottom: "30px" }}>Iniciar Sessão</h2>
          <InputEstilizado
            {...register("email")}
            type="email"
            placeholder="Escreva seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <InputEstilizado
            {...register("password")}
            type="password"
            placeholder="Escreva sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password.message}</span>}
          {error && <p style={{ color: "red" }}>Credenciais incorretas</p>}
          <Botao variante="secundaria" titulo="Entrar" tipo="submit" />
        </AreaInputs>
      </div>
    </>
  )
}
