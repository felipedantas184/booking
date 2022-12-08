import Image from "next/image";
import { BookingBox, BookingBoxHorizontalGrid2, BookingCard, BookingCardImage, BookingCardLocation, BookingCardText, BookingCardTextCategory, BookingCardTextSpan, BookingCardTitle, BookingInfo, BookingLabel, BookingName, BookingsCards, BookingsContainer, BookingsHeading, BookingsSection, BookingsSubtitle, BookingsTitle, BookingTitle } from "./MyBookingsStyles";

import { useAuth } from "../../context/AuthContext";

const MyBookingsPage = ({ bookings, rooms, users }) => {
  const { user } = useAuth()

  const myBookings = bookings.filter((booking) => booking.userId == user.uid)

  const getRoomName = (roomId) => {
    const room = rooms.filter((room) => room.id == roomId)
    const roomName = (room[0].title)

    return roomName
  }

  const getRoomImage = (roomId) => {
    const room = rooms.filter((room) => room.id == roomId)
    const roomImage = (room[0].imageurl)

    return roomImage
  }

  const getUserName = (userId) => {
    const user = users.filter((user) => user.id == userId)
    console.log(user)
    const userName = (user[0].name)

    return userName
  }

  const getUserEmail = (userId) => {
    const user = users.filter((user) => user.id == userId)
    console.log(user)
    const userEmail = (user[0].email)

    return userEmail
  }

  console.log(myBookings)
  return (
    <BookingsSection>
      <BookingsContainer>
        <BookingsHeading>
          <BookingsTitle>Minhas Reservas</BookingsTitle>
          <BookingsSubtitle>Confira aqui suas reservas.</BookingsSubtitle>
        </BookingsHeading>
        <BookingsCards>
          {myBookings.map((booking) => (
            <BookingCard key={booking.id}>
              <BookingCardImage>
                <Image src={'https:' + getRoomImage(booking.roomId)} alt={getRoomName(booking.roomId)} layout='fill' />
              </BookingCardImage>
              <BookingCardText>
                <BookingInfo>
                  <BookingTitle>{getRoomName(booking.roomId)}</BookingTitle>
                  <BookingBox>
                    <BookingLabel>Nome</BookingLabel>
                    <BookingName>{getUserEmail(booking.userId)}</BookingName>
                  </BookingBox>
                  <BookingBoxHorizontalGrid2>
                    <BookingBox>
                      <BookingLabel>Quarto</BookingLabel>
                      <BookingName>{getUserName(booking.userId)}</BookingName>
                    </BookingBox>
                    <BookingBox>
                      <BookingLabel>Categoria</BookingLabel>
                      <BookingName>Casal</BookingName>
                    </BookingBox>
                  </BookingBoxHorizontalGrid2>
                  <BookingBoxHorizontalGrid2>
                    <BookingBox>
                      <BookingLabel>Check-In</BookingLabel>
                      <BookingName>{booking.from}</BookingName>
                    </BookingBox>
                    <BookingBox>
                      <BookingLabel>Check-Out</BookingLabel>
                      <BookingName>{booking.to}</BookingName>
                    </BookingBox>
                  </BookingBoxHorizontalGrid2>
                </BookingInfo>
              </BookingCardText>
            </BookingCard>
          ))}
        </BookingsCards>
      </BookingsContainer>
    </BookingsSection>
  );
}

export default MyBookingsPage;