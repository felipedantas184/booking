import MyBookingsPage from "../components/MyBookings";
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout/Layout';
import fireDB from '../firebase/initFirebase';
import { BookingBox, BookingBoxHorizontalGrid2, BookingCard, BookingCardImage, BookingCardText, BookingInfo, BookingLabel, BookingName, BookingsCards, BookingsContainer, BookingsHeading, BookingsSection, BookingsSubtitle, BookingsTitle, BookingTitle, RoomCardButton, RoomCardButtonContainer } from "../components/MyBookings/MyBookingsStyles";
import Image from "next/image";
import { useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import 'antd/dist/antd.css'
import locale from 'antd/lib/date-picker/locale/pt_BR';
import { AdminBookingBox, AdminBookingBoxHorizontalGrid2, AdminBookingCard, AdminBookingCardImage, AdminBookingCardText, AdminBookingInfo, AdminBookingLabel, AdminBookingName, AdminBookingTitle, AdminCards, AdminContainer, AdminHeading, AdminSection, AdminSubtitle, AdminTitle, AdminTotalAmountTitle } from "../components/AdminPage/AdminStyles";

export async function getServerSideProps() {
  const firebaseBookings = await getDocs(collection(fireDB, "bookings"));
  const bookings = []
  firebaseBookings.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    bookings.push(obj)
  });

  const firebaseRooms = await getDocs(collection(fireDB, "rooms"));
  const rooms = []
  firebaseRooms.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    rooms.push(obj)
  });

  const firebaseUsers = await getDocs(collection(fireDB, "users"));
  const users = []
  firebaseUsers.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    users.push(obj)
  });

  return {
    props: {
      bookings,
      rooms,
      users
    }
  }
}

const Admin = ({ bookings, rooms, users }) => {
  const [selectedMonth, setSelectedMonth] = useState(moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a').slice(3,10))
  const disabledDate = (current) => {
    return current && current < moment().endOf("day")
  };

  const getTotalAmount = (selectedMonth) => {
    const filteredMonth = bookings.filter((item) => item.from.slice(3, 10) == selectedMonth)
    const value = filteredMonth.reduce((prev, curr) => prev + curr.amount, 0)

    return value
  }

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
    const userName = (user[0].name + ' ' + user[0].surname)

    return userName
  }
  const getUserEmail = (userId) => {
    const user = users.filter((user) => user.id == userId)
    console.log(user)
    const userEmail = (user[0].email)

    return userEmail
  }

  async function deleteData(bookingId, roomId, bookingFrom, bookingTo) {
    try {
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
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const onChange = (date, dateString) => {
    setSelectedMonth(dateString)
  };

  return (
    <Layout>
      <AdminSection>
        <AdminContainer>
          <AdminHeading>
            <AdminTitle>Checar Reservas</AdminTitle>
            <AdminSubtitle>Confira aqui as reservas no seu hotel.</AdminSubtitle>
            <DatePicker picker="month" inputReadOnly={true} format="MM-YYYY" locale={locale} allowClear={false} disabledDate={disabledDate} onChange={onChange}/>
          </AdminHeading>
          <div style={{width: '100%', color: '#13131A', marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <AdminTotalAmountTitle>Total a Receber em <br/> {selectedMonth} </AdminTotalAmountTitle>
            <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(getTotalAmount(selectedMonth))}</h3>
          </div>
          <AdminCards>
            {bookings.filter((item) => item.from.slice(3, 10) == selectedMonth)
              .map((booking) => (
                <AdminBookingCard key={booking.id}>
                  <AdminBookingCardImage>
                    <Image src={'https:' + getRoomImage(booking.roomId)} alt={getRoomName(booking.roomId)} layout='fill' />
                  </AdminBookingCardImage>
                  <AdminBookingCardText>
                    <AdminBookingInfo>
                      <AdminBookingTitle>{getRoomName(booking.roomId)}</AdminBookingTitle>
                      <AdminBookingBox>
                        <AdminBookingLabel>Nome</AdminBookingLabel>
                        <AdminBookingName>{getUserName(booking.userId)}</AdminBookingName>
                      </AdminBookingBox>
                      <AdminBookingBoxHorizontalGrid2>
                        <AdminBookingBox>
                          <AdminBookingLabel>Email</AdminBookingLabel>
                          <AdminBookingName>{getUserEmail(booking.userId)}</AdminBookingName>
                        </AdminBookingBox>
                        <AdminBookingBox>
                          <AdminBookingLabel>Capacidade</AdminBookingLabel>
                          <AdminBookingName>4 pessoas</AdminBookingName>
                        </AdminBookingBox>
                      </AdminBookingBoxHorizontalGrid2>
                      <AdminBookingBoxHorizontalGrid2>
                        <AdminBookingBox>
                          <AdminBookingLabel>Check-In</AdminBookingLabel>
                          <AdminBookingName>{booking.from}</AdminBookingName>
                        </AdminBookingBox>
                        <AdminBookingBox>
                          <AdminBookingLabel>Check-Out</AdminBookingLabel>
                          <AdminBookingName>{booking.to}</AdminBookingName>
                        </AdminBookingBox>
                      </AdminBookingBoxHorizontalGrid2>
                    </AdminBookingInfo>
                  </AdminBookingCardText>

                  <RoomCardButtonContainer>
                    <span style={{ fontWeight: '500', fontSize: 14 }} >{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(booking.amount)}</span>

                    <RoomCardButton onClick={() => deleteData(booking.id, booking.roomId, booking.from, booking.to)} >Cancelar Reserva</RoomCardButton>
                  </RoomCardButtonContainer>
                </AdminBookingCard>
              ))}
          </AdminCards>
        </AdminContainer>
      </AdminSection>
    </Layout>
  );
}

export default Admin;