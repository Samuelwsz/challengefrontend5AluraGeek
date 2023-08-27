import styled from "@emotion/styled"
import Botao from "../../components/Botao"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useState } from "react"
import produtosJson from "../../json/produtos.json"

const AreaForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
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
const TituloEstilizado = styled.h2`
  margin-bottom: 30px;
  text-align: left;
  font-size: 30px;
`
const LinkEstilizado = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-top: 30px;
  font-size: 23px;
`

interface ProdutoProps {
  id: number
  imagem: string
  nome: string
  preco: string
  categoria: string
}

export default function AddProduto() {
  const [novoProduto, setNovoProduto] = useState<ProdutoProps>({
    id: 0,
    imagem: "",
    categoria: "",
    nome: "",
    preco: "",
  })

  const [listaProdutos, setListaProdutos] =
    useState<ProdutoProps[]>(produtosJson)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { id, ...rest } = novoProduto

    const novoProdutoObj: ProdutoProps = {
      id: listaProdutos.length + 1,
      ...rest,
    }

    setListaProdutos([...listaProdutos, novoProdutoObj])
  }

  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
        <LinkEstilizado to="/login">
          <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
          Area administrativa
        </LinkEstilizado>
        <AreaForm onSubmit={handleSubmit}>
          <TituloEstilizado>Adicionar novo produto</TituloEstilizado>
          <InputEstilizado
            type="text"
            placeholder="URL da imagem"
            value={novoProduto.imagem}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, imagem: e.target.value })
            }
          />
          <InputEstilizado
            type="text"
            placeholder="Categoria"
            value={novoProduto.categoria}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, categoria: e.target.value })
            }
          />
          <InputEstilizado
            type="text"
            placeholder="Nome do produto"
            value={novoProduto.nome}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, nome: e.target.value })
            }
          />
          <InputEstilizado
            type="text"
            placeholder="Preço do produto"
            value={novoProduto.preco}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, preco: e.target.value })
            }
          />
          <Botao variante="secundaria" titulo="Adicionar produto" />
        </AreaForm>
      </div>
    </>
  )
}

{
  /*    <TextAreaEstilizado placeholder="Descrição do produto" />*/
}
