import moment from "moment";
import Image from "next/image";
import { useRouter } from 'next/router'
import Router from 'next/router'

import { CheckoutBottomContainer, CheckoutBottomContainerOne, CheckoutBottomContainerTwo, CheckoutBox, CheckoutBoxHorizontal, CheckoutBoxHorizontalGrid2, CheckoutButton, CheckoutDescription, CheckoutDescriptionTime, CheckoutEnd, CheckoutFeatures, CheckoutImageWrapper, CheckoutInfo, CheckoutLabel, CheckoutName, CheckoutSection, CheckoutTitle, CheckoutTopContainer, CheckoutTopContainerPrice, CheckoutTopContainerTitle, CheckoutValue } from "./CheckoutStyles";

import { collection, addDoc, updateDoc, arrayUnion, doc, getDoc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'

import { useAuth } from "../../context/AuthContext";
import { sendContactForm } from "../../lib/api";
import { useEffect, useState } from "react";

const Checkout = ({ room, roomId, userName }) => {
  const router = useRouter();
  const { fromdate, todate, totaldays } = router.query;

  const { user } = useAuth()
  async function adddata() {
    try {
      await addDoc(collection(fireDB, "bookings"), {
        userId: user.uid,
        from: fromdate,
        to: todate,
        roomId: roomId,
        bookingdate: moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a'),
        amount: (userData.relation === 'member') ? (room.price * totaldays) : (room.guestprice * totaldays),
        payment: 'Pendente',
        status: 'Pendente'
      }).then(function (docRef) {
        updateDoc(doc(fireDB, "rooms", roomId), {
          currentBookings: arrayUnion({ fromdate: fromdate, todate: todate, bookingId: docRef.id })
        })
        sendContactForm({
          name: userName,
          email: user.email,
          subject: 'Reserva Realizada com Sucesso - ADUFPI',
          from: fromdate,
          to: todate,
          room: room.title,
          amount: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price * totaldays),
          bookingId: docRef.id
        })
      })

      alert("Reserva feita com sucesso")
      Router.push({ pathname: '/mybookings' })
    } catch (error) {
      alert(error)
    }
  }



  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const getUserData = await getDoc(doc(fireDB, "users", user.uid))
      const data = getUserData.data()
      setUserData(data)
      setLoading(false)
    }

    getData()
  }, [user])

  return (
    <>
      <CheckoutSection>
        <CheckoutTopContainer>
          <CheckoutTopContainerTitle>{room ? room.title : ''}</CheckoutTopContainerTitle>
          {(loading) ? (
            <></>
          ) : (
            <CheckoutTopContainerPrice>
              {(userData.relation === 'member') ? (`${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room ? room.price : 0)}/diária`) : (`${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room ? room.guestprice : 0)}/diária`)}
            </CheckoutTopContainerPrice>
          )}
        </CheckoutTopContainer>

        <CheckoutBottomContainer>
          <CheckoutBottomContainerOne>
            <CheckoutImageWrapper>
              <Image src={room ? 'https:' + room.imageurl : '/images/banner.jpg'} alt={room ? room.title : ''} layout="fill" />
            </CheckoutImageWrapper>
            <CheckoutFeatures>
            </CheckoutFeatures>
          </CheckoutBottomContainerOne>

          <CheckoutBottomContainerTwo>
            <CheckoutInfo>
              <CheckoutTitle>Confirmação</CheckoutTitle>
              <CheckoutBox>
                <CheckoutLabel>Nome</CheckoutLabel>
                <CheckoutName>{userName}</CheckoutName>
              </CheckoutBox>
              <CheckoutBox>
                <CheckoutLabel>E-mail</CheckoutLabel>
                <CheckoutName>{user.email}</CheckoutName>
              </CheckoutBox>
              <CheckoutBoxHorizontalGrid2>
                <CheckoutBox>
                  <CheckoutLabel>Quarto</CheckoutLabel>
                  <CheckoutName>{room ? room.title : ''}</CheckoutName>
                </CheckoutBox>
                <CheckoutBox>
                  <CheckoutLabel>Capacidade</CheckoutLabel>
                  <CheckoutName>4 pessoas</CheckoutName>
                </CheckoutBox>
              </CheckoutBoxHorizontalGrid2>
              <CheckoutBoxHorizontalGrid2>
                <CheckoutBox>
                  <CheckoutLabel>Check-In</CheckoutLabel>
                  <CheckoutName>{fromdate}</CheckoutName>
                </CheckoutBox>
                <CheckoutBox>
                  <CheckoutLabel>Check-Out</CheckoutLabel>
                  <CheckoutName>{todate}</CheckoutName>
                </CheckoutBox>
              </CheckoutBoxHorizontalGrid2>
            </CheckoutInfo>
            <CheckoutEnd>
              <p style={{ textAlign: 'right', marginBottom: 0, fontSize: 14, color: '#13131A' }}>{totaldays} diárias</p>
              <CheckoutBoxHorizontal>
                <CheckoutLabel style={{ fontSize: 16 }} >Valor Total:</CheckoutLabel>
                {(loading) ? (
                  <></>
                ) : (
                  <CheckoutValue>
                    {(userData.relation === 'member') ? (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room ? room.price * totaldays : 0)) : (Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room ? room.guestprice * totaldays : 0))}
                  </CheckoutValue>
                )}
              </CheckoutBoxHorizontal>
              <CheckoutButton onClick={() => adddata()}>Confirmar Reserva</CheckoutButton>
            </CheckoutEnd>
          </CheckoutBottomContainerTwo>
        </CheckoutBottomContainer>

        <CheckoutBottomContainer style={{ marginTop: 8 }} >
          <CheckoutBottomContainerOne>
            <CheckoutDescription>{room ? room.resume : ''}</CheckoutDescription>
          </CheckoutBottomContainerOne>
          <CheckoutBottomContainerTwo style={{ height: 'auto' }}>
            <CheckoutDescriptionTime style={{ textAlign: 'center' }}>As diárias têm início às 14h e checkout às 12h.</CheckoutDescriptionTime>
          </CheckoutBottomContainerTwo>
        </CheckoutBottomContainer>
      </CheckoutSection>
    </>
  );
}

export default Checkout;