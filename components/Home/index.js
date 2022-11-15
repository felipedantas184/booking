import { useEffect, useState } from "react";
import RoomCard from "../RoomCard";
import { HomeContainer, HomeHeading, HomeWrapper, RoomsList } from "./HomeStyles";
import { collection, addDoc, getDocs, Timestamp, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'

import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/pt_BR';

const Home = ({ rooms }) => {
  const [currentBookings, setCurrentBookings] = useState([])
  const [duplicatedRooms, setDuplicatedRooms] = useState(rooms)
  const [availableRooms, setAvailableRooms] = useState(rooms)

  // DATES //
  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const totaldays = moment.duration((moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY')))).asDays() + 1

  const convertDate = (date) => {
    const [day, month, year] = date.split('-');
    const result = [year, month, day].join('-');

    return result
  }

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))

    var temprooms = [];
    var availability = false;
    for (const room of duplicatedRooms) {
      if (room.currentBookings.length > 0) {
        for (const booking of room.currentBookings) {
          if (
            !moment(moment(dates[0]).format('YYYY-MM-DD')).isBetween(
              convertDate(booking.fromdate),
              convertDate(booking.todate),
            ) &&
            !moment(moment(dates[1]).format('YYYY-MM-DD')).isBetween(
              convertDate(booking.fromdate),
              convertDate(booking.todate),
            ) &&
            !moment(convertDate(booking.fromdate)).isBetween(
              moment(moment(dates[0]).format('YYYY-MM-DD')),
              moment(moment(dates[1]).format('YYYY-MM-DD')),
            ) &&
            !moment(convertDate(booking.todate)).isBetween(
              moment(moment(dates[0]).format('YYYY-MM-DD')),
              moment(moment(dates[1]).format('YYYY-MM-DD')),
            )
          ) {
            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
            ) {
              availability = true
            }
          }
        }
      }

      if (availability == true || room.currentBookings.length == 0) {
        temprooms.push(room)
        console.log(temprooms)
      }

      setAvailableRooms(temprooms)
    }
  }

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeHeading>Escolha Seu Quarto</HomeHeading>
        <div style={{ width: '100%', minHeight: 50, backgroundColor: 'burlywood', display: 'flex', justifyContent: 'center' }} >
          <Space>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} locale={locale} allowClear={false} />
          </Space>

          <button onClick={() => addRoomsData()} >Click Here</button>
        </div>

        <RoomsList>
          {availableRooms.map((room) => (
            <RoomCard key={room.id} room={room} fromdate={fromdate} todate={todate} />
          ))}
        </RoomsList>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default Home;