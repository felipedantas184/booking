import moment from "moment";
import Image from "next/image";
import { useRouter } from 'next/router'

import { CheckoutBottomContainer, CheckoutBottomContainerOne, CheckoutBottomContainerTwo, CheckoutBox, CheckoutBoxHorizontal, CheckoutBoxHorizontalGrid2, CheckoutBoxHorizontalGrid3, CheckoutButton, CheckoutDescription, CheckoutEnd, CheckoutFeatures, CheckoutImageWrapper, CheckoutInfo, CheckoutLabel, CheckoutName, CheckoutSection, CheckoutTitle, CheckoutTopContainer, CheckoutTopContainerHeading, CheckoutTopContainerMiddle, CheckoutTopContainerPrice, CheckoutTopContainerTitle, CheckoutTopContainerType, CheckoutValue } from "./CheckoutStyles";

import { collection, addDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'


const Checkout = () => {
  const router = useRouter();
  const { fromdate, todate } = router.query; 
  const totaldays = moment.duration((moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY')))).asDays() 

  async function adddata() {
    try{
      await addDoc(collection(fireDB, "bookings") , {
        userId: 'xf7RLJfAaoMpHPjlMGG8', 
        from: fromdate,
        to: todate,
        roomId: 'QAV9nKGSOKgiQnaMwjtS',
        bookingdate: moment().utcOffset('-03:00').format('DD-MM-YYYY hh:mm:ss a'),
      })

      await updateDoc(doc(fireDB, "rooms", "QAV9nKGSOKgiQnaMwjtS"), {
        currentBookings: arrayUnion({fromdate: fromdate, todate: todate})
      })
    
      alert("Reserva feita com sucesso")
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
            <CheckoutTopContainerTitle>Quarto Luxo</CheckoutTopContainerTitle>
            <CheckoutTopContainerType>Casal</CheckoutTopContainerType>
          </CheckoutTopContainerHeading>
          <CheckoutTopContainerPrice>R$ 149,00</CheckoutTopContainerPrice>
        </CheckoutTopContainer>

        <CheckoutBottomContainer>
          <CheckoutBottomContainerOne>
            <CheckoutImageWrapper>
              <Image src='/images/roomBanner.jpg' alt='quarto' layout="fill" />
            </CheckoutImageWrapper>
            <CheckoutFeatures>
            </CheckoutFeatures>
            <CheckoutDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CheckoutDescription>
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
                  <CheckoutName>Quarto Luxo</CheckoutName>
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
                <CheckoutValue>R$ 2.478,30</CheckoutValue>
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