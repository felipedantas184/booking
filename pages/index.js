import { collection, getDocs } from 'firebase/firestore';
import Landing from '../components/Landing';
import Layout from '../components/Layout/Layout';
import fireDB from '../firebase/initFirebase';

export async function getStaticProps() {
  const firebaseRooms = await getDocs(collection(fireDB, "rooms"));
  const rooms = []
  firebaseRooms.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    rooms.push(obj)
  });

  return {
    props: {
      rooms
    }
  }
}
export default function Rooms({ rooms }) {

  return ( 
    <>
      <Layout>
        <Landing rooms={rooms} />
      </Layout>
    </>
   );
}
 
