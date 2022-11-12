import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import Perks from "../components/Perks/PerksWrapper";

const Vantagens = () => {
  return ( 
    <>
    <Head>
      <title>Vantagens Carcará | Medicina UFPI</title>
      <meta name="description" content="Vantagens para os associados da A.A.A. Carcará" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      
      <meta property="og:title" content="Vantagens Carcará | Medicina UFPI"/>
      <meta property="og:type" content="school"/>
      <meta property="og:description" content="Vantagens para os associados da A.A.A. Carcará"/>
      <meta property="og:image" content="/apple-touch-icon.png"/>
      <meta property="og:site_name" content="A.A.A. Carcará"/>

      <meta property="twitter:title" content="Vantagens Carcará | Medicina UFPI"/>
      <meta property="twitter:url" content="https://carcara.vercel.app/vantagens"/>
      <meta property="twitter:description" content="Vantagens para os associados da A.A.A. Carcará"/>
      <meta property="twitter:image" content="/apple-touch-icon.png"/>
    </Head>
    <Layout>
      <Perks />
    </Layout>
    </>
   );
}
 
export default Vantagens;