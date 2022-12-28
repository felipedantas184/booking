import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import Landing from '../components/Landing';
import Layout from '../components/Layout/Layout';
import fireDB from '../firebase/initFirebase';

export async function getServerSideProps() {
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
      <Head>
        <title>ADUFPI - Associação dos Docentes da Universidade Federal do Piauí</title>
        <meta name="description" content="Espaço formativo e organizativo da luta em defesa da educação pública, da carreira docente, da Universidade pública, gratuita e de qualidade." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="ADUFPI - Associação dos Docentes da Universidade Federal do Piauí"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Espaço formativo e organizativo da luta em defesa da educação pública, da carreira docente, da Universidade pública, gratuita e de qualidade."/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="ADUFPI - Associação dos Docentes da Universidade Federal do Piauí"/>

        <meta property="twitter:title" content="ADUFPI - Associação dos Docentes da Universidade Federal do Piauí"/>
        <meta property="twitter:url" content="https://carcara.vercel.app/"/>
        <meta property="twitter:description" content="Espaço formativo e organizativo da luta em defesa da educação pública, da carreira docente, da Universidade pública, gratuita e de qualidade."/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Layout>
        <Landing rooms={rooms} />
      </Layout>
    </>
   );
}
 
