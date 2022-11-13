import { createClient } from 'contentful';
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import RoomPage from '../components/RoomPage';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "room" 
  })

  
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'room',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { room: items[0] },
    revalidate: 1
  }
}

export default function RoomDetails({ room }) {
  return (
    <>
    <Head>
      <title>Página Individual</title>
    </Head>
    <Layout>
      <RoomPage room={room} />
    </Layout>
    </>
  )
}
