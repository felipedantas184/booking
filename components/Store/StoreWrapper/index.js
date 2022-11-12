import Carousel from "../Carousel";
import { iPadsData, iPhonesData } from "../Carousel/CarouselData";
import { StoreContainer, StoreHeading, StoreWrapper } from "./StoreStyles";

const Store = () => {
  return ( 
    <StoreContainer>
      <StoreWrapper>
        <StoreHeading>Loja Carcará</StoreHeading>
        <Carousel carouselList={iPhonesData} carouselTitle='Camisas' />
        <Carousel carouselList={iPadsData} carouselTitle='Acessórios' />
        <Carousel carouselList={iPhonesData} carouselTitle='Uniformes' />
      </StoreWrapper>
    </StoreContainer>
   );
}
 
export default Store;