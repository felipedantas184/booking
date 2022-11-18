import Head from "next/head";
import Layout from '../components/Layout/Layout'
import Landing from "../components/Landing/index.js";

import { collection, getDocs } from 'firebase/firestore';
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

export default function Test({ rooms }) {
  return (
    <>
      <Head>
        <title>Nextsheet 💩</title>
        <meta
          name="description"
          content="Connecting NextJS with Google Spreadsheets as Database"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing rooms={rooms} />
      </Layout>
    </>
  );
}