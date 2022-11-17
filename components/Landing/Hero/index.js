import { HeroBox, HeroButton, HeroContainer, HeroForm, HeroHeading, HeroSection, HeroSubtitle, HeroTitle } from "./HeroStyles";
import { RoomCard, RoomCardButton, RoomCardButtonContainer, RoomCardButtonSpan, RoomCardImage, RoomCardLocation, RoomCardText, RoomCardTextCategory, RoomCardTextSpan, RoomCardTitle, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "../RoomsList/RoomsListStyles";

import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/pt_BR';
import { useState } from "react";
import Image from "next/image";


const Hero = ({ rooms }) => {
  const [availableRooms, setAvailableRooms] = useState(rooms)
  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const [totaldays, settotaldays] = useState()

  const convertDate = (date) => {
    const [day, month, year] = date.split('-');
    const result = [year, month, day].join('-');

    return result
  }

  const disabledDate = (current) => {
    return current && current < moment().endOf("day")
  };

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
    <HeroSection>
      <HeroContainer>
        <HeroHeading>
          <HeroTitle>Search Your Next Home</HeroTitle>
          <HeroSubtitle>Find new & featured property located in your local city.</HeroSubtitle>
        </HeroHeading>

        <HeroForm>
          <HeroBox>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} locale={locale} allowClear={false} disabledDate={disabledDate} />

            <HeroButton>
              {/**Icon*/}
            </HeroButton>
          </HeroBox>
        </HeroForm>
      </HeroContainer>
    </HeroSection>

    <RoomsListSection>
      <RoomsListContainer>
        <RoomsListHeading>
          <RoomsListTitle>Recent Property Listed</RoomsListTitle>
          <RoomsListSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</RoomsListSubtitle>
        </RoomsListHeading>
        <RoomsCards>
          {/**MAP */}
          {availableRooms.map((room) => (
            <RoomCard key={room.id}>
              <RoomCardImage>
                <Image src={'https:' + room.imageurl} alt={room.title} layout='fill' />
              </RoomCardImage>
              <RoomCardText>
                <RoomCardTextCategory>
                  <RoomCardTextSpan>for sale</RoomCardTextSpan>
                  {/**ICON */}
                </RoomCardTextCategory>
                <RoomCardTitle>{room.title}</RoomCardTitle>
                <RoomCardLocation>{room.resume}</RoomCardLocation>
              </RoomCardText>
              <RoomCardButtonContainer>
                <div>
                  <RoomCardButton>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)}</RoomCardButton>
                  <RoomCardButtonSpan>type</RoomCardButtonSpan>
                </div>
                <p>{totaldays*room.price}</p>
              </RoomCardButtonContainer>
            </RoomCard>
          ))}
        </RoomsCards>
      </RoomsListContainer>
    </RoomsListSection>
    </>
  );
}

export default Hero;