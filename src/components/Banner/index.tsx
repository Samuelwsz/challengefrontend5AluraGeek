import styled from "@emotion/styled"
import Botao from "../Botao"

import ImgBanner from "./assets/banner-image.png"
import ImgBannerTablet from "./assets/bannerResponsivo.jpg"

const BannerContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
`

const BannerImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    content: url(${ImgBannerTablet});
  }
`
/*  width: 2000px;
  height: 400px;*/
const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-120%, -30%);
  color: white;

  text-align: left;
  line-height: 1.5;

  @media (max-width: 800px) {
    transform: translate(-90%, -30%);
  }
`

export default function Banner() {
  return (
    <>
      <BannerContainer>
        <BannerImage src={ImgBanner} alt="Banner Image" />
        <BannerText>
          <h1>Dezembro Promocional</h1>
          <p style={{ marginBottom: "10px" }}>
            Produtos selecionados com 33% de desconto
          </p>
          <Botao variante="secundaria" titulo="Ver Consoles" />
        </BannerText>
      </BannerContainer>
    </>
  )
}
