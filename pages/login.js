import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import LoginPage from "../components/LoginPage"
import Head from "next/head"

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | ADUFPI Reservas</title>
        <meta name="description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Login | ADUFPI Reservas"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="Login | ADUFPI Reservas"/>

        <meta property="twitter:title" content="Login | ADUFPI Reservas"/>
        <meta property="twitter:url" content="https://carcara.vercel.app/"/>
        <meta property="twitter:description" content="Falta pouco para conhecer os quartos disponíveis para sua reserva!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <LoginPage />
    </>
    
  )
}

export default Login