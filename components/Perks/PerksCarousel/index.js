import PerksCard from '../PerksCard';
import { CarouselItem, CarouselItems, CarouselTitle, CarouselWrapper, CarouseReallItem } from "./PerksCarouselStyles";

const PerksCarousel = ({carouselList, carouselTitle}) => {
  return ( 
    <CarouselWrapper>
      <CarouselTitle>{carouselTitle}</CarouselTitle>
      <CarouselItems>
        {carouselList.map((perk) => (
        <CarouselItem key={perk.name} >
          <CarouseReallItem>
            <PerksCard perk={perk} />
          </CarouseReallItem>
        </CarouselItem>
        ))}
      </CarouselItems>
    </CarouselWrapper>
   );
}
 
export default PerksCarousel;