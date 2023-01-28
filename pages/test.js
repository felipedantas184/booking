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

const people = [
  { id: 12, name: 'Billy', dob: '05-10-1998' },
  { id: 123, name: 'Bart', dob: '15-02-1993' },
  { id: 45, name: 'Belinda', dob: '31-01-1996' },
  { id: 67, name: 'Bonnie', dob: '09-04-1998' },
  { id: 89, name: 'Brenda', dob: '08-07-1996' },
  { id: 34, name: 'Bobby', dob: '12-09-1994' },
  { id: 234, name: 'Blake', dob: '01-01-2000' },
];

const log = console.log;

// log('\n\n built-in sort method');
// log(people.sort()); // [Object object]

// log('\n\n sort by name');
// log(people.sort(byName));

// log('\n\n sort by id');
// log(people.sort(byId));

// log('\n\n sort by date');
// log(people.sort(byDate));

log('\n\n sort by birthday as it occurs during the year');
log(people.sort(byDate));

function byDate(a, b) {
  //chronologically by year, month, then day
  return new Date(a.dob.split('-').reverse().join()).valueOf() - new Date(b.dob.split('-').reverse().join()).valueOf(); //timestamps
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
      </Layout>
    </>
  );
}