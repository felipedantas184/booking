import Image from "next/image";
import { RoomCard, RoomCardButton, RoomCardButtonContainer, RoomCardButtonSpan, RoomCardImage, RoomCardLocation, RoomCardText, RoomCardTextCategory, RoomCardTextSpan, RoomCardTitle, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "./RoomsListStyles";

const RoomsList = ({ rooms }) => {
  return (
    <RoomsListSection>
      <RoomsListContainer>
        <RoomsListHeading>
          <RoomsListTitle>Recent Property Listed</RoomsListTitle>
          <RoomsListSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</RoomsListSubtitle>
        </RoomsListHeading>
        <RoomsCards>
          {/**MAP */}
          {rooms.map((room) => (
            <RoomCard key={room.id}>
              <RoomCardImage>
                <Image src={'https:' + room.imageurl} alt={room.title} layout='fill' />
              </RoomCardImage>
              <RoomCardText>
                <RoomCardTextCategory>
                  <RoomCardTextSpan>for sale</RoomCardTextSpan>
                  {/**ICON */}
                </RoomCardTextCategory>
                <RoomCardTitle>{room.title}</RoomCardTitle>
                <RoomCardLocation>Location</RoomCardLocation>
              </RoomCardText>
              <RoomCardButtonContainer>
                <div>
                  <RoomCardButton>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)}</RoomCardButton>
                  <RoomCardButtonSpan>type</RoomCardButtonSpan>
                </div>
              </RoomCardButtonContainer>
            </RoomCard>
          ))}
        </RoomsCards>
      </RoomsListContainer>
    </RoomsListSection>
  );
}

export default RoomsList;