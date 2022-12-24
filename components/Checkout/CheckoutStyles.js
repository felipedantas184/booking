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
  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`
export const CheckoutTopContainerTitle = styled.h1`
  color: #13131A;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 32px;

  margin-bottom: 0px !important;
  margin-top: 0 !important;
  font-weight: 600 !important;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const CheckoutTopContainerPrice = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 500;
  font-size: 16px;
  color: #13131A;

  @media screen and (max-width: 768px) {
    font-size: 14px;
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

  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const CheckoutDescriptionTime = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const CheckoutBottomContainerTwo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;

  @media screen and (max-width: 768px) {
    gap: 24px
  }
`
export const CheckoutInfo = styled.div`
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  color: #13131A;

  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`
export const CheckoutTitle = styled.h2`
  padding: 20px 20px 0 20px;
  margin-bottom: 16px !important;
  font-size: 18px;

  margin-top: 0 !important;
  color: inherit !important;
  font-weight: 700 !important;
`
export const CheckoutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 20px 0 20px;
  margin-bottom: 16px;
`
export const CheckoutLabel = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 600;
  font-size: 14px;
  color: #13131A;
`
export const CheckoutName = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 14px;
  
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
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`
export const CheckoutValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #13131A;
`
export const CheckoutButton = styled.button`
	padding: 8px 16px;
  width: 100%;
  margin-top: 16px;
  text-transform: capitalize;
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins' !important;
  background-color: #EB5757;
  cursor: pointer;

  a {
    color: #fff !important;
  }
`
