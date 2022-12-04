import styled from 'styled-components'

export const RoomsListSection = styled.section`
	padding: 40px 0;
`
export const RoomsListContainer = styled.div`
	max-width: 1024px;
  margin: auto;

  @media screen and (max-width: 720px) {
    padding: 0 16px;
  }
`
export const RoomsListHeading = styled.div`
	text-align: center;
  width: 60%;
  margin: auto;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`
export const RoomsListTitle = styled.h1`
  color: #2d3954;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 35px;
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
	box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  border-radius: 20px;
`
export const RoomCardImage = styled.div`
	position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`
export const RoomCardText = styled.div`
	padding: 30px;
`
export const RoomCardTextCategory = styled.div`
	align-items: center;
  display: flex;
  justify-content: space-between;
`
export const RoomCardTextSpan = styled.span`
	border-radius: 2px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 15px;
  background: rgba(255, 152, 0, 0.1);
  color: rgb(255, 152, 0);
`
export const RoomCardTitle = styled.h4`
	font-weight: 500;
  margin-top: 10px;
`
export const RoomCardLocation = styled.p`
	color: #72809d;
`
export const RoomCardButtonContainer = styled.div`
	border-top: 1px solid #e4e8f3;
  padding: 10px 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const RoomCardButton = styled.button`
	border-radius: 50px;
  font-size: 16px;
  background: #27ae60;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  padding: 8px 16px;

  a {
    color: #fff !important;
  }
`
export const RoomCardButtonSpan = styled.span`
	
`