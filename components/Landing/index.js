import Hero from "./Hero";
import RoomsList from "./RoomsList";

const Landing = ({ rooms }) => {
  return ( 
    <>
      <Hero rooms={rooms} />
    </>
   );
}
 
export default Landing;