import Image from "next/image";
import { CheckoutBottomContainer, CheckoutBottomContainerOne, CheckoutBottomContainerTwo, CheckoutDescription, CheckoutFeatures, CheckoutImageWrapper, CheckoutSection, CheckoutTopContainer, CheckoutTopContainerHeading, CheckoutTopContainerMiddle, CheckoutTopContainerPrice, CheckoutTopContainerTitle, CheckoutTopContainerType } from "./CheckoutStyles";

const Checkout = () => {
  return ( 
    <>
      <CheckoutSection>
        <CheckoutTopContainer>
          <CheckoutTopContainerHeading>
            <CheckoutTopContainerTitle>Quarto Luxo</CheckoutTopContainerTitle>
            <CheckoutTopContainerType>Casal</CheckoutTopContainerType>
          </CheckoutTopContainerHeading>
          <CheckoutTopContainerMiddle>

          </CheckoutTopContainerMiddle>
          <CheckoutTopContainerPrice>R$ 2.000,00</CheckoutTopContainerPrice>
        </CheckoutTopContainer>

        <CheckoutBottomContainer>
          <CheckoutBottomContainerOne>
            <CheckoutImageWrapper>
              <Image src='/images/banner.jpg' alt='quarto' width={500} height={800} />
            </CheckoutImageWrapper>
            <CheckoutFeatures>

            </CheckoutFeatures>
            <CheckoutDescription>Lorem ipsum</CheckoutDescription>
          </CheckoutBottomContainerOne>

          <CheckoutBottomContainerTwo>
            
          </CheckoutBottomContainerTwo>
        </CheckoutBottomContainer>
      </CheckoutSection>
    </>
   );
}
 
export default Checkout;