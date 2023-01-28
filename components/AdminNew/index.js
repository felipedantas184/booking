import { HeaderItem, HeaderItemSmall, Heading, Section, Subtitle, Table, TableHeader, TableItem, TableItemSmall, TableRow, TableWrapper, Title, Wrapper } from "./AdminStyles";
import { DatePicker } from "antd";
import 'antd/dist/antd.css'
import locale from 'antd/lib/date-picker/locale/pt_BR';
import moment from "moment";
import { useState } from "react";

import { MdOutlineCancel } from 'react-icons/md'

const Admin = ({bookings, rooms, users}) => {
  const [selectedMonth, setSelectedMonth] = useState(moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a').slice(3, 10))

  function byDate(a, b) {
    //chronologically by year, month, then day
    return new Date(a.from.split('-').reverse().join()).valueOf() - new Date(b.from.split('-').reverse().join()).valueOf(); //timestamps
  }

  const sortedBookings = bookings.sort(byDate)

  
  const onChange = (date, dateString) => {
    setSelectedMonth(dateString)
  };

  
  const getRoomName = (roomId) => {
    const room = rooms.filter((room) => room.id == roomId)
    const roomName = (room[0].title)

    return roomName
  }

  const getUserName = (userId) => {
    const user = users.filter((user) => user.id == userId)
    const userName = (user[0].name + ' ' + user[0].surname)

    return userName
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
      alert(error)
    }
  }

  return ( 
    <Section>
      <Wrapper>
        <Heading>
          <Title>Administração</Title>
          <Subtitle>Selecione as datas</Subtitle>
          <DatePicker picker="month" inputReadOnly={true} format="MM-YYYY" locale={locale} allowClear={false} onChange={onChange}/>
        </Heading>
        <TableWrapper>
          <Table>
            <TableHeader>
              <HeaderItem>Nome</HeaderItem>
              <HeaderItem>Quarto</HeaderItem>
              <HeaderItem>Check-In</HeaderItem>
              <HeaderItem>Check-Out</HeaderItem>
              <HeaderItem>Valor Total</HeaderItem>
              <HeaderItem>Pagamento</HeaderItem>
              <HeaderItemSmall>Status</HeaderItemSmall>
              <HeaderItemSmall>Ação</HeaderItemSmall>
            </TableHeader>
            {sortedBookings.filter((item) => item.from.slice(3, 10) == selectedMonth)
              .map((booking) => (
                <TableRow key={booking.id} >
                  <TableItem>{getUserName(booking.userId)}</TableItem>
                  <TableItem>{getRoomName(booking.roomId)}</TableItem>
                  <TableItem>{booking.from}</TableItem>
                  <TableItem>{booking.to}</TableItem>
                  <TableItem>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(booking.amount)}</TableItem>
                  <TableItem>Cartão de Crédito</TableItem>
                  <TableItemSmall>Pago</TableItemSmall>
                  <TableItemSmall><MdOutlineCancel style={{cursor: 'pointer'}} size={16} color={'#EC5757'} onClick={() => deleteData(booking.id, booking.roomId, booking.from, booking.to)} /></TableItemSmall>
                </TableRow>
              ))
            }
          </Table>
        </TableWrapper>
      </Wrapper>
    </Section>
   );
}
 
export default Admin;