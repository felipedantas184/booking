import Head from 'next/head'
import Layout from '../components/Layout/Layout.js'
import Store from '../components/Store/StoreWrapper/index.js'

export default function Loja() {
  return (
    <>
    <Head>
      <title>Loja Carcará | Medicina UFPI</title>
      <meta name="description" content="Loja da Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      
      <meta property="og:title" content="Loja Carcará | Medicina UFPI"/>
      <meta property="og:type" content="school"/>
      <meta property="og:description" content="Loja da Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
      <meta property="og:image" content="/apple-touch-icon.png"/>
      <meta property="og:site_name" content="A.A.A. Carcará"/>

      <meta property="twitter:title" content="Loja Carcará | Medicina UFPI"/>
      <meta property="twitter:url" content="https://carcara.vercel.app/loja"/>
      <meta property="twitter:description" content="Loja da Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
      <meta property="twitter:image" content="/apple-touch-icon.png"/>
    </Head>
    <Layout>
      <Store />
    </Layout>
    </>
  )
}
