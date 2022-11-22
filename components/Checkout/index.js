import moment from "moment";
import Image from "next/image";
import { useRouter } from 'next/router'
import Router from 'next/router'

import { CheckoutBottomContainer, CheckoutBottomContainerOne, CheckoutBottomContainerTwo, CheckoutBox, CheckoutBoxHorizontal, CheckoutBoxHorizontalGrid2, CheckoutBoxHorizontalGrid3, CheckoutButton, CheckoutDescription, CheckoutEnd, CheckoutFeatures, CheckoutImageWrapper, CheckoutInfo, CheckoutLabel, CheckoutName, CheckoutSection, CheckoutTitle, CheckoutTopContainer, CheckoutTopContainerHeading, CheckoutTopContainerMiddle, CheckoutTopContainerPrice, CheckoutTopContainerTitle, CheckoutTopContainerType, CheckoutValue } from "./CheckoutStyles";

import { collection, addDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'


const Checkout = ({ room, roomId }) => {
  const router = useRouter();
  const { fromdate, todate } = router.query; 
  const totaldays = moment.duration((moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY')))).asDays() 

  async function adddata() {
    try{
      await addDoc(collection(fireDB, "bookings") , {
        userId: 'xf7RLJfAaoMpHPjlMGG8', 
        from: fromdate,
        to: todate,
        roomId: roomId,
        bookingdate: moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a'),
      })

      await updateDoc(doc(fireDB, "rooms", roomId), {
        currentBookings: arrayUnion({fromdate: fromdate, todate: todate})
      })
  
      alert("Reserva feita com sucesso")
      Router.push({pathname: '/'})
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <>
      <CheckoutSection>
        <CheckoutTopContainer>
          <CheckoutTopContainerHeading>
            <CheckoutTopContainerTitle>{room ? room.title : ''}</CheckoutTopContainerTitle>
            <CheckoutTopContainerType>Casal</CheckoutTopContainerType>
          </CheckoutTopContainerHeading>
          <CheckoutTopContainerPrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(room.price)}</CheckoutTopContainerPrice>
        </CheckoutTopContainer>

        <CheckoutBottomContainer>
          <CheckoutBottomContainerOne>
            <CheckoutImageWrapper>
              <Image src={'https:' + room.imageurl} alt={room.title} layout="fill" />
            </CheckoutImageWrapper>
            <CheckoutFeatures>
            </CheckoutFeatures>
            <CheckoutDescription>{room.resume}</CheckoutDescription>
          </CheckoutBottomContainerOne>

          <CheckoutBottomContainerTwo>
            <CheckoutInfo>
              <CheckoutTitle>Confirmação</CheckoutTitle>
              <CheckoutBox>
                <CheckoutLabel>Nome</CheckoutLabel>
                <CheckoutName>Ricardo Augusto Dantas</CheckoutName>
              </CheckoutBox>
              <CheckoutBox>
                <CheckoutLabel>E-mail</CheckoutLabel>
                <CheckoutName>ricardo@tecdata.com.br</CheckoutName>
              </CheckoutBox>
              <CheckoutBoxHorizontalGrid2>
                <CheckoutBox>
                  <CheckoutLabel>Quarto</CheckoutLabel>
                  <CheckoutName>{room ? room.title : ''}</CheckoutName>
                </CheckoutBox>
                <CheckoutBox>
                  <CheckoutLabel>Categoria</CheckoutLabel>
                  <CheckoutName>Casal</CheckoutName>
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
              <p style={{textAlign:'right', marginBottom: 0}}>{totaldays} diárias</p>
              <CheckoutBoxHorizontal>
                <CheckoutLabel>Valor Total:</CheckoutLabel>
                <CheckoutValue>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(totaldays * room.price)}</CheckoutValue>
              </CheckoutBoxHorizontal>
              <CheckoutButton onClick={() => adddata()}>Reservar Agora</CheckoutButton>
            </CheckoutEnd>
          </CheckoutBottomContainerTwo>
        </CheckoutBottomContainer>
      </CheckoutSection>
    </>
  );
}

export default Checkout;