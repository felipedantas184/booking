import CardsWrapper from "../CardsWrapper";
import MenuBlocks from "../MenuBlocks";
import { SportsContainer, SportsHeading, SportsWrapper } from "./SportsStyles";

const Sports = () => {
  return ( 
    <SportsContainer>
      <SportsWrapper>
        <SportsHeading>TREINOS</SportsHeading>

        <MenuBlocks />

        <CardsWrapper/>
      </SportsWrapper>
    </SportsContainer>
   );
}
 
export default Sports;