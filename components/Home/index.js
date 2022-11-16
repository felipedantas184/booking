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
  const [filtered, setFiltered] = useState(rooms)
  const [totaldays, settotaldays] = useState()

  // DATES //
  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()

  const convertDate = (date) => {
    const [day, month, year] = date.split('-');
    const result = [year, month, day].join('-');

    return result
  }

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
    if (moment.duration((moment(dates[1], 'DD-MM-YYYY').diff(moment(dates[0], 'DD-MM-YYYY')))).asDays() == 0) {
      settotaldays(1)
    } else {
      settotaldays(moment.duration((moment(dates[1], 'DD-MM-YYYY').diff(moment(dates[0], 'DD-MM-YYYY')))).asDays())
    }

    var temprooms = duplicatedRooms;
    console.log('BEGIN OF THE FUNCTION - here come temprooms')
    console.log(temprooms)
    for (const room of duplicatedRooms) {
      var availability = true;
      if (room.currentBookings.length > 0) {
        console.log(`Checking ${room.title} is available`)
        for (const booking of room.currentBookings) {
          if (
            moment(moment(dates[0]).format('YYYY-MM-DD')).isBetween(convertDate(booking.fromdate), convertDate(booking.todate)) ||
            moment(moment(dates[1]).format('YYYY-MM-DD')).isBetween(convertDate(booking.fromdate), convertDate(booking.todate)) ||
            moment(convertDate(booking.fromdate)).isBetween(moment(moment(dates[0]).format('YYYY-MM-DD')), moment(moment(dates[1]).format('YYYY-MM-DD'))) ||
            moment(convertDate(booking.todate)).isBetween(moment(moment(dates[0]).format('YYYY-MM-DD')), moment(moment(dates[1]).format('YYYY-MM-DD'))) ||
            moment(dates[0]).format('DD-MM-YYYY') == booking.fromdate ||
            moment(dates[0]).format('DD-MM-YYYY') == booking.todate ||
            moment(dates[1]).format('DD-MM-YYYY') == booking.fromdate ||
            moment(dates[1]).format('DD-MM-YYYY') == booking.todate
          ) {
            availability = false
            console.log(`a data NÃO está livre para o quarto ${room.title} - ${room.id} : availability ${availability}`)
          } else {
            console.log(`a data está livre para o quarto ${room.title} : availability ${availability}`)
          }
        }
      } else {
        console.log(`o quarto ${room.title} não possui nenhuma reserva : availability ${availability} `)
      }

      if (availability == false) {
        temprooms = temprooms.filter((item) => item.id !== room.id)
        console.log('retirei o quarto')
      }
      console.log('HERE COMES FILTERED')
      console.log(temprooms)

      setAvailableRooms(temprooms)
    }
  }

  const disabledDate = (current) => {
    // Can not select days before today and today

    return current && current < moment().endOf("day")
  };

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeHeading>Escolha Seu Quarto {totaldays} </HomeHeading>
        <div style={{ width: '100%', minHeight: 50, backgroundColor: 'burlywood', display: 'flex', justifyContent: 'center' }} >
          <Space>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} locale={locale} allowClear={false} disabledDate={disabledDate} dropdownAlign={true} />
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