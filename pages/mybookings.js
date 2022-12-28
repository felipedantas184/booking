import MyBookingsPage from "../components/MyBookings";
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout/Layout';
import fireDB from '../firebase/initFirebase';
import Head from "next/head";

export async function getServerSideProps() {
  const firebaseBookings = await getDocs(collection(fireDB, "bookings"));
  const bookings = []
  firebaseBookings.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    bookings.push(obj)
  });

  const firebaseRooms = await getDocs(collection(fireDB, "rooms"));
  const rooms = []
  firebaseRooms.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    rooms.push(obj)
  });

  const firebaseUsers = await getDocs(collection(fireDB, "users"));
  const users = []
  firebaseUsers.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    users.push(obj)
  });

  return {
    props: {
      bookings,
      rooms,
      users
    }
  }
}

const MyBookings = ({ bookings, rooms, users }) => {
  return ( 
    <>
      <Head>
        <title>Minhas Reservas | ADUFPI Reservas</title>
        <meta name="description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Minhas Reservas | ADUFPI Reservas"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="Minhas Reservas | ADUFPI Reservas"/>

        <meta property="twitter:title" content="Minhas Reservas | ADUFPI Reservas"/>
        <meta property="twitter:url" content="https://carcara.vercel.app/"/>
        <meta property="twitter:description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Layout>
        <MyBookingsPage bookings={bookings} rooms={rooms} users={users} />
      </Layout>
    </>
   );
}
 
export default MyBookings;