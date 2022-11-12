import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import Sports from "../components/Sports/SportsWrapper/index.js";

const Treinos = () => {
  return ( 
    <>
    <Head>
      <title>Treinos Carcará | Medicina UFPI</title>
      <meta name="description" content="Treinos para os associados da A.A.A. Carcará" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      
      <meta property="og:title" content="Treinos Carcará | Medicina UFPI"/>
      <meta property="og:type" content="school"/>
      <meta property="og:description" content="Treinos para os associados da A.A.A. Carcará"/>
      <meta property="og:image" content="/apple-touch-icon.png"/>
      <meta property="og:site_name" content="A.A.A. Carcará"/>

      <meta property="twitter:title" content="Treinos Carcará | Medicina UFPI"/>
      <meta property="twitter:url" content="https://carcara.vercel.app/treinos"/>
      <meta property="twitter:description" content="Treinos para os associados da A.A.A. Carcará"/>
      <meta property="twitter:image" content="/apple-touch-icon.png"/>
    </Head>
    <Layout>
      <Sports />
    </Layout>
    </>
   );
}
 
export default Treinos;