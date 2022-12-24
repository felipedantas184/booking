import Head from 'next/head'
import Checkout from '../../components/Checkout';
import Layout from '../../components/Layout/Layout'

import fireDB from '../../firebase/initFirebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';

export const getStaticPaths = async () => {
  const firebaseRooms = await getDocs(collection(fireDB, "rooms"));
  const rooms = []
  firebaseRooms.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    rooms.push(obj)
  });

  
  const paths = rooms.map(item => {
    return {
      params: { id: item.id }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await getDoc(doc(fireDB, "rooms", id));
	const room = data.data()

  return {
    props: {
      room: room,
      roomId: id
    }
  }
}
// CONTENTFUL //

export default function RoomCheckout({ room, roomId }) {
  const { user } = useAuth()
	const [userName, setUserName] = useState()
  const [userSurname, setUserSurname] = useState()

	useEffect(() => {
		async function getUserName() {
			const result = await getDoc(doc(fireDB, 'users', user.uid))
			setUserName(result.data().name)
      setUserSurname(result.data().surname)
		}

		getUserName()
	}, [user])


  return (
    <>
    <Head>
      <title>Página Individual</title>
    </Head>
    <Layout>
      <Checkout room={room} roomId={roomId} userName={`${userName} ${userSurname}`}  /> 
    </Layout>
    </>
  )
}
