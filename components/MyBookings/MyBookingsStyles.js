import styled from 'styled-components'

export const BookingsSection = styled.section`
	padding: 40px 0;
  min-height: 70vh;
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
  font-size: 32px;
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
    margin-top: 32px;
  }
`
export const BookingCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border-radius: 8px;
  background-color: #F6F6F6;
`
export const BookingCardImage = styled.div`
	position: relative;
  width: 100%;
  height: 250px;
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
export const BookingCardTitle = styled.h4`
	font-weight: 500;
  margin-top: 10px;
`
export const BookingCardLocation = styled.p`
	color: #72809d;
`


//FIM

export const BookingInfo = styled.div`
  margin-bottom: 8px;
`
export const BookingTitle = styled.h2`
  padding: 16px 20px 0 20px;
  margin-bottom: 12px !important;

  margin-top: 0 !important;
  color: inherit !important;
  font-weight: 600 !important;
  font-size: 16px;
`
export const BookingBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 0 20px;
  margin-bottom: 16px;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const BookingLabel = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-weight: 600;
  font-size: 14px;
`
export const BookingName = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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


export const RoomCardButtonContainer = styled.div`
	border-top: 1px solid #cccfd9;
  padding: 10px 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const RoomCardButton = styled.button`
  padding: 8px 16px;
  text-transform: capitalize;
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins' !important;
  background-color: #EB5757;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover, &:focus {
    box-shadow: inset 200px 0 0 0 #13131A;
  }

  a {
    color: #fff !important;
  }
`

export const EmptyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
`
export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  width: 431px;
  height: 320px;

  @media screen and (max-width: 720px) {
    width: 215px;
    height: 160px;
  }
`