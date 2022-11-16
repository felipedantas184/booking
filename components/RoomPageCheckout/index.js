import Image from 'next/image'
import { Button, Container, GridWrapper, HalfWrapper, Heading, Subtitle, SubtitlePrice, TextWrapper, Topline } from './RoomPageCheckoutStyles';

import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;
import moment from 'moment'

import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, Timestamp, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'



const RoomPageCheckout = ({ room }) => {
  const { title, slug, price, featuredImage, resume } = room.fields
  const [currentBookings, setCurrentBookings] = useState([])

  // FIREBASE //
  async function adddata() {
    try{
      await addDoc(collection(fireDB, "bookings") , {
        name: 'Novo Usuário' , 
        age: 25 ,
        from: fromdate,
        to: todate,
        amount: (price)*(totaldays),
        room: title,
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

  async function getCurrentBookings() {
    try{
      const firebaseBookings = await getDocs(collection(fireDB, "bookings"));
      const currentBookings = []
      firebaseBookings.forEach((doc) => {

        const obj = {
          id: doc.id,
          ...doc.data()
        }

        currentBookings.push(obj)
      });

      setCurrentBookings(currentBookings)
    } catch(error) {
      console.log(error)
      alert(error)
      } 
  }

  useEffect(() => {
		getCurrentBookings()
	}, [])
  // FIREBASE //


  // DATES //
  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const totaldays = moment.duration((moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY')))).asDays()

  const thisRoomBookingDates = currentBookings.filter(item => item.room == title)

  function filterByDate(dates){
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
  }
  
  const disabledDate = (current) => {
    // Can not select days before today and today

    return current && current < moment().endOf("day")
  };
  // DATES //




  return (
    <Container>
      <GridWrapper>
        <HalfWrapper>
          <Image src={'https:' + featuredImage.fields.file.url} alt={title} width={470} height={556} />
        </HalfWrapper>
        <HalfWrapper>
          <TextWrapper>
            <Topline>Novidade {fromdate} - {todate} - {totaldays} </Topline>
            <Heading>{title}</Heading>
            <SubtitlePrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price)}</SubtitlePrice>
            <Subtitle>{resume}</Subtitle>
            <SubtitlePrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price*totaldays)}</SubtitlePrice>

            {currentBookings.filter(item => item.room == title)
            .map((booking) => (
              <p key={booking.bookingdate} >{booking.from} - {booking.to}</p>
            ))}

          </TextWrapper>          
          <RangePicker disabledDate={disabledDate} format="DD-MM-YYYY" onChange={filterByDate} />
          <Button onClick={() => adddata()}>Reservar Agora</Button>
        </HalfWrapper>
      </GridWrapper>
    </Container>
  );
}

export default RoomPageCheckout;

