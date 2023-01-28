import { getAuth } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { BookingBox, Column1, Column2, GridOne, GridTwo, InfoBigGroup, InfoBox, InfoGroup, InfoHeading, InfoSubtitle, InfoTitle, Section, Title, UserImage, UserName, Wrapper } from "./ProfileStyles";

const Profile = ({ users }) => {
  const { user } = useAuth()

  const userProfile = users.filter((u) => u.id == user.uid)[0]
  console.log(userProfile.name)

  return (
    <Section>
      <Wrapper>
        <GridOne>
          <InfoBox>
            <InfoHeading>
              <UserImage>{userProfile.name.slice(0,2)}</UserImage>
              <UserName>{userProfile.name} {userProfile.surname}</UserName>
            </InfoHeading>
            <InfoBigGroup>
              <Column1>
                <InfoGroup>
                  <InfoTitle>Nome</InfoTitle>
                  <InfoSubtitle>{userProfile.name} {userProfile.surname}</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>E-mail</InfoTitle>
                  <InfoSubtitle>{userProfile.email}</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>Telefone</InfoTitle>
                  <InfoSubtitle>({userProfile.phone.slice(0,2)}) {userProfile.phone.slice(2,7)}-{userProfile.phone.slice(7,11)}</InfoSubtitle>
                </InfoGroup>
                <InfoGroup>
                  <InfoTitle>CPF</InfoTitle>
                  <InfoSubtitle>{userProfile.cpf.slice(0,3)}.{userProfile.cpf.slice(3,6)}.{userProfile.cpf.slice(6,9)}-{userProfile.cpf.slice(9,11)}</InfoSubtitle>
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