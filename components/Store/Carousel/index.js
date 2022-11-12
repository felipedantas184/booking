import Product from '../Product';
import { CarouselItem, CarouselItems, CarouselTitle, CarouselWrapper, CarouseReallItem } from "./CarouselStyles";

const Carousel = ({carouselList, carouselTitle}) => {
  return ( 
    <CarouselWrapper>
      <CarouselTitle>{carouselTitle}</CarouselTitle>
      <CarouselItems>
        {carouselList.map((product) => (
        <CarouselItem key={product.productName} >
          <CarouseReallItem>
            <Product product={product} />
          </CarouseReallItem>
        </CarouselItem>
        ))}
      </CarouselItems>
    </CarouselWrapper>
   );
}
 
export default Carousel;