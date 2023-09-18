import styled from "@emotion/styled"
import { AiOutlineCloseCircle } from "react-icons/ai"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 1;
`

const DivModal = styled.div`
  border-radius: 20px;
  padding: 15px;
  position: relative;
  background-color: white;
  width: 700px;
  text-align: left; /* Alinhe o texto à esquerda */
  display: flex; /* Use flex para criar layout de duas colunas */
  align-items: center; /* Alinhe verticalmente no centro */

  /* Estilos para a coluna esquerda (imagem) */
  .image-column {
    flex: 1; /* A coluna da imagem ocupa 1 unidade de flex */
    padding-right: 20px; /* Espaçamento à direita */
    
  }

  /* Estilos para a coluna direita (texto) */
  .text-column {
    flex: 2; /* A coluna de texto ocupa 2 unidades de flex */
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`
const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 24px;
  color: #2a7ae4;
  cursor: pointer;
`

interface ModalCardProdutoProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct: {
    nome: string
    preco: string
    imagem: string
    resumo: string
  } | null
}

export default function ModalCardProduto({
  isOpen,
  onClose,
  selectedProduct,
}: ModalCardProdutoProps) {
  if (!isOpen || !selectedProduct) return null

  return (
    <>
      <ModalOverlay>
        <DivModal>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <div className="image-column">
            <img style={{borderRadius:'10px'}} src={selectedProduct.imagem} alt="" />
          </div>
          <div className="text-column">
            <h2>{selectedProduct.nome}</h2>
            <p>R$: {selectedProduct.preco}</p>
            <p style={{ marginTop: "10px" }}>{selectedProduct.resumo}</p>
          </div>
        </DivModal>
      </ModalOverlay>
    </>
  )
}
