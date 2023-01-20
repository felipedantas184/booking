import { BookingBox, GridOne, GridTwo, InfoBox, Section, Title, Wrapper } from "./ProfileStyles";

const Profile = () => {
  return ( 
    <Section>
      <Wrapper>
        <GridOne>
          <InfoBox>

          </InfoBox>
        </GridOne>
        <GridTwo>
          <Title>Minhas Reservas</Title>
          <BookingBox>

          </BookingBox>
        </GridTwo>
      </Wrapper>
    </Section>
   );
}
 
export default Profile;