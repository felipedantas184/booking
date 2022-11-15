import { createClient } from 'contentful'
import { collection, getDocs } from 'firebase/firestore';
import Home from '../components/Home'
import fireDB from '../firebase/initFirebase';

// USING CONTENTFUL //
/** 
export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "room" })

  return {
    props: {
      rooms: res.items,
    },
    revalidate: 1
  }
}
*/
// USING CONTENTFUL //

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
  console.log(rooms)

  return ( 
    <>
      <Home rooms={rooms} />
    </>
   );
}
 
