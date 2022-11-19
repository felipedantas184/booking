import Image from "next/image";
import { RoomCard, RoomCardButton, RoomCardButtonContainer, RoomCardButtonSpan, RoomCardImage, RoomCardLocation, RoomCardText, RoomCardTextCategory, RoomCardTextSpan, RoomCardTitle, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "./RoomsListStyles";
import Router from 'next/router'

import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'

import moment from 'moment';
const { RangePicker } = DatePicker;
import locale from 'antd/lib/date-picker/locale/pt_BR';
import Link from "next/link";

const RoomsList = ({ availableRooms, totaldays, filterByDate, fromdate, todate }) => {
  function sendData() {
    Router.push({
      pathname: '/checkout',
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
          <RoomsListSubtitle>Selecione as datas que deseja para sua hospedagem. <br /> As diárias têm início às 14h e checkout às 12h.</RoomsListSubtitle>
          <RangePicker format="DD-MM-YYYY" inputReadOnly={true} onChange={filterByDate} locale={locale} allowClear={false} disabledDate={disabledDate} />
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
                  <RoomCardTextSpan>casal</RoomCardTextSpan>
                  <RoomCardTextSpan>Diária: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)}</RoomCardTextSpan>
                  {/**ICON */}
                </RoomCardTextCategory>
                <RoomCardTitle>{room.title}</RoomCardTitle>
                <RoomCardLocation>{room.resume}</RoomCardLocation>
              </RoomCardText>

              {(totaldays !== 0) && (
                <RoomCardButtonContainer>
                  <span>Total: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(totaldays * room.price)}</span>
                  <div>
                    <RoomCardButton onClick={() => sendData()} >
                      Reservar Agora
                    </RoomCardButton>
                  </div>
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