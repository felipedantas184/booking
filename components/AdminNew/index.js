import { HeaderItem, HeaderItemSmall, Heading, Section, Subtitle, Table, TableHeader, TableItem, TableItemSmall, TableRow, TableWrapper, Title, Wrapper } from "./AdminStyles";
import { DatePicker } from "antd";
import 'antd/dist/antd.css'
import locale from 'antd/lib/date-picker/locale/pt_BR';
import moment from "moment";
import { useState } from "react";

import { MdConfirmationNumber, MdOutlineCancel } from 'react-icons/md'
import { FaEdit, FaSave } from "react-icons/fa";
import { async } from "@firebase/util";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import fireDB from "../../firebase/initFirebase";

const Admin = ({ bookings, rooms, users }) => {
  const [selectedMonth, setSelectedMonth] = useState(moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a').slice(3, 10))
  const [updatePayment, setUpdatePayment] = useState()
  const [updateStatus, setUpdateStatus] = useState()

  const [editingBooking, setEditingBooking] = useState()

  console.log(updatePayment, updateStatus)

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

  async function bookingEdit(booking) {
    setEditingBooking(booking)
  }

  async function updateData(bookingId) {
    try {
      if (confirm("Você tem certeza de que deseja atualizar esta reserva?") == true) {
        (updatePayment && updateStatus) ? (
          await updateDoc(doc(fireDB, "bookings", bookingId), {
            payment: updatePayment,
            status: updateStatus
          })
        ) : (updatePayment && !updateStatus) ? (
          await updateDoc(doc(fireDB, "bookings", bookingId), {
            payment: updatePayment
          })
        ) : (!updatePayment && updateStatus) ? (
          await updateDoc(doc(fireDB, "bookings", bookingId), {
            status: updateStatus
          })
        ) : (!updatePayment && !updateStatus) ? (
          alert('Não há nada para atualizar')
        ) : (alert('Nada para realizar'))
        alert("Reserva atualizada!")
        location.reload()
      }
    } catch (error) {
      alert(error)
    }
  }

  const getTotalAmount = () => {
    const filteredMonth = bookings.filter((item) => item.from.slice(3, 10) == selectedMonth)
    const value = filteredMonth.reduce((prev, curr) => prev + curr.amount, 0)

    return value
  }

  const getTotalPaidAmount = () => {
    const filteredMonth = bookings.filter((item) => item.from.slice(3, 10) == selectedMonth && item.status == 'Pago')
    const value = filteredMonth.reduce((prev, curr) => prev + curr.amount, 0)

    return value
  }

  return (
    <Section>
      <Wrapper>
        <Heading>
          <Title>Administração</Title>
          <Subtitle>Selecione as datas</Subtitle>
          <DatePicker picker="month" inputReadOnly={true} format="MM-YYYY" locale={locale} allowClear={false} onChange={onChange} />
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
                  <TableItem>{booking.payment}</TableItem>
                  <TableItemSmall>{booking.status}</TableItemSmall>
                  <TableItemSmall style={{gap: 8}}>
                    <MdOutlineCancel style={{ cursor: 'pointer' }} size={16} color={'#EC5757'} onClick={() => deleteData(booking.id, booking.roomId, booking.from, booking.to)} />
                    <FaEdit style={{ cursor: 'pointer' }} size={16} color={'#C4C4C4'} onClick={() => bookingEdit(booking)} />
                  </TableItemSmall>
                </TableRow>
              ))
            }
          </Table>
        </TableWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <HeaderItem>Total de Reservas</HeaderItem>
              <HeaderItem>Valor Total Pago</HeaderItem>
              <HeaderItem>Valor Total Esperado</HeaderItem>
            </TableHeader>
            <TableRow>
              <TableItem>{sortedBookings.filter((item) => item.from.slice(3, 10) == selectedMonth).length}</TableItem>
              <TableItem>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(getTotalAmount(selectedMonth))}</TableItem>
              <TableItem>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(getTotalPaidAmount(selectedMonth))}</TableItem>
            </TableRow>
          </Table>
        </TableWrapper>
        {(editingBooking) && (
          <TableWrapper>
            <Table>
              <TableHeader style={{backgroundColor: '#EC5757'}} >
                <HeaderItem>Nome</HeaderItem>
                <HeaderItem>Quarto</HeaderItem>
                <HeaderItem>Check-In</HeaderItem>
                <HeaderItem>Check-Out</HeaderItem>
                <HeaderItem>Valor Total</HeaderItem>
                <HeaderItem>Pagamento</HeaderItem>
                <HeaderItemSmall>Status</HeaderItemSmall>
                <HeaderItemSmall>Ação</HeaderItemSmall>
              </TableHeader>
              <TableRow>
                <TableItem>{getUserName(editingBooking.userId)}</TableItem>
                <TableItem>{getRoomName(editingBooking.roomId)}</TableItem>
                <TableItem>{editingBooking.from}</TableItem>
                <TableItem>{editingBooking.to}</TableItem>
                <TableItem>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(editingBooking.amount)}</TableItem>
                <TableItem>
                  <select defaultValue={editingBooking.payment}
                    onChange={(e) =>
                      setUpdatePayment(e.target.value)
                    }>
                    <option value="Crédito" >Cartão Crédito</option>
                    <option value="Débito" >Cartão Débito</option>
                    <option value="Pendente" >Pendente</option>
                    <option value="Pix" >Pix</option>
                    <option value="Espécie" >Espécie</option>
                  </select>
                </TableItem>
                <TableItemSmall>
                  <select defaultValue={editingBooking.status}
                    onChange={(e) =>
                      setUpdateStatus(e.target.value)
                    }>
                    <option value="Pendente">Pendente</option>
                    <option value="Pago">Pago</option>
                  </select>
                </TableItemSmall>
                <TableItemSmall style={{ justifyContent: 'space-around' }}>
                  <FaSave style={{ cursor: 'pointer' }} size={16} color={'#02AD50'} onClick={() => updateData(editingBooking.id)} />
                </TableItemSmall>
              </TableRow>
            </Table>
          </TableWrapper>
        )}
      </Wrapper>
    </Section>
  );
}

export default Admin;