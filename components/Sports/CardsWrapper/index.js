import { SportsData } from "./CardsData";
import { CardDescription, CardInfoGroup, CardTitle, CardTopic, CardWrapper, JoinButton, SportsCard } from "./CardStyles";

const CardsWrapper = () => {
  return ( 
    <CardWrapper>
      {SportsData.map((sport) => (
        <SportsCard key={sport.blockId} style={{backgroundColor: `${sport.blockColor}`}} >
          <CardInfoGroup style={{marginBottom: 16}} >
            <CardTitle>{sport.blockName}</CardTitle>
            {sport.blockIcon}
          </CardInfoGroup>
          <CardInfoGroup>
            <CardTopic>HORÁRIO:</CardTopic>
            <CardDescription>{sport.blockTime}</CardDescription>
          </CardInfoGroup>
          <CardInfoGroup>
            <CardTopic>LOCAL:</CardTopic>
            <CardDescription>{sport.blockLocal}</CardDescription>
          </CardInfoGroup>
          <JoinButton>Fazer Parte</JoinButton>
        </SportsCard>
      ))}
    </CardWrapper>
   );
}
 
export default CardsWrapper;