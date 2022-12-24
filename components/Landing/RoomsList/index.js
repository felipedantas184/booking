import Image from "next/image";
import { RoomCard, RoomCardButton, RoomCardButtonContainer, RoomCardButtonSpan, RoomCardImage, RoomCardLocation, RoomCardText, RoomCardTextCategory, RoomCardTextSpan, RoomCardTitle, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "./RoomsListStyles";
import Router from 'next/router'

import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

import moment from 'moment';
const { RangePicker } = DatePicker;
import locale from 'antd/lib/date-picker/locale/pt_BR';
import Link from "next/link";

const RoomsList = ({ availableRooms, totaldays, filterByDate, fromdate, todate }) => {
  function sendData(room) {
    Router.push({
      pathname: `/checkout/${room.id}`,
      query: {
        fromdate,
        todate
      }
    }/**, '/checkout' */)
  }

  const disabledDate = (current) => {
    return current && current < moment().endOf("day")
  };



  return (
    <RoomsListSection>
      <RoomsListContainer>
        <RoomsListHeading>
          <RoomsListTitle>Apartamentos ADUFPI</RoomsListTitle>
          <RoomsListSubtitle>Selecione as datas da hospedagem</RoomsListSubtitle>
          <RangePicker format="DD-MM-YYYY" inputReadOnly={true} onChange={filterByDate} locale={locale} allowClear={false} disabledDate={disabledDate} />
        </RoomsListHeading>
        <RoomsCards>
          {availableRooms.map((room) => (
            <RoomCard key={room.id}>
              <RoomCardImage>
                <Image src={'https:' + room.imageurl} alt={room.title} layout='fill' />
              </RoomCardImage>
              <RoomCardText>
                <RoomCardTextCategory>
                  <RoomCardTextSpan>Diária: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)}</RoomCardTextSpan>
                </RoomCardTextCategory>
                <RoomCardTitle>{room.title}</RoomCardTitle>
                <RoomCardLocation>{room.resume}</RoomCardLocation>
              </RoomCardText>

              {(totaldays !== 0) && (
                <RoomCardButtonContainer>
                  <span style={{fontWeight: '500'}} >{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(totaldays * room.price)}</span>

                  <RoomCardButton onClick={() => sendData(room)}>
                    Reservar Agora
                  </RoomCardButton>
                </RoomCardButtonContainer>
              )}
            </RoomCard>
          ))}
        </RoomsCards>
      </RoomsListContainer>
    </RoomsListSection>
  );
}

export default RoomsList;