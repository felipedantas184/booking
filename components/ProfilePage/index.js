import { getAuth } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { BookingBox, Column1, Column2, GridOne, GridTwo, InfoBigGroup, InfoBox, InfoGroup, InfoHeading, InfoSubtitle, InfoTitle, Section, Title, UserImage, UserName, Wrapper } from "./ProfileStyles";

const Profile = () => {
  const { user } = useAuth()

  console.log(user)

  return (
    <Section>
      <Wrapper>
        <GridOne>
          <InfoBox>
            <InfoHeading>
              <UserImage>FE</UserImage>
              <UserName>Felipe Augusto Oliveira Dantas</UserName>
            </InfoHeading>
            <InfoBigGroup>
              <Column1>
                <InfoGroup>
                  <InfoTitle>Nome</InfoTitle>
                  <InfoSubtitle>Felipe Augusto Oliveira Dantas</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>E-mail</InfoTitle>
                  <InfoSubtitle>felipedantas184@gmail.com</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>Telefone</InfoTitle>
                  <InfoSubtitle>(86) 99518-5757</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>CPF</InfoTitle>
                  <InfoSubtitle>056.202.043-83</InfoSubtitle>
                </InfoGroup>
              </Column1>
              <Column2>
                <InfoGroup>
                  <InfoTitle>Cidade</InfoTitle>
                  <InfoSubtitle>Teresina, PI</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>Bairro</InfoTitle>
                  <InfoSubtitle>Gurupi</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>Endereço</InfoTitle>
                  <InfoSubtitle>Av. Prof. Zaíra Freire, 647</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>Bairro</InfoTitle>
                  <InfoSubtitle>Gurupi</InfoSubtitle>
                </InfoGroup>
              </Column2>
            </InfoBigGroup>
          </InfoBox>
        </GridOne>
        <GridTwo>
        </GridTwo>
      </Wrapper>
    </Section>
  );
}

export default Profile;