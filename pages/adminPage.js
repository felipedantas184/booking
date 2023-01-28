import { collection, getDocs } from "firebase/firestore";
import Admin from "../components/AdminNew";
import Layout from "../components/Layout/Layout";
import fireDB from "../firebase/initFirebase";

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

const AdminPageNew = ({ bookings, rooms, users }) => {
  return ( 
    <Layout>
      <Admin bookings={bookings} rooms={rooms} users={users} />
    </Layout>
   );
}
 
export default AdminPageNew;