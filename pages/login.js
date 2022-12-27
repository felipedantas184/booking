import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import LoginPage from "../components/LoginPage"

const Login = () => {
  return (
    <LoginPage />
  )
}

export default Login