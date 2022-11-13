import RoomCard from "../RoomCard";
import { HomeContainer, HomeHeading, HomeWrapper, RoomsList } from "./HomeStyles";

const Home = ({ rooms }) => {
  return ( 
    <HomeContainer>
      <HomeWrapper>
        <HomeHeading>Escolha Seu Quarto</HomeHeading>
        
        <RoomsList>
          {rooms.map(room => (
            <RoomCard key={room.sys.id} room={room} />
          ))}
        </RoomsList>
      </HomeWrapper>
    </HomeContainer>
   );
}
 
export default Home;