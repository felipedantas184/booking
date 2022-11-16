import { RoomCard, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "./RoomsListStyles";

const RoomsList = () => {
  return ( 
    <RoomsListSection>
      <RoomsListContainer>
        <RoomsListHeading>
          <RoomsListTitle>Recent Property Listed</RoomsListTitle>
          <RoomsListSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</RoomsListSubtitle>
          <RoomsCards>
            {/**MAP */}
            <RoomCard>

            </RoomCard>
          </RoomsCards>
        </RoomsListHeading>
      </RoomsListContainer>
    </RoomsListSection>
   );
}
 
export default RoomsList;