import styled from 'styled-components'

export const CheckoutSection = styled.section`
  padding: 40px 15px;
  
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  min-height: 800px;
`
export const CheckoutTopContainer = styled.div`
  max-width: 1024px;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CheckoutTopContainerHeading = styled.div`
  text-align: left;
`
export const CheckoutTopContainerTitle = styled.h1`
  color: #2d3954;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 35px;

  margin-bottom: 0px !important;
  margin-top: 0 !important;
  color: inherit !important;
  font-weight: 600 !important;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const CheckoutTopContainerType = styled.p`
  margin-top: 0 !important;
	color: #72809d;

  margin-bottom: 4px !important;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const CheckoutTopContainerMiddle = styled.div`
  
`
export const CheckoutTopContainerPrice = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const CheckoutBottomContainer = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const CheckoutBottomContainerOne = styled.div`
  flex: 3;
`
export const CheckoutImageWrapper = styled.div`
  margin-bottom: 8px;
  position: relative;
  width: 100%;
  height: 500px;

  border-radius: 0 20px 0 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 350px;
  }
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`
export const CheckoutFeatures = styled.div`
  display: flex;
  column-gap: 6px;
`
export const CheckoutDescription = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 14px;
`
export const CheckoutBottomContainerTwo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  padding: 0 0 20px 0;
`
export const CheckoutInfo = styled.div`
  border-radius: 16px;
  border: 1px solid #e4e8f3;
`
export const CheckoutTitle = styled.h2`
  padding: 20px 20px 0 20px;
  margin-bottom: 24px !important;

  margin-top: 0 !important;
  color: inherit !important;
  font-weight: 600 !important;
`
export const CheckoutBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 0 20px;
  margin-bottom: 16px;
`
export const CheckoutLabel = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 600;
`
export const CheckoutName = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  
`
export const CheckoutBoxHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CheckoutBoxHorizontalGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const CheckoutEnd = styled.div`
  padding: 20px;
  margin-top: 40px;
  border-radius: 16px;
  border: 1px solid #c2c6d1;
`
export const CheckoutValue = styled.span`
`
export const CheckoutButton = styled.button`
	width: 100%;
  border-radius: 8px;
  font-size: 16px;
  background: #051937;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  padding: 17px 30px;
  margin-top: 16px;
`
