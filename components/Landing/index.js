import moment from "moment";
import { useState } from "react";
import RoomsList from "./RoomsList";

const Landing = ({ rooms }) => {
  const [availableRooms, setAvailableRooms] = useState(rooms)
  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const [totaldays, settotaldays] = useState(0)

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

    var temprooms = rooms;
    for (const room of rooms) {
      var availability = true;
      if (room.currentBookings.length > 0) {
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
          }
        }
      }
      if (availability == false) {
        temprooms = temprooms.filter((item) => item.id !== room.id)
      }
      setAvailableRooms(temprooms)
    }
  }

  return (
    <>
      <RoomsList availableRooms={availableRooms} totaldays={totaldays} filterByDate={filterByDate} fromdate={fromdate} todate={todate} />
    </>
  );
}

export default Landing;