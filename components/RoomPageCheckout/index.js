import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, GridWrapper, HalfWrapper, Heading, Subtitle, SubtitlePrice, TextWrapper, Topline } from './RoomPageCheckoutStyles';

import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'
import { useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'

const { RangePicker } = DatePicker;

const RoomPageCheckout = ({ room }) => {
  const { title, slug, price, featuredImage, description, resume } = room.fields

  const[fromdate, setfromdate] = useState()
  const[todate, settodate] = useState()
  
  const totaldays = moment.duration((moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY')))).asDays()

  function filterByDate(dates){
    console.log(moment(dates[0]).format('DD-MM-YYYY'))
    console.log(moment(dates[1]).format('DD-MM-YYYY'))

    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
  }


  // FIREBASE //
  async function adddata() {
    try{
      await addDoc(collection(fireDB, "bookings") , {
        name: 'Novo Usuário' , 
        age: 25 ,
        from: fromdate,
        to: todate,
        amount: (price)*(totaldays)
      })
      alert("Reserva feita com sucesso")
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }

  function addProductsData() {
    iPhonesList.map(async (iPhone) => {
      try {
        await addDoc(collection(fireDB, "products"), iPhone)
      } catch(error) {
        console.log(error)
        alert(error)	
      }
    })
  }

  async function getdata() {
    try{
      const users = await getDocs(collection(fireDB, "users"));
      const usersArray = []
      users.forEach((doc) => {

        const obj = {
          id: doc.id,
          ...doc.data()
        }

        usersArray.push(obj)
      });

      console.log(usersArray)
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }

  // FIREBASE //

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
          </TextWrapper>          
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          <Button onClick={() => adddata()}>Reservar Agora</Button>
        </HalfWrapper>
      </GridWrapper>
    </Container>
  );
}

export default RoomPageCheckout;

