import Head from 'next/head'
import Form from '../../components/Form';
import Layout from '../../components/Layout/Layout';

export default function Identification() {
  return (
    <>
    <Head>
      <title>Carteira Digital | A.A.A. Carcará</title>
      <meta name="description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      
      <meta property="og:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
      <meta property="og:type" content="school"/>
      <meta property="og:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
      <meta property="og:image" content="/apple-touch-icon.png"/>
      <meta property="og:site_name" content="A.A.A. Carcará"/>

      <meta property="twitter:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
      <meta property="twitter:url" content="https://carcara.vercel.app/carteira-digital"/>
      <meta property="twitter:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
      <meta property="twitter:image" content="/apple-touch-icon.png"/>
    </Head>
    <Layout>
      <Form />
    </Layout>
    </>
  )
}
