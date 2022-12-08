import styled from 'styled-components'

export const BookingsSection = styled.section`
	padding: 40px 0;
`
export const BookingsContainer = styled.div`
	max-width: 1024px;
  margin: auto;

  @media screen and (max-width: 720px) {
    padding: 0 16px;
  }
`
export const BookingsHeading = styled.div`
	text-align: center;
  width: 60%;
  margin: auto;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`
export const BookingsTitle = styled.h1`
  color: #2d3954;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 35px;
`
export const BookingsSubtitle = styled.p`
	color: #72809d;
`
export const BookingsCards = styled.div`
	margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const BookingCard = styled.div`
	box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  border-radius: 20px;
`
export const BookingCardImage = styled.div`
	position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`
export const BookingCardText = styled.div`
  display: flex;
  flex-direction: column;
`
//INÍCIO


export const BookingCardTextCategory = styled.div`
	align-items: center;
  display: flex;
  justify-content: space-between;
`
export const BookingCardTextSpan = styled.span`
	border-radius: 2px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 15px;
  background: rgba(255, 152, 0, 0.1);
  color: rgb(255, 152, 0);
`
export const BookingCardTitle = styled.h4`
	font-weight: 500;
  margin-top: 10px;
`
export const BookingCardLocation = styled.p`
	color: #72809d;
`


//FIM

export const BookingInfo = styled.div`
  border-radius: 0 0 16px 16px ;
  border: 1px solid #e4e8f3;
`
export const BookingTitle = styled.h2`
  padding: 20px 20px 0 20px;
  margin-bottom: 24px !important;

  margin-top: 0 !important;
  color: inherit !important;
  font-weight: 600 !important;
`
export const BookingBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 0 20px;
  margin-bottom: 16px;
`
export const BookingLabel = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 600;
`
export const BookingName = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  
`
export const BookingBoxHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BookingBoxHorizontalGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`