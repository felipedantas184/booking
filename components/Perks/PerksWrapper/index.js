import PerksCarousel from "../PerksCarousel";
import { PerksDataFour, PerksDataOne, PerksDataThree, PerksDataTwo } from "../PerksCarousel/PerksCarouselData";
import { PerksContainer, PerksHeading, PerksWrapper } from "./PerksWrapperStyles";

const Perks = () => {
  return ( 
    <PerksContainer>
      <PerksWrapper>
        <PerksHeading>Vantagens</PerksHeading>
        <PerksCarousel carouselList={PerksDataOne} carouselTitle='Comidas' />
        <PerksCarousel carouselList={PerksDataTwo} carouselTitle='Produtos Médicos' />
        <PerksCarousel carouselList={PerksDataThree} carouselTitle='Esportes' />
        <PerksCarousel carouselList={PerksDataFour} carouselTitle='Mais Vantagens' />
      </PerksWrapper>
    </PerksContainer>
   );
}
 
export default Perks;