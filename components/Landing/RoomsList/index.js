import Image from "next/image";
import { RoomCard, RoomCardButton, RoomCardButtonContainer, RoomCardButtonDisabled, RoomCardButtonSpan, RoomCardImage, RoomCardLocation, RoomCardText, RoomCardTextCategory, RoomCardTextSpan, RoomCardTitle, RoomsCards, RoomsListContainer, RoomsListHeading, RoomsListSection, RoomsListSubtitle, RoomsListTitle } from "./RoomsListStyles";
import Router from 'next/router'

import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

import { FiUsers } from 'react-icons/fi'

import moment from 'moment';
const { RangePicker } = DatePicker;
import locale from 'antd/lib/date-picker/locale/pt_BR';
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireDB from "../../../firebase/initFirebase";
import { useAuth } from "../../../context/AuthContext";
import { async } from "@firebase/util";

const RoomsList = ({ availableRooms, totaldays, filterByDate, fromdate, todate }) => {
  function sendData(room) {
    Router.push({
      pathname: `/checkout/${room.id}`,
      query: {
        fromdate,
        todate,
        totaldays
      }
    }, /**`/checkout/${room.id}`*/)
  }

  const disabledDate = (current) => {
    return current && current < moment().endOf("day")
  };

  const { user } = useAuth()
  const [userData, setUserData] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getUserData = async () => {
      setLoading(true);

      try {
        const docRef = doc(fireDB, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setUserData(undefined);
          console.log('No document!');
        }
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };

    getUserData();
	}, [user])


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
                  {(!userData) ? (
                    <></>
                  ) : (
                    <RoomCardTextSpan>Diária:
                      {(userData.relation === 'member') ? (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)) : (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.guestprice))}
                    </RoomCardTextSpan>
                  )}
                  <RoomCardTextSpan>4 <FiUsers size={14} color={'#EB5757'} /></RoomCardTextSpan>
                </RoomCardTextCategory>
                <RoomCardTitle>{room.title}</RoomCardTitle>
                <RoomCardLocation>{room.resume}</RoomCardLocation>
              </RoomCardText>


              <RoomCardButtonContainer>
                {(!userData) ? (
                  <></>
                ) : (
                  <span style={{ fontWeight: '500' }} >
                    {(totaldays == 0) ? ('') : (userData.relation === 'member') ? (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(totaldays * room.price)) : (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(totaldays * room.guestprice))}
                  </span>
                )}
                
                {(totaldays == 0) ? (
                  <RoomCardButtonDisabled disabled={true}>Selecione as Datas</RoomCardButtonDisabled>
                ) : (
                  <RoomCardButton onClick={() => sendData(room)} >Reservar Agora</RoomCardButton>
                )}
              </RoomCardButtonContainer>

            </RoomCard>
          ))}
        </RoomsCards>
      </RoomsListContainer>
    </RoomsListSection>
  );
}

export default RoomsList;