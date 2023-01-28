import styled from 'styled-components'

export const RoomsListSection = styled.section`
	padding: 40px 0;
`
export const RoomsListContainer = styled.div`
	max-width: 1080px;
  margin: auto;

  @media screen and (max-width: 720px) {
    padding: 0 16px;
  }
`
export const RoomsListHeading = styled.div`
	text-align: center;
  width: 100%;
  margin: auto;
`
export const RoomsListTitle = styled.h1`
  color: #2d3954;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 24px;
  margin-bottom: 4px;
`
export const RoomsListSubtitle = styled.p`
	color: #72809d;
`
export const RoomsCards = styled.div`
	margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const RoomCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border-radius: 20px;
  background-color: #F6F6F6;
`
export const RoomCardImage = styled.div`
	position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`
export const RoomCardText = styled.div`
	padding: 16px;
`
export const RoomCardTextCategory = styled.div`
	align-items: center;
  display: flex;
  justify-content: space-between;
`
export const RoomCardTextSpan = styled.span`
	border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 15px;
  background: rgba(235, 87, 87, 0.1);
  color: #EB5757;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px
`
export const RoomCardTitle = styled.h4`
	font-weight: 500;
  margin-top: 10px;
  color: #13131A;
`
export const RoomCardLocation = styled.p`
  color: #4F4F4F;
  margin-bottom: 0 !important;
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
export const RoomCardButtonSpan = styled.span`
	
`
export const RoomCardButtonDisabled = styled.button`
  padding: 8px 16px;
  text-transform: capitalize;
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins' !important;
  background-color: #454545;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover, &:focus {
    box-shadow: inset 200px 0 0 0 #13131A;
  }

  a {
    color: #fff !important;
  }
`