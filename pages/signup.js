import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import SignupPage from "../components/Signup Page"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [router, user])

  return (
    <>
      <Head>
        <title>Cadastro | ADUFPI Reservas</title>
        <meta name="description" content="Confira todas as reservas feitas por você!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Cadastro | ADUFPI Reservas"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Confira todas as reservas feitas por você!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="Cadastro | ADUFPI Reservas"/>

        <meta property="twitter:title" content="Cadastro | ADUFPI Reservas"/>
        <meta property="twitter:url" content="https://carcara.vercel.app/"/>
        <meta property="twitter:description" content="Confira todas as reservas feitas por você!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <SignupPage />
    </>
  )
}

export default Signup