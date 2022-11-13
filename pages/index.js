import { createClient } from 'contentful'
import Home from '../components/Home'

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

export default function Rooms({ rooms }) {
  console.log(rooms)


  return ( 
    <>
      <Home rooms={rooms} />
    </>
   );
}
 
