import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { WorkingOnIt } from '../styles/pages/working'
import Layout from '../components/Layout/Layout'
import Image from 'next/image'
import Head from 'next/head'

const Working = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [router])

  return (
    <>
      <Head>
        <title>Estamos Trabalhando | ADUFPI Reservas</title>
        <meta name="description" content="Confira todas as reservas feitas por você!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="noindex" />

        <meta property="og:title" content="Estamos Trabalhando | ADUFPI Reservas" />
        <meta property="og:type" content="school" />
        <meta property="og:description" content="Confira todas as reservas feitas por você!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Estamos Trabalhando | ADUFPI Reservas" />

        <meta property="twitter:title" content="Estamos Trabalhando | ADUFPI Reservas" />
        <meta property="twitter:url" content="https://carcara.vercel.app/" />
        <meta property="twitter:description" content="Confira todas as reservas feitas por você!" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>
      
      <Layout>
        <WorkingOnIt>
          <Image src={'/images/working.svg'} alt="Estamos trabalhando" width={245} height={160} />
          <h1>Estamos Trabalhando!</h1>
          <h2>Falta pouco para você desfrutar desta funcionalidade ;-)</h2>
          <p>Redirecionando para em alguns segundos...</p>
        </WorkingOnIt>
      </Layout>
    </>
  );
}

export default Working;