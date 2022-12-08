import MyBookingsPage from "../components/MyBookings";
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout/Layout';
import fireDB from '../firebase/initFirebase';

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
    <Layout>
      <MyBookingsPage bookings={bookings} rooms={rooms} users={users} />
    </Layout>
   );
}
 
export default MyBookings;