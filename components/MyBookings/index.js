import Image from "next/image";
import { BookingBox, BookingBoxHorizontalGrid2, BookingCard, BookingCardImage, BookingCardLocation, BookingCardText, BookingCardTextCategory, BookingCardTextSpan, BookingCardTitle, BookingInfo, BookingLabel, BookingName, BookingsCards, BookingsContainer, BookingsHeading, BookingsSection, BookingsSubtitle, BookingsTitle, BookingTitle, RoomCardButton, RoomCardButtonContainer } from "./MyBookingsStyles";

import { useAuth } from "../../context/AuthContext";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import fireDB from "../../firebase/initFirebase";

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
    const userName = (user[0].name + ' ' +user[0].surname)

    return userName
  }
  const getUserEmail = (userId) => {
    const user = users.filter((user) => user.id == userId)
    console.log(user)
    const userEmail = (user[0].email)

    return userEmail
  }

  async function deleteData(bookingId, roomId, bookingFrom, bookingTo) {
    try{
      if (confirm("Você tem certeza de que deseja cancelar esta reserva?" + roomId) == true) {
        await deleteDoc(doc(fireDB, "bookings", bookingId)).then(
          updateDoc(doc(fireDB, "rooms", roomId), {
            currentBookings: arrayRemove({
              bookingId: bookingId,
              fromdate: bookingFrom,
              todate: bookingTo
            })
          })
        )
        alert("Reserva cancelada!")
        location.reload()  
      }
    } catch(error) {
      console.log(error)
      alert(error)
    }
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
                    <BookingName>{getUserName(booking.userId)}</BookingName>
                  </BookingBox>                
                  <BookingBoxHorizontalGrid2>
                    <BookingBox>
                      <BookingLabel>Email</BookingLabel>
                      <BookingName>{getUserEmail(booking.userId)}</BookingName>
                    </BookingBox>
                    <BookingBox>
                      <BookingLabel>Capacidade</BookingLabel>
                      <BookingName>4 pessoas</BookingName>
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

              <RoomCardButtonContainer>
                <span style={{ fontWeight: '500', fontSize: 14 }} >{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(booking.amount)}</span>

                <RoomCardButton onClick={() => deleteData(booking.id, booking.roomId, booking.from, booking.to)} >Cancelar Reserva</RoomCardButton>
              </RoomCardButtonContainer>
            </BookingCard>
          ))}
        </BookingsCards>
      </BookingsContainer>
    </BookingsSection>
  );
}

export default MyBookingsPage;